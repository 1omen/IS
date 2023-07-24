import React from 'react';
import {Link} from 'react-router-dom'

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import {useDispatch, useSelector} from "react-redux";
import {logout, selectIsAuth} from "../../redux/slices/auth";
import {Navigate, useNavigate} from "react-router-dom";
import axios from "../../axios";


export const Header = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const isAuth = useSelector(selectIsAuth)
    const userData = useSelector((state) => state.auth.data)

    let userType = null
    let name = null
    let lastname = null
    let roleColor = null

    if (isAuth) {
        userType = userData.roles[0]
        name = userData.name
        lastname = userData.lastname
    }


    const onClickLogout = () => {
        if (window.confirm('Действительно хотите выйти?')) {
            dispatch(logout())
            window.localStorage.removeItem('token')
            window.localStorage.removeItem('currentModule')
            navigate('/login')
        }
    };


    switch (userType) {
        case "ADMIN":
            roleColor = "text-danger"
            break;
        case "TEACHER":
            roleColor = "text-primary"
            break;
        case "USER":
            roleColor = "text-success"
            break;
        default:
    }

    // const roleColor = {{userType == "ADMIN" ? "text-danger":null}{userType == "TEACHER" ? "text-primary":null}{userType == "USER" ? "text-success":null}}

    return (
        <header className="mb-5">
            <Navbar>
                <Container>
                    {!isAuth ?
                        (
                            <>
                                <Link to="/" style={{textDecoration: 'none'}}
                                      className="navbar-brand user-select-none fw-bold text-dark">Кодирование
                                    ИС</Link>
                                <Form className="d-flex">
                                    <Link className="btn btn-dark fw-bold rounded-5" to="/login">Войти</Link>
                                </Form></>
                        )
                        :
                        (
                            <>
                                <Link to="/" className="navbar-brand user-select-none fw-bold text-dark">Кодирование
                                    ИС
                                    <div className="fs-6">Личный кабинет</div>
                                </Link>
                                {/*<Link to='/' className="text-secondary text-decoration-none">Обучение</Link>*/}

                                {/*<div className="dropdown">*/}
                                {/*    <div className="navbar-brand user-select-none fw-bold text-dark">*/}
                                {/*        {lastname} {name}*/}
                                {/*        <sup className={roleColor}>*/}
                                {/*            <small>{userType == "ADMIN" ? "админ" : null}{userType == "TEACHER" ? "преподаватель" : null}{userType == "USER" ? "ученик" : null}</small>*/}
                                {/*        </sup>*/}
                                {/*    </div>*/}
                                {/*    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">*/}
                                {/*        <li><a className="dropdown-item" href="#">Мой профиль</a></li>*/}
                                {/*        <li><a className="dropdown-item" href="#">Выйти</a></li>*/}
                                {/*    </ul>*/}
                                {/*</div>*/}



                                    <div className="dropdown">
                                            <div className="navbar-brand user-select-none fw-bold text-dark dropdown-toggle"
                                                 role="button" data-bs-toggle="dropdown" aria-expanded="false">

                                                {lastname} {name}
                                                <sup className={roleColor}>
                                                    <small>{userType == "ADMIN" ? "админ" : null}{userType == "TEACHER" ? "преподаватель" : null}{userType == "USER" ? "ученик" : null}</small>
                                                </sup>
                                            </div>
                                        <ul className="dropdown-menu">
                                            <li><Link className="dropdown-item" to="/me">Мой профиль</Link></li>
                                            <li><a style={{cursor: "pointer"}} onClick={onClickLogout} className="dropdown-item">Выйти</a></li>
                                        </ul>
                                    </div>
                            </>
                        )
                    }
                </Container>
            </Navbar>
        </header>
    );
};
