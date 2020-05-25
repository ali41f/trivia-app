import React from 'react'
import { OptionsButton } from './OptionsButton/OptionsButton'
import Lottie from 'react-lottie';
import animation from './../assets/timeup.json'
import { RedirectButton } from './OptionsButton/RedirectButton';

interface TimeupProps {
    points: number;
    nextQuestion: (r: string) => void;
    totalQuestions: number;
    questionNum: number;
}

export const Timeup: React.FC<TimeupProps> = ({ points, nextQuestion, totalQuestions, questionNum }) => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animation,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };
    return (
        <React.Fragment>
            <Lottie options={defaultOptions} width={300} height={300} />
            <h2 style={{ marginTop: '10px' }}>Time is up</h2>
            <p>Your total points: {points}</p>
            <br />
            {
                questionNum == totalQuestions ?
                    <RedirectButton to="/" text="Play again" />
                    : <OptionsButton optionSelected={nextQuestion} OptionName="Next Question" />
            }
        </React.Fragment>
    );
}