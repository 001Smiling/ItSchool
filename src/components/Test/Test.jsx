import React, { useState } from "react";
import Test from "../Data/Test";
import StartTest from "./Elements/StartTest";
import Questions from "./Elements/Questions";
import ResultTest from "./Elements/ResultTest";


function ITtest() {
    const [step, setStep] = useState(1);
    const [activeQuestion, setActiveQuestion] = useState(0);
    const [answers, setAnswers] = useState([]);


    const quizStartHandler = () => {
        setStep(2);
    }

    return (
        <div className="test">
            {step === 1 && <StartTest onQuizStart={quizStartHandler} />}
            {step === 2 && <Questions
                data={Test.data[activeQuestion]}
                onAnswerUpdate={setAnswers}
                numberOfQuestions={Test.data.length}
                activeQuestion={activeQuestion}
                onSetActiveQuestion={setActiveQuestion}
                onSetStep={setStep}
            />}
            {step === 3 && <ResultTest
                results={answers}
                data={Test.data}
            />}
        </div>
    )
}
export default ITtest;