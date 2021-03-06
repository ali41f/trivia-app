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
    list?: boolean;
}

export const SingleQuestion: React.FC<SingleQuestionProps> = ({ questionObj, result, correctOption, list }) => {

    const [correct, setCorrect] = useState<string>(questionObj.correct_answer)

    const [options, setOptions] = useState<string[]>(questionObj.incorrect_answers)

    const [optionSelected, setOptionSelected] = useState<boolean>(false)

    const optionSelectedHandler = (selected: string) => {

        if (list) {
            if (!optionSelected) {
                console.log("list answer selected")
                setOptionSelected(true)
                if (selected == correct) {
                    result("correct")
                } else {
                    correctOption(correct)
                    result("wrong")
                }
            }
        } else {
            if (selected == correct) {
                result("correct")
            } else {
                correctOption(correct)
                result("wrong")
            }
        }
    }

    useEffect(() => {
        setOptions(shuffle([...options, correct]))
        console.log(correct)
    }, [])

    return (
        <div className="singleQuestion">
            <p className="questionText">
                <span dangerouslySetInnerHTML={{ __html: questionObj.question }} />
            </p>
            {options.map((o, i) => {
                return (
                    <OptionsButton
                        optionSelectedHandler={optionSelectedHandler}
                        key={i}
                        OptionName={o}
                        list={list}
                        optionSelected={optionSelected}
                        correct={correct} />
                )
            })}
        </div>
    );
}