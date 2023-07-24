import {body} from "express-validator";

export const loginValidation = [
    body('email', 'Неверный формат почты').isEmail(),
    body('password').isLength({min: 7, max: 20}),
]

export const registerValidation = [
    body('email', 'Неверный формат почты').isEmail(),
    body('password').isLength({min: 7, max: 20}),
    body('name').isLength({min: 2}),
    body('lastname').isLength({min: 2}),
]

export const moduleCreateValidation = [
    body('id').isLength({min: 1}).isNumeric(),
    body('title').isLength({min: 3, max: 40}).isString(),
    body('contentURL').isNumeric(),
]







// const currentModule = 1;
// const moduleText = 'Текстовое содержание модуля, загружаемое из БД'
//
// function modulePage(number, text) {
//     return (
//         <html>
//         <body>
//         <div>
//             <h1>Это модуль под номером {number}</h1>
//         </div>
//             <p>{text}</p>
//         </body>
//         </html>
//     );
// }

