import React, { useState, useEffect } from 'react'
import { SingleQuestion } from '../components/SingleQuestion/SingleQuestion';
import { Container } from '@material-ui/core';
import Lottie from 'react-lottie';
import animation from './../assets/loading2.json'
import { RedirectButton } from '../components/OptionsButton/RedirectButton'
import HeaderList from '../components/Header/HeaderList';

interface QuestionProps {
    category: string | number;
    difficulty: string;
    setMessage: (m: string) => void;
}

export const QuestionList: React.FC<QuestionProps> = ({ category, difficulty, setMessage }) => {

    const [loading, setLoading] = useState<boolean>(true)
    const [fetchedData, setFetchedData] = useState([])
    const [totalQuestions, setTotalQuestions] = useState<number>(10)
    const [points, setPoints] = useState<number>(0)
    const [correctAnswers, setCorrectAnswers] = useState<number>(0)
    const [answeredNum, setAnsweredNum] = useState<number>(0)
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
                console.log(data.results)
                setFetchedData(data.results)
                setTotalQuestions(data.results.length)
                //console.log(data.results.length)
                if (!data.results.length) {
                    setMessage("No question matches your selected options. Please change options.")
                }
                setLoading(false)
            });
    }, [])

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animation,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };

    const increasePoints = () => {
        setPoints((prevpoints) => (100 + prevpoints))
    }

    const resultHandler = (r: string) => {
        console.log(r)
        if (r == "correct") {
            setCorrectAnswers((prev) => (prev + 1))
            increasePoints()
        }
        setAnsweredNum((prev) => (prev + 1))
    }

    return (
        loading ? (
            <React.Fragment>
                <Lottie options={defaultOptions} width={300} height={300} />
            </React.Fragment>
        ) : (
                <React.Fragment>
                    <HeaderList
                        totalQuestions={totalQuestions}
                        answeredNum={answeredNum}
                        correctAnswersNum={correctAnswers}
                        totalPoints={points}
                    />
                    <Container style={{ textAlign: "center", marginTop: '5rem' }} maxWidth="sm">
                        {
                            fetchedData.map((obj, i) => {
                                return (
                                    <SingleQuestion
                                        key={i}
                                        list={true}
                                        correctOption={(c) => setCorrectOption(c)}
                                        result={resultHandler}
                                        questionObj={obj} />
                                )
                            })
                        }
                        {(answeredNum == totalQuestions) ? <RedirectButton to="/" text="Play again" /> : null}
                    </Container>
                </React.Fragment>
            )
    )
}