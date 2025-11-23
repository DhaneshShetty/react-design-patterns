const noSkipReducer = (state: any, action: any) => {
    switch (action.type) {
        case 'SET_ANSWER':
            if(action.answer === -1) {
                return {
                    ...state,
                    error: 'Please select an answer before proceeding.'
                };
            }
            let newAnswers = {
                ...state.answers,
                [action.questionId]: action.answer
            };
            return {
                ...state,
                error: null,
                currentQuestion: state.currentQuestion + 1,
                submittedQuestions: Object.keys(newAnswers).length,
                answers: newAnswers
            };
        case 'GO_TO_PREVIOUS':
            return {
                ...state,
                error: null,
                currentQuestion: Math.max(state.currentQuestion - 1, 0)
            };
        case 'RESET_QUESTIONS':
            return {
                answers: {},
                error: null,
                currentQuestion: 0,
                submittedQuestions: 0,
                totalQuestion: state.totalQuestion
            };
        default:
            return state;
    }
}

export default noSkipReducer;