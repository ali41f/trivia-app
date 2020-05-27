import React, { useState, useEffect } from 'react'
import Header from '../components/Header/Header'
import { SingleQuestion } from '../components/SingleQuestion/SingleQuestion';
import { Container } from '@material-ui/core';
import { Correct } from '../components/Correct';
import { Wrong } from '../components/Wrong';
import { Timeup } from '../components/Timeup';
import Lottie from 'react-lottie';
import animation from '../assets/loading2.json'
import { Redirect } from "react-router-dom";
interface QuestionProps {
    category: string | number;
    difficulty: string;
    setMessage: (m: string) => void;
}

export const QuestionsTimer: React.FC<QuestionProps> = ({ category, difficulty, setMessage }) => {

    const [page, setPage] = useState<string>('question')
    const [loading, setLoading] = useState<boolean>(true)
    const [fetchedData, setFetchedData] = useState([])
    const [questionNum, setQuestionNum] = useState<number>(1)
    const [totalQuestions, setTotalQuestions] = useState<number>(10)
    const [points, setPoints] = useState<number>(0)
    const [earned, setEarned] = useState<number>(0)
    const [correctOption, setCorrectOption] = useState<string>('')


    useEffect(() => {
        let url = 'https://opentdb.com/api.php?amount=10&type=multiple'
        if (category !== "any") {
            url += "&category=" + category
        }
        if (difficulty != "any") {
            url += "&difficulty=" + difficulty
        }
        //console.log(url)
        setMessage("")
        fetch(url)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                //console.log(data.results)
                setFetchedData(data.results)
                setTotalQuestions(data.results.length)
                //console.log(data.results.length)
                if (!data.results.length) {
                    setMessage("No question matches your selected options. Please change options.")
                    setPage('noQuestions')
                }
                setLoading(false)
            });
    }, [])

    const nextQuestion = (r: string) => {
        if (questionNum == totalQuestions) {
            //setPage("allAnswered")
        } else {
            setQuestionNum(p => p + 1)
            setPage("question")
        }
    }

    let renderPage = () => {
        switch (page) {
            case "question":
                return <SingleQuestion
                    correctOption={(c) => setCorrectOption(c)}
                    result={(r) => setPage(r)}
                    questionObj={fetchedData[questionNum - 1]} />
                break
            case "timeup":
                return <Timeup
                    totalQuestions={totalQuestions}
                    questionNum={questionNum}
                    points={points}
                    nextQuestion={nextQuestion} />
                break
            case "correct":
                return <Correct
                    totalQuestions={totalQuestions}
                    questionNum={questionNum}
                    points={points}
                    earned={earned}
                    nextQuestion={nextQuestion} />
                break
            case "wrong":
                return <Wrong
                    totalQuestions={totalQuestions}
                    questionNum={questionNum}
                    points={points}
                    correctOption={correctOption}
                    nextQuestion={nextQuestion} />
                break
            case "noQuestions":
                return <Redirect to="/" />
                break
        }
    }
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animation,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };
    const increasePoints = (rs: number) => {
        setPoints((prevpoints) => ((rs * 10) + prevpoints))
        setEarned(rs * 10)
    }
    return (
        loading ? (
            <React.Fragment>
                <Lottie options={defaultOptions} width={300} height={300} />
            </React.Fragment>
        ) : (
                <React.Fragment>
                    <Header
                        totalQuestions={totalQuestions}
                        questionNum={questionNum}
                        page={page}
                        timeUpPage={() => setPage("timeup")}
                        remainingSeconds={increasePoints}
                        totalPoints={points}
                    />
                    <Container style={{ textAlign: "center" }} maxWidth="sm">
                        {renderPage()}
                    </Container>
                </React.Fragment>
            )
    )
}