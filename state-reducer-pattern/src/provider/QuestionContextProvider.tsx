import { createContext, useReducer, type ReactNode } from "react";
import defaultReducer from "../reducers/defaultReducer";

const QuestionsContext = createContext(null as any);


type QuestionContextProviderProps = {
    children?: ReactNode;
    reducer: (state: any, action:any) => void;
};

const QuestionContextProvider = ({ reducer = defaultReducer , children }: QuestionContextProviderProps) => {
    const questions = [
        {
            id: "q1",
            question: "What is the State Reducer Pattern in React?",
            options: [
                "A design pattern for managing state in React components",
                "A way to style React components",
                "A method for fetching data in React",
                "A routing library for React applications"
            ]
        },
        {
            id: "q2",
            question: "Which hook is commonly used to implement the State Reducer Pattern?",
            options: [
                "useState",
                "useEffect",
                "useReducer",
                "useContext"
            ]
        },
        {
            id: "q3",
            question: "What is a key benefit of using the State Reducer Pattern?",
            options: [
                "Improved component styling",
                "Separation of state management logic from UI logic",
                "Faster data fetching",
                "Simplified routing"
            ]
        },
        {
            id: "q4",
            question: "In the State Reducer Pattern, what does a reducer function do?",
            options: [
                "Fetches data from an API",
                "Updates the component's state based on actions",
                "Styles the component",
                "Handles routing between pages"
            ]
        },
        {
            id: "q5",
            question: "Can the State Reducer Pattern be used with other state management libraries?",
            options: [
                "Yes, it can be combined with libraries like Redux or MobX",
                "No, it is exclusive to React's built-in state management",
                "Only with Redux",
                "Only with MobX"
            ]
        }
    ];
    const [formState, dispatch] = useReducer(reducer, {
        answers: {},
        currentQuestion: 0,
        submittedQuestions: 0,
        totalQuestion: questions.length,
        error: null
    });
    return (
        <QuestionsContext value={{ formState, dispatch, questions }}>
            {children}
        </QuestionsContext>
    )
}

export { QuestionsContext, QuestionContextProvider };