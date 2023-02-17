import React, { useEffect, useState } from 'react';
import Like from "../../Assets/Image/Test/Like.png"
import smile from "../../Assets/Image/Test/smile.png"
import { ArrowRightOutlined } from "@ant-design/icons";

function ResultTest({ results, data }) {
    const [correctAnswers, setCorrectAnswers] = useState(0);
    const [phrase, setphrase] = useState('')
    const [like, setlike] = useState('false')
    useEffect(() => {
        let correct = 0;
        results.forEach((result, index) => {
            if (result.a === data[index].answer) {
                correct++;
                if (correct >= 3) {
                    setphrase('Это великолепный результат! У вас есть все шансы стать отличным программистом. Начните обучение прямо сейчас, доступ ко вводным урокам уже открыт')
                    setlike(true)
                }
                else {
                    setphrase('Не расстраивайся! Начните обучение прямо сейчас и у вас есть все шансы стать отличным программистом!Доступ ко вводным урокам уже открыт')
                    setlike(false)
                }
            }
        });
        setCorrectAnswers(correct);
        // eslint-disable-next-line
    }, []);
    return (
        <div className="test-block">
            <div className="test-block__sizeblock">
                <div className="test-block__content">
                    <div className="test-block__like">
                        {like === true
                            ?
                            <img src={Like} alt="like" />
                            : <img src={smile} alt="smile" className='test-block__smile' />
                        }
                        <p>Набрано {correctAnswers}/ {data.length}</p>
                    </div>
                    {phrase && <div className="test-block__description">{phrase}</div>}
                    <div className="test-block__btn-result button">
                        Начать учиться бесплатно
                        <span className="test-block__arrow"><ArrowRightOutlined /></span>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ResultTest;