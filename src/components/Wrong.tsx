import React, { useEffect } from 'react'
import { OptionsButton } from './OptionsButton/OptionsButton'
import Lottie from 'react-lottie';
import animation from './../assets/wrong.json'

interface WrongProps {
    points: number;
    nextQuestion: (r: string) => void;
    totalQuestions: number;
    questionNum: number;
    wrongNum: number;
    setWrongNum: (n: number) => void
}

export const Wrong: React.FC<WrongProps> = ({ points, nextQuestion, totalQuestions, questionNum, wrongNum, setWrongNum }) => {
    const defaultOptions = {
        loop: false,
        autoplay: true,
        animationData: animation,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };

    useEffect(() => {
        setWrongNum(wrongNum - 1)
    }, [])

    return (
        <React.Fragment>
            <Lottie options={defaultOptions} width={300} height={300} />
            <h2 style={{ marginTop: '10px' }}>Wrong</h2>
            <p>Your total points: {points}</p>
            {
                wrongNum ?
                    <div>
                        <h3>You have {wrongNum} more mistake left</h3>
                        <OptionsButton optionSelected={nextQuestion} OptionName="Next Question" />
                    </div>
                    :
                    questionNum == totalQuestions ?
                        <h2>You have reached the end.</h2>
                        : <h2>You made two mistakes. End!</h2>
            }
        </React.Fragment>
    );
}