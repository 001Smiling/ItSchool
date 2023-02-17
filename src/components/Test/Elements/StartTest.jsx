import { ArrowRightOutlined } from "@ant-design/icons";

function StartTest({ onQuizStart }) {
    return (
        <div className="test-block">
            <div className="test-block__sizeblock">
                <div className="test-block__content">
                    <p className="test-block__title">Перед тем, как приступить к обучению, необходимо пройти небольшой тест</p>
                    <p className="test-block__description">Тест состоит из 4 заданий на логическое мышление и прочие навыки, необходимые программисту. Задания не самые простые. Но ни в коем случае не выбирайте ответы наугад. Если вы не можете дать правильный ответ – выбирайте пункт «Не знаю».</p>
                    <div className="test-block__button button" onClick={onQuizStart}>Начать тест
                        <span className="test-block__arrow arrow"><ArrowRightOutlined /></span>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default StartTest;