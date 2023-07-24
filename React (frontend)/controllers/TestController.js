import TestModel from '../models/Test.js'

export const getAll = async (req, res) => {
    try {
        const tests = await TestModel.find()

        res.json(tests)
    } catch (e) {
        console.log(e)
        res.status(500).json({
            message: 'Unable to get tests'
        })
    }
}

export const getOne = async (req, res) => {
    try {
        const testId = req.params.id

        const test = await TestModel.findOne({
            id: testId,
        })

        if (!test) {
            return res.status(404).json({
                message: 'Test не существует'
            })
        }

        res.json(test)

    } catch (e) {
        console.log(e)
        res.status(500).json({
            message: 'Unable to get test'
        })
    }
}

export const remove = async (req, res) => {
    try {
        const testId = req.params.id

        const removedTest = await TestModel.findOneAndDelete({
            id: testId,
        })

        if (!removedTest) {
            return res.status(500).json({
                message: "Тест не найден и не удален",
            })
        }

        res.json({
            success: true,
        })


    } catch (e) {
        console.log(e)
        res.status(500).json({
            message: 'Unable to get Test'
        })
    }
}

export const create = async (req, res) => {
    try {
        const doc = new TestModel({
            id: req.body.id,
            quiz: req.body.quiz,
        })

        const test = await doc.save()

        res.json(test)
    } catch (e) {
        console.log(e)
        res.status(500).json({
            message: 'Error creating new test'
        })
    }
}