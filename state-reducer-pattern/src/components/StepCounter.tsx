import useQuestionContext from "../hooks/useQuestionContext";

export const StepCounter = () => {
    const { formState: {currentQuestion, totalQuestion} } = useQuestionContext();
  
    return (
        currentQuestion<totalQuestion && <div style={{ display: 'flex', justifyContent: 'center', margin: '24px' }}>
            Step {currentQuestion+1} of {totalQuestion}
        </div>
    );
  }