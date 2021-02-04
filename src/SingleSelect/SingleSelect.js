import React, { useState, useEffect } from 'react'
import './SingleSelect.scss'

const SingleSelect = props => {

    /*

        This component is built for you. Just skin it with the scss file. See the example.png. 

        Suggestions:
            rollover states on buttons.
            staging animations.
            make feedback a modal window.

    */

    const [selected, setSelected] = useState(-1);

    const handleSelect = (i) => {
        if (selected === -1) setSelected(i)
    }

    const selectedOption = props.data.options[selected]

    return (
        <div className={`SingleSelect`}>
            <div className="SingleSelect-Question">
                <h1>
                    {props.data.questionText}
                </h1>
            </div>
            <div className="answer-key-grouping">
                <div className="letterKeyOptions">
                    {
                        selected === -1 &&
                        props.data.options.map((option, optionIndex) => {
                            return <h className="letter-button" onClick={() => { handleSelect(optionIndex) }}>{option.letter}</h>
                        })
                    }
                </div>
                <div className="answerOptions">
                    {
                        selected === -1 &&
                        props.data.options.map((option, optionIndex) => {
                            return <button className="answer-button btn" onClick={() => { handleSelect(optionIndex) }}>{option.text}</button>
                        })
                    }
                </div>
            </div>
            {
                selected > -1 &&
                <div className={`feedback ${selectedOption.correct ? 'correct' : 'incorrect'}`}>
                    <h1>
                        {selectedOption.correct ?
                            props.data.feedback.correct.header
                            :
                            props.data.feedback.incorrect.header
                        }
                    </h1>
                    <p>
                        {selectedOption.correct ?
                            props.data.feedback.correct.body
                            :
                            props.data.feedback.incorrect.body
                        }
                    </p>
                    <button onClick={props.onComplete}>OK</button>
                </div>
            }
        </div>
    )
}

export default SingleSelect