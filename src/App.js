import './App.css';
import Body from './Component/Body/Body';
import Header from './Component/Header/Header';

function App() {
  return (
    <div className="App">

      <Header></Header>
      <h1 className='text-2xl p-3'>Select today’s exercise</h1>
      <Body></Body>
    </div>
  );
}

export default App;
