import Container from 'react-bootstrap/Container';
import {Routes, Route} from 'react-router-dom'
import {useDispatch, useSelector} from "react-redux";

import {Header} from "./components";
import {Home, FullModule, Registration, Login, Profile} from "./pages";
import {fetchAuthMe, selectIsAuth} from "./redux/slices/auth";
import React from 'react'

import Quiz from "./components/Quiz";
import {QuizProvider} from "./contexts/quiz";

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';



function App() {
    const dispatch = useDispatch()
    const isAuth = useSelector(selectIsAuth)

    React.useEffect(() => {
        dispatch(fetchAuthMe())
    }, [])

    return (
        <>
            <Header/>
            <Container maxWidth="lg">
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/me" element={<Profile/>}/>
                    <Route path="/modules/:id" element={<FullModule/>}/>
                    <Route path="/register" element={<Registration/>}/>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/quiz/" element={<QuizProvider><Quiz/></QuizProvider>}/>

                    {/*<Test />*/}
                    {/*<Profile />*/}
                </Routes>
            </Container>
        </>
    );
}

export default App;


