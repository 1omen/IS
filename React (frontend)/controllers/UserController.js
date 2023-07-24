import {validationResult} from "express-validator";
import bcrypt from "bcrypt";
import UserModel from "../models/User.js";
import Role from "../models/Roles.js";
import jwt from "jsonwebtoken";

export const register = async (req, res) => {
    try {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(400).json(errors.array())
        }

        const password = req.body.password;
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(password, salt)
        const userRole = await Role.findOne({value: "USER"})

        const doc = new UserModel({
            name: req.body.name,
            lastname: req.body.lastname,
            email: req.body.email,
            roles: [userRole.value],
            passwordHash: hash
        })


        const user = await doc.save();

        const token = jwt.sign({
                _id: user._id,
                roles: user.roles,
            }, 'secret123',
            {
                expiresIn: '30d',
            })

        const {passwordHash, examPassed, ...userData} = user._doc

        res.json({
            ...userData,
            token,
        })
    } catch (e) {
        console.log(e);
        res.status(500).json({
            message: 'Something happened',
        })
    }
}

export const login = async (req, res) => {
    try {
        const user = await UserModel.findOne({email: req.body.email})
        if (!user) {
            return res.status(404).json({
                message: 'Неверный логин или пароль'
            })
        }

        const isValidPass = await bcrypt.compare(req.body.password, user._doc.passwordHash)

        if (!isValidPass) {
            return res.status(404).json({
                message: 'Неверный логин или пароль'
            })
        }

        const token = jwt.sign({
                _id: user._id,
                roles: user.roles,
            }, 'secret123',
            {
                expiresIn: '30d',
            })

        const {passwordHash, examPassed, ...userData} = user._doc

        res.json({
            ...userData,
            token,
        })

    } catch
        (e) {
        console.log(e);
        res.status(500).json({
            message: 'Ошибка авторизации',
        })
    }
}

export const getMe = async (req, res) => {
    try {
        const user = await UserModel.findById(req.userId)

        if (!user) {
            return res.status(404).json({
                message: "Not found",
            })
        }
        const {passwordHash, examPassed, ...userData} = user._doc

        res.json(userData)
    } catch (e) {
        console.log(e);
        res.status(500).json({
            message: 'Доступа нет',
        })
    }
}

export const moduleUnlock = async (req, res) => {
    try {
        const {currentModule: moduleNumber, readyforexam: examstatus} = await UserModel.findById(req.userId)
        if (examstatus) {
            return res.json({
                message: "Вы на последнем модуле"
            })
        }
        if (moduleNumber < 11) {
            const doc = await UserModel.findOneAndUpdate(
                {_id: req.userId},
                {$inc: {'currentModule': 1}},
            )

            if (!doc) {
                return res.status(500).json({
                    message: "Не удалось перейти к следующему модулю",
                })
            }

            res.json({
                success: true,
            })
        } else {
            const doc = await UserModel.findOneAndUpdate(
                {_id: req.userId},
                {'readyforexam': true},
            )

            if (!doc) {
                return res.status(500).json({
                    message: "Не удалось перейти к следующему модулю",
                })
            }

            res.json({
                success: true,
            })
        }


    } catch (e) {
        console.log(e);
        res.status(500).json({
            message: 'Ошибка с перехода на новый модуль',
        })
    }
}

export const testSubmit = async (req, res) => {

    const correctAnswersCount = req.body.answers;

    try {
        const {
            currentModule: moduleNumber,
            tests: testsList,
            readyforexam: examstatus
        } = await UserModel.findById(req.userId)
        if (moduleNumber !== testsList.length + 1) {
            return res.json({
                message: "Этот тест недоступен"
            })
        }

        const doc = await UserModel.findOneAndUpdate(
            {_id: req.userId},
            {$push: {tests: correctAnswersCount}},
        )

        if (examstatus) {
            return res.json({
                message: "Вы на последнем модуле"
            })
        }
        if (moduleNumber < 10) {
            const doc = await UserModel.findOneAndUpdate(
                {_id: req.userId},
                {$inc: {'currentModule': 1}},
            )

            if (!doc) {
                return res.status(500).json({
                    message: "Не удалось перейти к следующему модулю",
                })
            }

            res.json({
                success: true,
            })
        } else {
            const doc = await UserModel.findOneAndUpdate(
                {_id: req.userId},
                {'readyforexam': true},
            )

            if (!doc) {
                return res.status(500).json({
                    message: "Не удалось перейти к следующему модулю",
                })
            }


            res.json({
                success: true,
            })
        }
    } catch (e) {
        res.status(500)
    }


}