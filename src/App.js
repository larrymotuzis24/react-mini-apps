
import './App.css';
// import Counter from './Components/Counter';
import TempControl from './Components/TempControl';

function App() {
  return (
    <div style={{
      display:'flex',
      justifyContent:'center',
    }}>
      <div style={{
      display:'flex',
      justifyContent:'center',
      border:'solid black 2px',
      padding:'10px'
    }}>
        <TempControl />
      </div>

    </div>
  );
}

export default App;
