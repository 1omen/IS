import React from "react";
import {useForm} from "react-hook-form";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {fetchAuth, selectIsAuth} from "../../redux/slices/auth";
import {Navigate} from "react-router-dom";
import './Login.module.scss'

export const Login = () => {
    const isAuth = useSelector(selectIsAuth)
    const dispatch = useDispatch()
    const {register, handleSubmit, formState: {errors, isValid}} = useForm({
        defaultValues: {
            email: '',
            password: ''
        },
        mode: "onChange"
    })

    const onSubmit = async (values) => {
        const data = await dispatch(fetchAuth(values))

        if (!data.payload) {
            return alert('Не удалось авторизоваться')
        }

        if ('token' in data.payload) {
            window.localStorage.setItem('token', data.payload.token)
            window.localStorage.setItem('currentModule', data.payload.currentModule)
        }
    }

    if (isAuth) {
        return <Navigate to="/me"/>
    }
    
    return (
        <div className="d-flex justify-content-center mt-5">
            <main className="col-2">
                <h3 className="fw-bold mb-5 text-center">Авторизация</h3>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Электронная почта</label>
                        <input type="email" className="form-control" id="exampleInputEmail1"
                               aria-describedby="emailHelp"
                               {...register('email', {required: "Укажите почту"})}/>
                        <div className="form-text text-danger">{errors.email?.message}</div>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Пароль</label>

                        <input type="password" className="form-control" id="exampleInputPassword1"
                               {...register('password', {required: "Укажите пароль"})}/>
                        <div className="form-text text-danger">{errors.password?.message}</div>

                    </div>
                    <button disabled={!isValid} type="submit" className="btn btn-primary">Войти</button>
                    <br/>
                    <Link to="/register" className="form-text">
                        Не зарегистрированы?
                    </Link>
                </form>
            </main>
        </div>
    );
};
