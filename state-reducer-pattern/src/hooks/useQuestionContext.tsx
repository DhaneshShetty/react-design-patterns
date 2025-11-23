import { use } from "react";
import { QuestionsContext } from "../provider/QuestionContextProvider";

const useQuestionContext = () => use(QuestionsContext);

export default useQuestionContext;