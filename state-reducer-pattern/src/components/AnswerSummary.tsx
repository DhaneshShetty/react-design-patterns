import useQuestionContext from "../hooks/useQuestionContext";

const AnswerSummary = () => {
    const { formState, questions, dispatch } = useQuestionContext();
    const handleReset = () => {
        dispatch({type: 'RESET_QUESTIONS'});
    }
    return (
        <div>
            <h1>Answer Summary</h1>
            <div>
                {questions.map((question: any, index:any) => (
                    <div key={`summary_question_${index}`} style={{ marginBottom: '16px' }}>
                        <h3>{question.question}</h3>
                        <p>
                            Your answer: {formState.answers[question.id] !== undefined ? question.options[formState.answers[question.id]] : 'No answer provided'}
                        </p>
                        </div>))}
                <button onClick={handleReset}>Reset Questions</button>
            </div>
        </div>);
}

export default AnswerSummary;