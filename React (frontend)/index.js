import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

import {registerValidation, loginValidation, moduleCreateValidation} from './validations.js'
import {checkAuth, checkRole} from './utils/index.js'
import {UserController, ModuleController, TestController} from './controllers/index.js'


mongoose.connect('mongodb+srv://omen:1337@cluster0.esuukak.mongodb.net/iis?retryWrites=true&w=majority')
    .then(() => console.log('DB connected'))
    .catch(() => console.log('Db error'))

const app = express();

app.use(express.json());
app.use(cors())
app.use('/sitedata', express.static('sitedata'))

app.post('/auth/login', loginValidation, UserController.login)
app.post('/auth/register', registerValidation, UserController.register);
app.get('/auth/me', checkAuth, UserController.getMe)

app.get('/learning/modules', checkAuth, ModuleController.getAll)
app.get('/learning/modules/:id',checkAuth, ModuleController.getOne)
app.post('/learning/modules', checkAuth, checkRole(['ADMIN']), moduleCreateValidation, ModuleController.create)
app.delete('/learning/modules/:id', checkAuth, checkRole(['ADMIN']), ModuleController.remove)

app.post('/learning/tests/:id', checkAuth, checkRole(['ADMIN']), TestController.create)
app.get('/learning/tests', checkAuth, TestController.getAll)
app.get('/learning/tests/:id', checkAuth, TestController.getOne)
app.delete('/learning/tests/:id', checkAuth, checkRole(['ADMIN']), TestController.remove)

// app.patch('/learning/modules/next', checkAuth, UserController.moduleUnlock) // переход ученика на новый модуль
app.patch('/learning/tests/submit', checkAuth, UserController.testSubmit) // отправка результата теста
// app.app.patch('/learning/modules/send-test', checkAuth, )


app.listen(4444, (err) => {
    if (err) {
        return console.log(err)
    }
    console.log('Server OK')
})