import {useContext} from "react";
import Question from "./Question";
import {QuizContext} from "../contexts/quiz";
import axios from "../axios";
import "../pages/indexquiz.css";
import {useNavigate} from "react-router-dom";

const Quiz = () => {
    const navigate = useNavigate()
    const onClick = async (count) => {
        await axios.patch("/learning/tests/submit", {answers: count})
            .then(res => {
                const tempmod = window.localStorage.getItem('currentModule')
                if (tempmod < 10) {
                    let tempurl = parseInt(tempmod)+1
                    window.localStorage.setItem('currentModule', tempurl)
                    navigate('/modules/'+tempurl)
                } else {
                    navigate('/me')
                }
            })
    }
    const [quizState, dispatch] = useContext(QuizContext);

    return (
        <div className="quiz">
            {quizState.showResults && (
                <div className="results">
                    <div className="congratulations">Тест выполнен</div>
                    <div className="results-info">
                        <div>Вы прошли тест</div>
                        <div>
                            Правильных ответов {quizState.correctAnswersCount} из&nbsp;
                            {quizState.questions.length}.
                        </div>
                    </div>
                    <div
                        onClick={() => onClick(quizState.correctAnswersCount/quizState.questions.length)}
                        className="next-button"
                    >
                        Перейти к следующему модулю
                    </div>
                </div>
            )}
            {!quizState.showResults && (
                <div>
                    <div className="score">
                        Question {quizState.currentQuestionIndex + 1}/
                        {quizState.questions.length}
                    </div>
                    <Question/>
                    {quizState.currentAnswer && (
                        <div
                            onClick={() => dispatch({type: "NEXT_QUESTION"})}
                            className="next-button"
                        >
                            Следующий вопрос
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default Quiz;
