import './App.css'
import ProgressBar from './components/ProgressBar'
import Questions from './components/Questions'
import { StepCounter } from './components/StepCounter'
import { QuestionContextProvider } from './provider/QuestionContextProvider'
import defaultReducer from './reducers/defaultReducer'
import noSkipReducer from './reducers/noSkipReducer'

function App() {

  return (
    <div className="app-container">
      <QuestionContextProvider reducer={noSkipReducer}>
        <ProgressBar />
        <StepCounter />
        <Questions/>
      </QuestionContextProvider>
    </div>
  )
}

export default App
