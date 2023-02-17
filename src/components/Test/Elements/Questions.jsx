import React, { useState, useEffect, useRef } from 'react';
import { ArrowRightOutlined } from "@ant-design/icons";

function Questions({ data, onAnswerUpdate, numberOfQuestions, activeQuestion, onSetActiveQuestion, onSetStep }) {
    const [selected, setSelected] = useState('');
    const [error, setError] = useState('');
    const radiosWrapper = useRef();

    useEffect(() => {
        const findCheckedInput = radiosWrapper.current.querySelector('input:checked');
        if (findCheckedInput) {
            findCheckedInput.checked = false;
        }
    }, [data]);

    const changeHandler = (e) => {
        setSelected(e.target.value);
        if (error) {
            setError('');
        }
    }

    const nextClickHandler = () => {
        if (selected === '') {
            return setError('Пожалуйста выберите вариант ответа!');
        }
        onAnswerUpdate(prevState => [...prevState, { q: data.question, a: selected }]);
        setSelected('');
        if (activeQuestion < numberOfQuestions - 1) {
            onSetActiveQuestion(activeQuestion + 1);
        } else {
            onSetStep(3);
        }
    }
    return (
        <div className="test-block">
            <div className="test-block__sizeblock">
                <div className="test-block__questions-content">
                    <span>ЗАДАНИЕ {activeQuestion + 1}</span>
                    <p className="test-block__questions-text">{data.question}</p>
                    <div className="test-block__questions-answer">
                        <div className="test-block__questions" ref={radiosWrapper}>
                            {data.choices.map((choice, i) => (
                                <label className="radio has-background-light" key={i}>
                                    <input type="radio" name="answer" value={choice} onChange={changeHandler} />
                                    {choice}
                                </label>
                            ))}
                        </div>
                        <div className="test-block__answer-block">
                            <div className="test-block__btn-answer button" onClick={nextClickHandler}>
                                Ответить
                                <span className="test-block__arrow"><ArrowRightOutlined /></span>
                            </div>
                        </div>
                    </div>
                </div>
                {error && <h3 className="test-block__error">{error}</h3>}
            </div>
        </div>
    )
}
export default Questions;