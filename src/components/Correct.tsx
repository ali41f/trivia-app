import React from 'react'
import { OptionsButton } from './OptionsButton/OptionsButton'
import Lottie from 'react-lottie';
import animation from './../assets/check-animation.json'

interface CorrectProps {
    points: number;
    earned: number;
    nextQuestion: (r: string) => void;
    totalQuestions: number;
    questionNum: number;
}


export const Correct: React.FC<CorrectProps> = ({ points, earned, nextQuestion, totalQuestions, questionNum }) => {
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
            <h2 style={{ marginTop: '10px' }}>Correct</h2>
            <p>You have earned {earned} points<br />Total: {points} points</p>
            {questionNum == totalQuestions ?
                <h2>Congratulations, you have reached the end.</h2>
                : <OptionsButton optionSelected={nextQuestion} OptionName="Next Question" />}
        </React.Fragment>
    );
}
