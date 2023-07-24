import {useSelector} from "react-redux";
import {Link} from "react-router-dom";
import React from "react";

export const Profile = () => {
    const userData = useSelector((state) => state.auth.data)

    const currentModule = userData?.currentModule
    const tests = userData?.tests
    let testItems
    if (tests) {
        testItems = tests.map((test, index) => (
            <li className="list-group-item" key={index}>{test * 100 + "%"}</li>
        ));
    }

    return (
        <div className="col-11 d-flex justify-content-between fs-4">
            <div><p className="">Текущий модуль: {currentModule}</p>
                <ol className="list-group list-group-numbered" style={{maxWidth: '300px'}}>Результаты тестирований:
                    {testItems}
                </ol>
            </div>
            <div>
                <Link to={"/modules/" + currentModule} className="btn btn-outline-secondary btn-lg">Продолжить
                    обучение</Link>
            </div>
        </div>
    )
}