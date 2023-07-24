import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {fetchRegister, selectIsAuth} from "../../redux/slices/auth";
import {useForm} from "react-hook-form";
import './Login.module.scss'
import {Navigate} from "react-router-dom";

export const Registration = () => {
    const isAuth = useSelector(selectIsAuth)
    const dispatch = useDispatch()
    const {register, handleSubmit, formState: {errors, isValid}} = useForm({
        defaultValues: {
            name: '',
            lastname: '',
            email: '',
            password: ''
        },
        mode: "onChange"
    })

    const onSubmit = async (values) => {
        const data = await dispatch(fetchRegister(values))

        if (!data.payload) {
            return alert('Не удалось зарегистрироваться!')
        }

        if ('token' in data.payload) {
            window.localStorage.setItem('token', data.payload.token)
            window.localStorage.setItem('currentModule', data.payload.currentModule)
        }
    }

    if (isAuth) {
        return <Navigate to="/modules/1"/>
    }

    return (
        <div className="d-flex justify-content-center mt-5">
            <main className="col-3">
                <h3 className="fw-bold mb-5 text-center">Регистрация</h3>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Имя</label>
                        <input type="text" className="form-control" id="name"
                               {...register('name', {required: "Укажите имя"})}/>
                        <div className="form-text text-danger">{errors.name?.message}</div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="lastname" className="form-label">Фамилия</label>
                        <input type="text" className="form-control" id="lastname"
                               {...register('lastname', {required: "Укажите фамилию"})}/>
                        <div className="form-text text-danger">{errors.lastname?.message}</div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Электронная почта</label>
                        <input type="email" className="form-control" id="email" aria-describedby="emailHelp"
                               {...register('email', {required: "Укажите почту"})}/>
                        <div className="form-text text-danger">{errors.email?.message}</div>
                    </div>
                    {/*<div className="mb-3">*/}
                    {/*    <label htmlFor="passwordCandidate" className="form-label">Пароль</label>*/}
                    {/*    <input type="password" className="form-control" id="passwordCandidate"/>*/}
                    {/*    <div id="passwordHelp" className="form-text">*/}
                    {/*        Пароль должен содержать от 8 до 20 символов.*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Пароль</label>
                        <input type="password" className="form-control" id="password"
                               {...register('password', {required: "Укажите пароль"})}/>
                        <div className="form-text text-danger">{errors.password?.message}</div>
                    </div>
                    <button disabled={!isValid} type="submit" className="btn btn-primary">Зарегистрироваться</button>
                </form>
            </main>
        </div>
    );
};
