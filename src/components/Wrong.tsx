import React, { useEffect } from 'react'
import { OptionsButton } from './OptionsButton/OptionsButton'
import Lottie from 'react-lottie';
import animation from './../assets/wrong.json'
import { RedirectButton } from './OptionsButton/RedirectButton';

interface WrongProps {
    points: number;
    nextQuestion: (r: string) => void;
    totalQuestions: number;
    questionNum: number;
    correctOption: string;
}

export const Wrong: React.FC<WrongProps> = ({ points, nextQuestion, totalQuestions, questionNum, correctOption }) => {
    const defaultOptions = {
        loop: false,
        autoplay: true,
        animationData: animation,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };


    return (
        <React.Fragment>
            <Lottie options={defaultOptions} width={300} height={300} />
            <h2 style={{ marginTop: '10px' }}>Correct answer: <span dangerouslySetInnerHTML={{ __html: correctOption }} /></h2>
            <p>Your total points: {points}</p>
            {
                questionNum == totalQuestions ?
                    <>
                        <h2>You have reached the end.</h2>
                        <RedirectButton to="/" text="Play again" />
                    </>
                    : <OptionsButton optionSelectedHandler={nextQuestion} OptionName="Next Question" />
            }
        </React.Fragment>
    );
}