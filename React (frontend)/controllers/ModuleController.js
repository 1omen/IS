import ModuleModel from '../models/Module.js'

export const getAll = async (req, res) => {
    try {
        const modules = await ModuleModel.find()

        res.json(modules)
    } catch (e) {
        console.log(e)
        res.status(500).json({
            message: 'Unable to get modules'
        })
    }
}

export const getOne = async (req, res) => {
    try {
        const moduleId = req.params.id

        const module = await ModuleModel.findOne({
            id: moduleId,
        })

        if (!module) {
            return res.status(404).json({
                message: 'Модуль не существует'
            })
        }

        res.json(module)

    } catch (e) {
        console.log(e)
        res.status(500).json({
            message: 'Unable to get module'
        })
    }
}

export const remove = async (req, res) => {
    try {
        const moduleId = req.params.id

        const removedModule = await ModuleModel.findOneAndDelete({
            id: moduleId,
        })

        if (!removedModule) {
            return res.status(500).json({
                message: "Модуль не найден и не удален",
            })
        }

        res.json({
            success: true,
        })


    } catch (e) {
        console.log(e)
        res.status(500).json({
            message: 'Unable to get module'
        })
    }
}

export const create = async (req, res) => {
    try {
        const doc = new ModuleModel({
            id: req.body.id,
            title: req.body.title,
            contentURL: req.body.contentURL,
        })

        const module = await doc.save()

        res.json(module)
    } catch (e) {
        console.log(e)
        res.status(500).json({
            message: 'Error creating new module'
        })
    }
}