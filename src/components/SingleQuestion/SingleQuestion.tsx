import React, { useState, useEffect } from 'react'
import './SingleQuestion.css'
import { OptionsButton } from '../OptionsButton/OptionsButton';

function shuffle(array: string[]) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array
}

interface SingleQuestionProps {
    questionObj: {
        question: string;
        incorrect_answers: string[];
        correct_answer: string;
    };
    result: (r: string) => void;
    correctOption: (r: string) => void;
}

export const SingleQuestion: React.FC<SingleQuestionProps> = ({ questionObj, result, correctOption }) => {

    const [correct, setCorrect] = useState<string>(questionObj.correct_answer)

    const [options, setOptions] = useState<string[]>(questionObj.incorrect_answers)

    const optionSelected = (selected: string) => {
        if (selected == correct) {
            result("correct")
        } else {
            correctOption(correct)
            result("wrong")
        }
    }


    useEffect(() => {
        setOptions(shuffle([...options, correct]))
        console.log(correct)
    }, [])

    return (
        <React.Fragment>
            <p className="questionText">
                <span dangerouslySetInnerHTML={{ __html: questionObj.question }} />
            </p>
            {options.map((o, i) => (
                <OptionsButton optionSelected={optionSelected} key={i} OptionName={o} />
            ))}
        </React.Fragment>
    );
}