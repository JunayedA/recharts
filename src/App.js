import './App.css';
import MyAreaChart from './components/MyAreaChart/MyAreaChart';
import MyLineChart from './components/MyLineChart/MyLineChart';

function App() {
  return (
    <div className="App">
      <MyLineChart></MyLineChart>
      <MyAreaChart></MyAreaChart>
    </div>
  );
}

export default App;
