import { useState } from "react";
import useQuestionContext from "../hooks/useQuestionContext";
import ButtonTray from "./ButtonTray";
import AnswerSummary from "./AnswerSummary";

const Questions = () => {
    const { formState, dispatch, questions } = useQuestionContext();
    const currentQuestion = questions[formState.currentQuestion]; 
    const allDone = formState.currentQuestion >= questions.length;
    const [currAns,setCurrAns] = useState(-1);
    const handleChange = (e: any) => {
        setCurrAns(parseInt(e.target.value));
    }
    
    const handleSubmit = () => {
        dispatch({type: 'SET_ANSWER', questionId: currentQuestion.id, answer: currAns});
    }

    const handlePrev = () => {
        dispatch({type: 'GO_TO_PREVIOUS'});
    }
    return (
        allDone ? <AnswerSummary /> :
        <div>
            <p style={{color: 'red'}}>{formState.error}</p>
            <h3>{currentQuestion.question}</h3>
                {currentQuestion.options.map((option: string, index: number) => (
                    <label key={`${currentQuestion.id}_option_${index}`}>
                    <input type='radio' name={`${currentQuestion.questionId}_answer`} onChange={handleChange} value={index}/>
                        {option}
                    </label>
                ))}
                <ButtonTray handleNext={handleSubmit} handlePrev={handlePrev}/>
        </div>


    )
}

export default Questions;