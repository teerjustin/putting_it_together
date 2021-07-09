
import './App.css';
import Person from './components/person';
function App() {
  const callBack = () => {
    alert("helloooo");
  }
  return (
    <div>
      <Person cb={callBack} user={{firstName:"Justin", lastName:"Teer", age:21 , hair:"Black"}}/>
      <Person cb={callBack} user={{firstName:"John", lastName:"Doe", age:21 , hair:"Black"}}/>
    </div>
  );
}

export default App;
