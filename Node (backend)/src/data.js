import {useSelector} from "react-redux";
import React from 'react';
import axios from "./axios";
import {useParams} from "react-router-dom";

const dataold = [
    {
        question: "первый вопрос",
        incorrectAnswers: [
            "Computer Style Sheets",
            "Creative Style Sheets",
            "Colorful Style Sheets",
        ],
        correctAnswer: "тру ответ",
    },
];

let result = dataold

if (Boolean(window.localStorage.getItem('token'))) {
    const data = async () => {
        const url = "/learning/tests/" + window.localStorage.getItem('currentModule')
        let myData
        await axios.get(url).then(res => {
            myData = res.data.quiz
        })

        return myData
    }

    result = await data();
}


// let myData
// export const Questions = async () => {
//     await axios.get("/learning/tests/1")
//         .then(res => {
//             myData = res.data.quiz
//         })
// }
export default result;
// export default data;
