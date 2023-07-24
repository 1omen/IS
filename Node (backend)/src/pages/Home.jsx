import React from 'react';
import {Link} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css';

export const Home = () => {
    return (
        <>
            <main className="d-grid container mt-5">
                <div className="d-flex justify-content-center mb-5 ml15">
                    <h3 className="col-8 fw-bolder word">
                        Кодирование -
                        <br/>Потенциальная эффективность кодирования
                        <br/>Алгебраические коды
                        <br/>Коды над решетками. Сверточные коды
                        <br/>Каскадные коды, кодированная модуляция, турбокоды
                        <br/>Коды с малой плотностью проверок на четкость
                    </h3>
                </div>
                <div className="d-flex justify-content-center mb-3">
                    <h4 className="">Узнай о кодировании все</h4>
                </div>
                <form className="d-flex justify-content-center">
                    <Link className="btn btn-dark fw-bold rounded-5" to="/register">Подробнее</Link>
                </form>
            </main>
        </>
);
};
