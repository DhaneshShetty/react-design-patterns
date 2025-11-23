import useQuestionContext from "../hooks/useQuestionContext";

 const ProgressBar = () => {
    const { formState: {currentQuestion, totalQuestion} } = useQuestionContext();
    const progress = ((currentQuestion) / totalQuestion) * 100;
  return (
    <div style={{ backgroundColor: '#e0e0de', borderRadius: '2px', margin: '24px', boxSizing: 'border-box' }}>
      <div
        style={{
          width: `${progress}%`,
          height: '20px',
          backgroundColor: '#76c7c0',
          borderRadius: '2px',
        }}
      ></div>
    </div>
  );
}

export default ProgressBar;