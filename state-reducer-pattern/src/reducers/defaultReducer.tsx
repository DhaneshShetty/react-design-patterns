const defaultReducer = (state: any, action: any) => {
    switch (action.type) {
        case 'SET_ANSWER':
            if(action.answer === -1) {
                return {
                    ...state,
                    currentQuestion: Math.min(state.currentQuestion + 1, state.totalQuestion - 1)
                };
            }
            let newAnswers = {
                ...state.answers,
                [action.questionId]: action.answer
            };
            return {
                ...state,
                currentQuestion: state.currentQuestion + 1,
                submittedQuestions: Object.keys(newAnswers).length,
                answers: newAnswers
            };
        case 'GO_TO_PREVIOUS':
            return {
                ...state,
                currentQuestion: Math.max(state.currentQuestion - 1, 0)
            };
        case 'RESET_QUESTIONS':
            return {
                answers: {},
                currentQuestion: 0,
                submittedQuestions: 0,
                totalQuestion: state.totalQuestion
            };
        default:
            return state;
    }
}

export default defaultReducer;