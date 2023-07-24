import './Module.css'

export const Module = ({
                           id,
                           title,
                       }) => {

    const linkPart = "http://192.168.100.108:4444"
    
    
    return (
        <div>
            <p>Текущий модуль: {title} ({id}/10)</p>
            {id == 1 ? <>
                <div className="btn-group" role="group" aria-label="Оглавление">
                    <a type="button" className="btn btn-outline-primary" href="#Heading1">Постановка задачи</a>
                    <a type="button" className="btn btn-outline-primary" href="#Heading2">Обзор кодов</a>
                    <a type="button" className="btn btn-outline-primary" href="#Heading3">Выводы</a>
                </div>
                <div className="viewer mt-3 border border-3 col-10">
                    <img src={linkPart + "/sitedata/modules/1/1.1.jpg"} alt="" id="Heading1"/>
                    <img src={linkPart + "/sitedata/modules/1/1.2.jpg"} alt=""/>
                    <img src={linkPart + "/sitedata/modules/1/1.3.jpg"} alt=""/>
                    <img src={linkPart + "/sitedata/modules/1/1.4.jpg"} alt=""/>
                    <img src={linkPart + "/sitedata/modules/1/1.5.jpg"} alt=""/>
                    <img src={linkPart + "/sitedata/modules/1/1.6.jpg"} alt=""/>
                    <img src={linkPart + "/sitedata/modules/1/1.7.jpg"} alt=""/>
                    <img src={linkPart + "/sitedata/modules/1/1.8.jpg"} alt=""/>
                    <img src={linkPart + "/sitedata/modules/1/1.9.jpg"} alt=""/>
                    <img src={linkPart + "/sitedata/modules/1/1.10.jpg"} alt=""/>
                    <img src={linkPart + "/sitedata/modules/1/1.11.jpg"} alt=""/>
                    <img src={linkPart + "/sitedata/modules/1/1.12.jpg"} alt=""/>
                    <img src={linkPart + "/sitedata/modules/1/1.13.jpg"} alt=""/>
                    <img src={linkPart + "/sitedata/modules/1/1.14.jpg"} alt=""/>
                    <img src={linkPart + "/sitedata/modules/1/1.15.jpg"} alt="" id="Heading2"/>
                    <img src={linkPart + "/sitedata/modules/1/1.16.jpg"} alt=""/>
                    <img src={linkPart + "/sitedata/modules/1/1.17.jpg"} alt=""/>
                    <img src={linkPart + "/sitedata/modules/1/1.18.jpg"} alt="" id="Heading3"/>
                </div>
            </> : null}
            {id == 2 ? <>
                <div className="btn-group" role="group" aria-label="Оглавление">
                    <a type="button" className="btn btn-outline-primary" href="#Heading1">Арифметика ДП</a>
                    <a type="button" className="btn btn-outline-primary" href="#Heading2">Матрицы</a>
                    <a type="button" className="btn btn-outline-primary" href="#Heading3">Проверочная матрица</a>
                    <a type="button" className="btn btn-outline-primary" href="#Heading4">Примеры</a>
                    <a type="button" className="btn btn-outline-primary" href="#Heading5">Синдромное декодирование</a>
                    <a type="button" className="btn btn-outline-primary" href="#Heading6">Хэмминг</a>
                    <a type="button" className="btn btn-outline-primary" href="#Heading7">Выводы</a>
                </div>
                <div className="viewer mt-3 border border-3 col-10">
                    <img src={linkPart + "/sitedata/modules/2/2.1.jpg"} alt="" id="Heading1"/>
                    <img src={linkPart + "/sitedata/modules/2/2.2.jpg"} alt=""/>
                    <img src={linkPart + "/sitedata/modules/2/2.3.jpg"} alt=""/>
                    <img src={linkPart + "/sitedata/modules/2/2.4.jpg"} alt=""/>
                    <img src={linkPart + "/sitedata/modules/2/2.5.jpg"} alt=""/>
                    <img src={linkPart + "/sitedata/modules/2/2.6.jpg"} alt="" id="Heading2"/>
                    <img src={linkPart + "/sitedata/modules/2/2.7.jpg"} alt=""/>
                    <img src={linkPart + "/sitedata/modules/2/2.8.jpg"} alt=""/>
                    <img src={linkPart + "/sitedata/modules/2/2.9.jpg"} alt=""/>
                    <img src={linkPart + "/sitedata/modules/2/2.10.jpg"} alt=""/>
                    <img src={linkPart + "/sitedata/modules/2/2.11.jpg"} alt="" id="Heading3"/>
                    <img src={linkPart + "/sitedata/modules/2/2.12.jpg"} alt=""/>
                    <img src={linkPart + "/sitedata/modules/2/2.13.jpg"} alt="" id="Heading4"/>
                    <img src={linkPart + "/sitedata/modules/2/2.14.jpg"} alt=""/>
                    <img src={linkPart + "/sitedata/modules/2/2.15.jpg"} alt=""/>
                    <img src={linkPart + "/sitedata/modules/2/2.16.jpg"} alt=""/>
                    <img src={linkPart + "/sitedata/modules/2/2.17.jpg"} alt="" id="Heading5"/>
                    <img src={linkPart + "/sitedata/modules/2/2.18.jpg"} alt=""/>
                    <img src={linkPart + "/sitedata/modules/2/2.19.jpg"} alt=""/>
                    <img src={linkPart + "/sitedata/modules/2/2.20.jpg"} alt="" id="Heading6"/>
                    <img src={linkPart + "/sitedata/modules/2/2.21.jpg"} alt=""/>
                    <img src={linkPart + "/sitedata/modules/2/2.22.jpg"} alt=""/>
                    <img src={linkPart + "/sitedata/modules/2/2.23.jpg"} alt=""/>
                    <img src={linkPart + "/sitedata/modules/2/2.24.jpg"} alt=""/>
                    <img src={linkPart + "/sitedata/modules/2/2.25.jpg"} alt=""/>
                    <img src={linkPart + "/sitedata/modules/2/2.26.jpg"} alt=""/>
                    <img src={linkPart + "/sitedata/modules/2/2.27.jpg"} alt=""/>
                    <img src={linkPart + "/sitedata/modules/2/2.28.jpg"} alt=""/>
                    <img src={linkPart + "/sitedata/modules/2/2.29.jpg"} alt=""/>
                    <img src={linkPart + "/sitedata/modules/2/2.30.jpg"} alt=""/>
                    <img src={linkPart + "/sitedata/modules/2/2.31.jpg"} alt="" id="Heading7"/>
                    <img src={linkPart + "/sitedata/modules/2/2.32.jpg"} alt=""/>
                </div>
            </> : null}
            {id == 3 ? <>
                <div className="btn-group" role="group" aria-label="Оглавление">
                    <a type="button" className="btn btn-outline-primary" href="#Heading1">Граница Хэмминга</a>
                    <a type="button" className="btn btn-outline-primary" href="#Heading2">...В-Г</a>
                    <a type="button" className="btn btn-outline-primary" href="#Heading3">...Плоткина</a>
                    <a type="button" className="btn btn-outline-primary" href="#Heading4">...Грайсмера</a>
                    <a type="button" className="btn btn-outline-primary" href="#Heading5">Другие...</a>
                    <a type="button" className="btn btn-outline-primary" href="#Heading6">Спектр кода</a>
                </div>
                <div className="viewer mt-3 border border-3 col-10" >
                    <img src={linkPart + "/sitedata/modules/3/3.1.jpg"} alt=""/>
                    <img src={linkPart + "/sitedata/modules/3/3.2.jpg"} alt="" id="Heading1"/>
                    <img src={linkPart + "/sitedata/modules/3/3.3.jpg"} alt="" id="Heading2"/>
                    <img src={linkPart + "/sitedata/modules/3/3.4.jpg"} alt=""/>
                    <img src={linkPart + "/sitedata/modules/3/3.5.jpg"} alt=""/>
                    <img src={linkPart + "/sitedata/modules/3/3.6.jpg"} alt="" id="Heading3"/>
                    <img src={linkPart + "/sitedata/modules/3/3.7.jpg"} alt=""/>
                    <img src={linkPart + "/sitedata/modules/3/3.8.jpg"} alt=""/>
                    <img src={linkPart + "/sitedata/modules/3/3.9.jpg"} alt="" id="Heading4"/>
                    <img src={linkPart + "/sitedata/modules/3/3.10.jpg"} alt=""/>
                    <img src={linkPart + "/sitedata/modules/3/3.11.jpg"} alt=""/>
                    <img src={linkPart + "/sitedata/modules/3/3.12.jpg"} alt="" id="Heading5"/>
                </div>
            </> : null}
            {id == 4 ? <>
                <div className="btn-group-vertical" role="group" aria-label="Оглавление">
                    <div className="btn-group" role="group" aria-label="Оглавление1">
                        <a type="button" className="btn btn-outline-primary" href="#Heading1">Декодирование по МП</a>
                        <a type="button" className="btn btn-outline-primary" href="#Heading2">Алг. Витерби</a>
                        <a type="button" className="btn btn-outline-primary" href="#Heading3">Минимальная решетка кода</a>
                        <a type="button" className="btn btn-outline-primary" href="#Heading4">Построение решетки кода</a>
                    </div>
                    <div className="btn-group" role="group" aria-label="Оглавление2">
                        <a type="button" className="btn btn-outline-primary" href="#Heading5">Алг. БКДР</a>
                        <a type="button" className="btn btn-outline-primary" href="#Heading6">Сложность решеток</a>
                        <a type="button" className="btn btn-outline-primary" href="#Heading7">Практические алгоритмы</a>
                        <a type="button" className="btn btn-outline-primary" href="#Heading8">Выводы</a>
                    </div>
                </div>
                <div className="viewer mt-3 border border-3 col-10" >
                    <img src={linkPart + "/sitedata/modules/4/4.1.jpg"} alt="" id="Heading1"/>
                    <img src={linkPart + "/sitedata/modules/4/4.2.jpg"} alt=""/>
                    <img src={linkPart + "/sitedata/modules/4/4.3.jpg"} alt=""/>
                    <img src={linkPart + "/sitedata/modules/4/4.4.jpg"} alt="" id="Heading2"/>
                    <img src={linkPart + "/sitedata/modules/4/4.5.jpg"} alt=""/>
                    <img src={linkPart + "/sitedata/modules/4/4.6.jpg"} alt=""/>
                    <img src={linkPart + "/sitedata/modules/4/4.7.jpg"} alt=""/>
                    <img src={linkPart + "/sitedata/modules/4/4.8.jpg"} alt="" id="Heading3"/>
                    <img src={linkPart + "/sitedata/modules/4/4.9.jpg"} alt=""/>
                    <img src={linkPart + "/sitedata/modules/4/4.10.jpg"} alt=""/>
                    <img src={linkPart + "/sitedata/modules/4/4.11.jpg"} alt=""/>
                    <img src={linkPart + "/sitedata/modules/4/4.12.jpg"} alt="" id="Heading4"/>
                    <img src={linkPart + "/sitedata/modules/4/4.13.jpg"} alt=""/>
                    <img src={linkPart + "/sitedata/modules/4/4.14.jpg"} alt=""/>
                    <img src={linkPart + "/sitedata/modules/4/4.15.jpg"} alt=""/>
                    <img src={linkPart + "/sitedata/modules/4/4.16.jpg"} alt=""/>
                    <img src={linkPart + "/sitedata/modules/4/4.17.jpg"} alt=""/>
                    <img src={linkPart + "/sitedata/modules/4/4.18.jpg"} alt=""/>
                    <img src={linkPart + "/sitedata/modules/4/4.19.jpg"} alt="" id="Heading5"/>
                    <img src={linkPart + "/sitedata/modules/4/4.20.jpg"} alt=""/>
                    <img src={linkPart + "/sitedata/modules/4/4.21.jpg"} alt=""/>
                    <img src={linkPart + "/sitedata/modules/4/4.22.jpg"} alt=""/>
                    <img src={linkPart + "/sitedata/modules/4/4.23.jpg"} alt=""/>
                    <img src={linkPart + "/sitedata/modules/4/4.24.jpg"} alt=""/>
                    <img src={linkPart + "/sitedata/modules/4/4.25.jpg"} alt=""/>
                    <img src={linkPart + "/sitedata/modules/4/4.26.jpg"} alt=""/>
                    <img src={linkPart + "/sitedata/modules/4/4.27.jpg"} alt=""/>
                    <img src={linkPart + "/sitedata/modules/4/4.28.jpg"} alt=""/>
                    <img src={linkPart + "/sitedata/modules/4/4.29.jpg"} alt="" id="Heading6"/>
                    <img src={linkPart + "/sitedata/modules/4/4.30.jpg"} alt=""/>
                    <img src={linkPart + "/sitedata/modules/4/4.31.jpg"} alt=""/>
                    <img src={linkPart + "/sitedata/modules/4/4.32.jpg"} alt=""/>
                    <img src={linkPart + "/sitedata/modules/4/4.33.jpg"} alt=""/>
                    <img src={linkPart + "/sitedata/modules/4/4.34.jpg"} alt=""id="Heading7"/>
                    <img src={linkPart + "/sitedata/modules/4/4.35.jpg"} alt=""/>
                    <img src={linkPart + "/sitedata/modules/4/4.36.jpg"} alt=""/>
                    <img src={linkPart + "/sitedata/modules/4/4.37.jpg"} alt=""/>
                    <img src={linkPart + "/sitedata/modules/4/4.38.jpg"} alt=""/>
                    <img src={linkPart + "/sitedata/modules/4/4.39.jpg"} alt=""/>
                    <img src={linkPart + "/sitedata/modules/4/4.40.jpg"} alt=""/>
                    <img src={linkPart + "/sitedata/modules/4/4.41.jpg"} alt=""/>
                    <img src={linkPart + "/sitedata/modules/4/4.42.jpg"} alt=""/>
                    <img src={linkPart + "/sitedata/modules/4/4.43.jpg"} alt=""id="Heading8"/>
                    <img src={linkPart + "/sitedata/modules/4/4.44.jpg"} alt=""/>
                </div>
            </> : null}
            {id == 5 ? <>
                <div className="btn-group" role="group" aria-label="Оглавление1">
                    <a type="button" className="btn btn-outline-primary" href="#Heading1">Полиномы</a>
                    <a type="button" className="btn btn-outline-primary" href="#Heading2">Примеры циклических кодов</a>
                    <a type="button" className="btn btn-outline-primary" href="#Heading3">Синдром</a>
                    <a type="button" className="btn btn-outline-primary" href="#Heading4">Выводы</a>
                </div>
                <div className="viewer mt-3 border border-3 col-10" >
                    <img src={linkPart + "/sitedata/modules/5/5.1.jpg"} alt=""/>
                    <img src={linkPart + "/sitedata/modules/5/5.2.jpg"} alt="" id="Heading1"/>
                    <img src={linkPart + "/sitedata/modules/5/5.3.jpg"} alt=""/>
                    <img src={linkPart + "/sitedata/modules/5/5.4.jpg"} alt=""/>
                    <img src={linkPart + "/sitedata/modules/5/5.5.jpg"} alt=""/>
                    <img src={linkPart + "/sitedata/modules/5/5.6.jpg"} alt=""/>
                    <img src={linkPart + "/sitedata/modules/5/5.7.jpg"} alt="" id="Heading2"/>
                    <img src={linkPart + "/sitedata/modules/5/5.8.jpg"} alt=""/>
                    <img src={linkPart + "/sitedata/modules/5/5.9.jpg"} alt=""/>
                    <img src={linkPart + "/sitedata/modules/5/5.10.jpg"} alt=""/>
                    <img src={linkPart + "/sitedata/modules/5/5.11.jpg"} alt=""/>
                    <img src={linkPart + "/sitedata/modules/5/5.12.jpg"} alt=""/>
                    <img src={linkPart + "/sitedata/modules/5/5.13.jpg"} alt="" id="Heading3"/>
                    <img src={linkPart + "/sitedata/modules/5/5.14.jpg"} alt=""/>
                    <img src={linkPart + "/sitedata/modules/5/5.15.jpg"} alt=""/>
                    <img src={linkPart + "/sitedata/modules/5/5.16.jpg"} alt=""/>
                    <img src={linkPart + "/sitedata/modules/5/5.17.jpg"} alt=""/>
                    <img src={linkPart + "/sitedata/modules/5/5.18.jpg"} alt=""/>
                    <img src={linkPart + "/sitedata/modules/5/5.19.jpg"} alt=""/>
                    <img src={linkPart + "/sitedata/modules/5/5.20.jpg"} alt="" id="Heading4"/>
                </div>
            </> : null}
            {id == 6 ? <>
                <div className="btn-group" role="group" aria-label="Оглавление1">
                    <a type="button" className="btn btn-outline-primary" href="#Heading1">Определение БЧХ-кода</a>
                    <a type="button" className="btn btn-outline-primary" href="#Heading2">Построение...</a>
                    <a type="button" className="btn btn-outline-primary" href="#Heading3">Коды Рида-Соломона</a>
                </div>
                <div className="viewer mt-3 border border-3 col-10" >
                    <img src={linkPart + "/sitedata/modules/6/6.1.jpg"} alt=""/>
                    <img src={linkPart + "/sitedata/modules/6/6.2.jpg"} alt="" id="Heading1"/>
                    <img src={linkPart + "/sitedata/modules/6/6.3.jpg"} alt=""/>
                    <img src={linkPart + "/sitedata/modules/6/6.4.jpg"} alt=""/>
                    <img src={linkPart + "/sitedata/modules/6/6.5.jpg"} alt=""/>
                    <img src={linkPart + "/sitedata/modules/6/6.6.jpg"} alt=""/>
                    <img src={linkPart + "/sitedata/modules/6/6.7.jpg"} alt=""/>
                    <img src={linkPart + "/sitedata/modules/6/6.8.jpg"} alt=""/>
                    <img src={linkPart + "/sitedata/modules/6/6.9.jpg"} alt=""/>
                    <img src={linkPart + "/sitedata/modules/6/6.10.jpg"} alt="" id="Heading2"/>
                    <img src={linkPart + "/sitedata/modules/6/6.11.jpg"} alt=""/>
                    <img src={linkPart + "/sitedata/modules/6/6.12.jpg"} alt=""/>
                    <img src={linkPart + "/sitedata/modules/6/6.13.jpg"} alt="" id="Heading3"/>
                    <img src={linkPart + "/sitedata/modules/6/6.14.jpg"} alt=""/>
                    <img src={linkPart + "/sitedata/modules/6/6.15.jpg"} alt=""/>
                </div>
            </> : null}
            {id == 7 ? <>
                <div className="btn-group" role="group" aria-label="Оглавление1">
                    <a type="button" className="btn btn-outline-primary" href="#Heading1">Алг. П-Г-Ц</a>
                    <a type="button" className="btn btn-outline-primary" href="#Heading2">...Б-М</a>
                    <a type="button" className="btn btn-outline-primary" href="#Heading3">...Форни</a>
                    <a type="button" className="btn btn-outline-primary" href="#Heading4">Исправление ошибок</a>
                    <a type="button" className="btn btn-outline-primary" href="#Heading5">МОР</a>
                </div>
                <div className="viewer mt-3 border border-3 col-10" >
                    <img src={linkPart + "/sitedata/modules/7/7.1.jpg"} alt=""/>
                    <img src={linkPart + "/sitedata/modules/7/7.2.jpg"} alt=""  id="Heading1"/>
                    <img src={linkPart + "/sitedata/modules/7/7.3.jpg"} alt=""/>
                    <img src={linkPart + "/sitedata/modules/7/7.4.jpg"} alt=""/>
                    <img src={linkPart + "/sitedata/modules/7/7.5.jpg"} alt=""  id="Heading2"/>
                    <img src={linkPart + "/sitedata/modules/7/7.6.jpg"} alt=""/>
                    <img src={linkPart + "/sitedata/modules/7/7.7.jpg"} alt=""/>
                    <img src={linkPart + "/sitedata/modules/7/7.8.jpg"} alt=""/>
                    <img src={linkPart + "/sitedata/modules/7/7.9.jpg"} alt=""/>
                    <img src={linkPart + "/sitedata/modules/7/7.10.jpg"} alt=""/>
                    <img src={linkPart + "/sitedata/modules/7/7.11.jpg"} alt=""/>
                    <img src={linkPart + "/sitedata/modules/7/7.12.jpg"} alt=""  id="Heading3"/>
                    <img src={linkPart + "/sitedata/modules/7/7.13.jpg"} alt=""/>
                    <img src={linkPart + "/sitedata/modules/7/7.14.jpg"} alt=""/>
                    <img src={linkPart + "/sitedata/modules/7/7.15.jpg"} alt=""  id="Heading4"/>
                    <img src={linkPart + "/sitedata/modules/7/7.16.jpg"} alt=""/>
                    <img src={linkPart + "/sitedata/modules/7/7.17.jpg"} alt=""/>
                    <img src={linkPart + "/sitedata/modules/7/7.18.jpg"} alt=""/>
                    <img src={linkPart + "/sitedata/modules/7/7.19.jpg"} alt=""/>
                    <img src={linkPart + "/sitedata/modules/7/7.20.jpg"} alt=""  id="Heading5"/>
                    <img src={linkPart + "/sitedata/modules/7/7.21.jpg"} alt=""/>
                    <img src={linkPart + "/sitedata/modules/7/7.22.jpg"} alt=""/>
                    <img src={linkPart + "/sitedata/modules/7/7.23.jpg"} alt=""/>
                </div>
            </> : null}
            {id == 8 ? <>
                <div className="btn-group-vertical" role="group" aria-label="Оглавление">
                    <div className="btn-group" role="group" aria-label="Оглавление1">
                        <a type="button" className="btn btn-outline-primary" href="#Heading1">Представление</a>
                        <a type="button" className="btn btn-outline-primary" href="#Heading2">Спектр</a>
                        <a type="button" className="btn btn-outline-primary" href="#Heading3">Оценки ошибки</a>

                    </div>
                    <div className="btn-group" role="group" aria-label="Оглавление2">
                        <a type="button" className="btn btn-outline-primary" href="#Heading3">Оценки ошибки</a>
                        <a type="button" className="btn btn-outline-primary" href="#Heading5">Высокоскоростные...</a>
                        <a type="button" className="btn btn-outline-primary" href="#Heading5">Построение блоковых кодов</a>
                    </div>
                </div>
                <div className="viewer mt-3 border border-3 col-10" >
                    <img src={linkPart + "/sitedata/modules/8/8.1.jpg"} alt=""/>
                    <img src={linkPart + "/sitedata/modules/8/8.2.jpg"} alt="" id="Heading1"/>
                    <img src={linkPart + "/sitedata/modules/8/8.3.jpg"} alt=""/>
                    <img src={linkPart + "/sitedata/modules/8/8.4.jpg"} alt=""/>
                    <img src={linkPart + "/sitedata/modules/8/8.5.jpg"} alt=""/>
                    <img src={linkPart + "/sitedata/modules/8/8.6.jpg"} alt=""/>
                    <img src={linkPart + "/sitedata/modules/8/8.7.jpg"} alt=""/>
                    <img src={linkPart + "/sitedata/modules/8/8.8.jpg"} alt=""/>
                    <img src={linkPart + "/sitedata/modules/8/8.9.jpg"} alt=""/>
                    <img src={linkPart + "/sitedata/modules/8/8.10.jpg"} alt=""/>
                    <img src={linkPart + "/sitedata/modules/8/8.11.jpg"} alt=""/>
                    <img src={linkPart + "/sitedata/modules/8/8.12.jpg"} alt="" id="Heading2"/>
                    <img src={linkPart + "/sitedata/modules/8/8.13.jpg"} alt=""/>
                    <img src={linkPart + "/sitedata/modules/8/8.14.jpg"} alt=""/>
                    <img src={linkPart + "/sitedata/modules/8/8.15.jpg"} alt=""/>
                    <img src={linkPart + "/sitedata/modules/8/8.16.jpg"} alt=""/>
                    <img src={linkPart + "/sitedata/modules/8/8.17.jpg"} alt=""/>
                    <img src={linkPart + "/sitedata/modules/8/8.18.jpg"} alt=""/>
                    <img src={linkPart + "/sitedata/modules/8/8.19.jpg"} alt="" id="Heading3"/>
                    <img src={linkPart + "/sitedata/modules/8/8.20.jpg"} alt=""/>
                    <img src={linkPart + "/sitedata/modules/8/8.21.jpg"} alt=""/>
                    <img src={linkPart + "/sitedata/modules/8/8.22.jpg"} alt=""/>
                    <img src={linkPart + "/sitedata/modules/8/8.23.jpg"} alt=""/>
                    <img src={linkPart + "/sitedata/modules/8/8.24.jpg"} alt="" id="Heading4"/>
                    <img src={linkPart + "/sitedata/modules/8/8.25.jpg"} alt=""/>
                    <img src={linkPart + "/sitedata/modules/8/8.26.jpg"} alt=""/>
                    <img src={linkPart + "/sitedata/modules/8/8.27.jpg"} alt=""/>
                    <img src={linkPart + "/sitedata/modules/8/8.28.jpg"} alt=""/>
                    <img src={linkPart + "/sitedata/modules/8/8.29.jpg"} alt=""/>
                    <img src={linkPart + "/sitedata/modules/8/8.30.jpg"} alt=""/>
                    <img src={linkPart + "/sitedata/modules/8/8.31.jpg"} alt=""/>
                    <img src={linkPart + "/sitedata/modules/8/8.32.jpg"} alt="" id="Heading5"/>
                    <img src={linkPart + "/sitedata/modules/8/8.33.jpg"} alt=""/>
                    <img src={linkPart + "/sitedata/modules/8/8.34.jpg"} alt=""/>
                    <img src={linkPart + "/sitedata/modules/8/8.35.jpg"} alt=""/>
                    <img src={linkPart + "/sitedata/modules/8/8.36.jpg"} alt="" id="Heading6"/>
                    <img src={linkPart + "/sitedata/modules/8/8.37.jpg"} alt=""/>
                    <img src={linkPart + "/sitedata/modules/8/8.38.jpg"} alt=""/>
                    <img src={linkPart + "/sitedata/modules/8/8.39.jpg"} alt=""/>
                    <img src={linkPart + "/sitedata/modules/8/8.40.jpg"} alt=""/>
                    <img src={linkPart + "/sitedata/modules/8/8.41.jpg"} alt=""/>
                    <img src={linkPart + "/sitedata/modules/8/8.42.jpg"} alt=""/>
                </div>
            </> : null}
            {id == 9 ? <>
                <div className="btn-group" role="group" aria-label="Оглавление1">
                    <a type="button" className="btn btn-outline-primary" href="#Heading1">Кодер сверточного кода</a>
                    <a type="button" className="btn btn-outline-primary" href="#Heading2">Смитова форма</a>
                    <a type="button" className="btn btn-outline-primary" href="#Heading3">МБП матрица...</a>
                    <a type="button" className="btn btn-outline-primary" href="#Heading4">Дуальный код</a>
                    <a type="button" className="btn btn-outline-primary" href="#Heading5">Выводы</a>
                </div>
                <div className="viewer mt-3 border border-3 col-10" >
                    <img src={linkPart + "/sitedata/modules/9/9.1.jpg"} alt="" id="Heading1"/>
                    <img src={linkPart + "/sitedata/modules/9/9.2.jpg"} alt=""/>
                    <img src={linkPart + "/sitedata/modules/9/9.3.jpg"} alt=""/>
                    <img src={linkPart + "/sitedata/modules/9/9.4.jpg"} alt=""/>
                    <img src={linkPart + "/sitedata/modules/9/9.5.jpg"} alt=""/>
                    <img src={linkPart + "/sitedata/modules/9/9.6.jpg"} alt=""/>
                    <img src={linkPart + "/sitedata/modules/9/9.7.jpg"} alt=""/>
                    <img src={linkPart + "/sitedata/modules/9/9.8.jpg"} alt=""/>
                    <img src={linkPart + "/sitedata/modules/9/9.9.jpg"} alt="" id="Heading2"/>
                    <img src={linkPart + "/sitedata/modules/9/9.10.jpg"} alt=""/>
                    <img src={linkPart + "/sitedata/modules/9/9.11.jpg"} alt=""/>
                    <img src={linkPart + "/sitedata/modules/9/9.12.jpg"} alt=""/>
                    <img src={linkPart + "/sitedata/modules/9/9.13.jpg"} alt=""/>
                    <img src={linkPart + "/sitedata/modules/9/9.14.jpg"} alt="" id="Heading3"/>
                    <img src={linkPart + "/sitedata/modules/9/9.15.jpg"} alt=""/>
                    <img src={linkPart + "/sitedata/modules/9/9.16.jpg"} alt=""/>
                    <img src={linkPart + "/sitedata/modules/9/9.17.jpg"} alt=""/>
                    <img src={linkPart + "/sitedata/modules/9/9.18.jpg"} alt="" id="Heading4"/>
                    <img src={linkPart + "/sitedata/modules/9/9.19.jpg"} alt=""/>
                    <img src={linkPart + "/sitedata/modules/9/9.20.jpg"} alt=""/>
                    <img src={linkPart + "/sitedata/modules/9/9.21.jpg"} alt=""/>
                    <img src={linkPart + "/sitedata/modules/9/9.22.jpg"} alt="" id="Heading5"/>
                </div>
            </> : null}
            {id == 10 ? <>
                <div className="btn-group" role="group" aria-label="Оглавление1">
                    <a type="button" className="btn btn-outline-primary" href="#Heading1">Итеративные коды</a>
                    <a type="button" className="btn btn-outline-primary" href="#Heading2">Каскадные...</a>
                    <a type="button" className="btn btn-outline-primary" href="#Heading3">Турбо...</a>
                    <a type="button" className="btn btn-outline-primary" href="#Heading4">Кодированная модуляция</a>
                </div>
                <div className="viewer mt-3 border border-3 col-10" >
                    <img src={linkPart + "/sitedata/modules/10/10.1.jpg"} alt=""/>
                    <img src={linkPart + "/sitedata/modules/10/10.2.jpg"} alt="" id="Heading1"/>
                    <img src={linkPart + "/sitedata/modules/10/10.3.jpg"} alt=""/>
                    <img src={linkPart + "/sitedata/modules/10/10.4.jpg"} alt=""/>
                    <img src={linkPart + "/sitedata/modules/10/10.5.jpg"} alt=""/>
                    <img src={linkPart + "/sitedata/modules/10/10.6.jpg"} alt="" id="Heading2"/>
                    <img src={linkPart + "/sitedata/modules/10/10.7.jpg"} alt=""/>
                    <img src={linkPart + "/sitedata/modules/10/10.8.jpg"} alt=""/>
                    <img src={linkPart + "/sitedata/modules/10/10.9.jpg"} alt=""/>
                    <img src={linkPart + "/sitedata/modules/10/10.10.jpg"} alt=""/>
                    <img src={linkPart + "/sitedata/modules/10/10.11.jpg"} alt=""/>
                    <img src={linkPart + "/sitedata/modules/10/10.12.jpg"} alt="" id="Heading3"/>
                    <img src={linkPart + "/sitedata/modules/10/10.13.jpg"} alt=""/>
                    <img src={linkPart + "/sitedata/modules/10/10.14.jpg"} alt=""/>
                    <img src={linkPart + "/sitedata/modules/10/10.15.jpg"} alt=""/>
                    <img src={linkPart + "/sitedata/modules/10/10.16.jpg"} alt=""/>
                    <img src={linkPart + "/sitedata/modules/10/10.17.jpg"} alt=""/>
                    <img src={linkPart + "/sitedata/modules/10/10.18.jpg"} alt=""/>
                    <img src={linkPart + "/sitedata/modules/10/10.19.jpg"} alt=""/>
                    <img src={linkPart + "/sitedata/modules/10/10.20.jpg"} alt=""/>
                    <img src={linkPart + "/sitedata/modules/10/10.21.jpg"} alt=""/>
                    <img src={linkPart + "/sitedata/modules/10/10.22.jpg"} alt=""/>
                    <img src={linkPart + "/sitedata/modules/10/10.23.jpg"} alt="" id="Heading4"/>
                    <img src={linkPart + "/sitedata/modules/10/10.24.jpg"} alt=""/>
                    <img src={linkPart + "/sitedata/modules/10/10.25.jpg"} alt=""/>
                    <img src={linkPart + "/sitedata/modules/10/10.26.jpg"} alt=""/>
                    <img src={linkPart + "/sitedata/modules/10/10.27.jpg"} alt=""/>
                    <img src={linkPart + "/sitedata/modules/10/10.28.jpg"} alt=""/>
                    <img src={linkPart + "/sitedata/modules/10/10.29.jpg"} alt=""/>
                    <img src={linkPart + "/sitedata/modules/10/10.30.jpg"} alt=""/>
                    <img src={linkPart + "/sitedata/modules/10/10.31.jpg"} alt=""/>
                    <img src={linkPart + "/sitedata/modules/10/10.32.jpg"} alt=""/>
                    <img src={linkPart + "/sitedata/modules/10/10.33.jpg"} alt=""/>
                    <img src={linkPart + "/sitedata/modules/10/10.34.jpg"} alt=""/>
                    <img src={linkPart + "/sitedata/modules/10/10.35.jpg"} alt=""/>
                    <img src={linkPart + "/sitedata/modules/10/10.36.jpg"} alt=""/>
                    <img src={linkPart + "/sitedata/modules/10/10.37.jpg"} alt=""/>
                    <img src={linkPart + "/sitedata/modules/10/10.38.jpg"} alt=""/>
                    <img src={linkPart + "/sitedata/modules/10/10.39.jpg"} alt=""/>
                    <img src={linkPart + "/sitedata/modules/10/10.40.jpg"} alt=""/>
                    <img src={linkPart + "/sitedata/modules/10/10.41.jpg"} alt=""/>
                    <img src={linkPart + "/sitedata/modules/10/10.42.jpg"} alt=""/>
                    <img src={linkPart + "/sitedata/modules/10/10.43.jpg"} alt=""/>
                </div>
            </> : null}
        </div>

    )
}