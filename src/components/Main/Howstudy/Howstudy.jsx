import React, { useState } from "react";
import { PlayCircleFilled, CloseCircleFilled, ArrowRightOutlined } from "@ant-design/icons";
import process from "../../Assets/Video/process.mp4";
import videoimg from "../../Assets/Image/Main/video.PNG"


function Howstudy() {
    const [Withoutvideo, setWithoutvideo] = useState(false);

    const openvideo = () => {
        setWithoutvideo(true);
    };
    const closevideo = () => {
        setWithoutvideo(false);
    };
    return (
        <section className="main-howstudy">
            <div className="main-howstudy__title">Как происходит обучение на YtYt?</div>
            <div className="main-howstudy__subtitle">Обучение должно быть комфортным. Поэтому мы разработали собственную платформу для обучения программированию. На ней вы можете не только изучать теорию, но и запускать готовые примеры и даже писать свой собственный код.
            </div>
            <div className="main-howstudy__media">
                {Withoutvideo === false
                    ?
                    <div className="howstudy-mediastyle">
                        <PlayCircleFilled className="howstudy-mediastyle__play" onClick={openvideo} />
                        <div className="howstudy-mediastyle__containerimg">
                            <img className="howstudy-mediastyle__img" src={videoimg} alt="videoimg" />
                            <span className="howstudy-mediastyle__offvideo"></span>
                        </div>
                    </div>
                    :
                    <div className="howstudy-mediastyle">
                        <CloseCircleFilled className="howstudy-mediastyle__close" onClick={closevideo} />
                        <video className="howstudy-mediastyle__video" src={process} controls autoPlay loop playsInline muted></video>
                    </div>}
                <div className="howstudy-mediastyle__back"></div>
                <div className="howstudy-mediastyle__containerdown">
                    <div className="howstudy-mediastyle__down"></div>
                    <div className="howstudy-mediastyle__down2"></div>
                </div>
            </div>
            <div className="howstudy-description sizeblock">
                <div className="howstudy-description__point">
                    <div className="howstudy-description__pointnumber">01</div>
                    <div className="howstudy-description__pointtitle">Весь материал разбит на небольшие уроки</div>
                    <div className="howstudy-description__pointtext">Теория и практика подаются маленькими порциями. Так вам будет легче усваивать новые знания.</div>
                </div>
                <div className="howstudy-description__point">
                    <div className="howstudy-description__pointnumber">02</div>
                    <div className="howstudy-description__pointtitle">Обучение через практику</div>
                    <div className="howstudy-description__pointtext">Всё, что вы узнали, вы тут же начинаете применять на практике. Вы сразу видите результаты своего труда.</div>
                </div>
                <div className="howstudy-description__point">
                    <div className="howstudy-description__pointnumber">03</div>
                    <div className="howstudy-description__pointtitle">Нет ограничений по времени</div>
                    <div className="howstudy-description__pointtext">Можно совмещать учёбу с работой
                        и другими делами. Не нужно выпрашивать академический отпуск, если пришлось сделать перерыв.</div>
                </div>
            </div>
            <div className="howstudy-containerbutton">
                <div className="howstudy-test">
                    <div className="howstudy-buttoncontainer__button button">Начать обучение
                        <span className="howstudy-buttoncontainer__textarrow arrow"><ArrowRightOutlined /></span>
                    </div>
                </div>
                <div className="howstudy-buttoncontainer__text">Попробуйте, первые уроки бесплатны, но нужно пройти тестирование</div>
            </div>
        </section >
    );
}

export default Howstudy;