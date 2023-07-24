import React from "react";
import ReactDOM from "react-dom";
import "./indexquiz.css";
import Quiz from "../components/Quiz";
import {QuizProvider} from "../contexts/quiz";

ReactDOM.render(
    <QuizProvider>
        <Quiz/>
    </QuizProvider>,
    document.getElementById("root")
);

export default Quiz;

// export const fullQuiz = () => {
//     return (
//         <QuizProvider>
//             <Quiz />
//         </QuizProvider>
//     )
// }
