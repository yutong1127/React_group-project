import './App.css';
import Overview from './OverviewPage/Overview';
import Tasks from './TasksPage/Tasks';
import { AppContext } from './AppContextProvider';

function App() {

  return (
    <div className="App">
      <Overview />
      <Tasks />
    </div>
  )
}

export default App
