import React, { useState } from 'react'
import './MultiSelect.scss'

// this is a stub for you to develop the following

/*
    PART 2 - OPTIONAL 
    
    Develop a component similar to the single select that allows multiple options to be selected. 

    This will include an ability to toggle each option, and then click a submit button for grading.

    Grading will indicate visually on each option if it was correct or not. This implies 4 states for each button - selected and correct, selected and incorrect, not selected and correct, not selected and incorrect.

    The generic feedback shown in the data is binary - either you got it 100% correct and get the correct feedback, or you don't. 
*/

const MultiSelect = props => {
    const { questionText, options, feedback } = props.data;
    const [feedbackOutput, setFeedbackOutput] = useState([]);


    const handleSubmit = (e) => {
        const selected = [];
        const elements = e.target.elements;
        console.log('this is elements', elements)
        for (let i = 0; i < elements.length; i++) {
            selected.push(elements[i].checked);
        }

        setFeedbackOutput(options.map((option, index) => {
            if (option.correct && selected[index] || (!option.correct && !selected[index])) {
                return 'correct'
            } else {
                return 'incorrect'
            }
        }));
    }
    return (
        <form className={`MultiSelect`} onSubmit={e => {
            e.preventDefault();
            handleSubmit(e);
        }}>
            <h1 className="multiSelect-question">
                {questionText}
            </h1>
            <div className="options">
                {options?.map((option, index) => {
                    return (
                        <div className="option-text" key={index}>
                            <input id={`multi-select-${index}`} name={`multi-select-${index}`} type="checkbox" className="option" />
                            <label htmlFor={`multi-select-${index}`}> {option.text} </label>
                            {(feedbackOutput[index] === 'incorrect') &&
                                <div className="feedback-incorrect">
                                    <div className="feedbackHeader">{feedback.incorrect.header}</div>
                                    <div className="feedbackBody">{feedback.incorrect.body}</div>
                                </div>
                            }
                            {(feedbackOutput[index] === 'correct') &&
                                <div className="feedback-correct">
                                    <div className="feedbackHeader">{feedback.correct.header}</div>
                                    <div className="feedbackBody">{feedback.correct.body}</div>
                                </div>
                            }
                        </div>
                    );
                })}
            </div>

            <button type="submit"> Submit </button>
        </form>
    )
}

export default MultiSelect;