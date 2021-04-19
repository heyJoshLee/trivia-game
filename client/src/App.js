import './App.css';
import QuestionContainer from './components/QuestionContainer';
import AnswerContainer from './components/AnswerContainer';
import PlayerInfo from './components/PlayerInfo';

function App() {
  return (
    <div className="App">
      <AnswerContainer />
      <QuestionContainer />
      <PlayerInfo />
    </div>
  );
}

export default App;
