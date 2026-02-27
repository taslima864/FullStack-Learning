import "./App.css";
import Title from "./Title.jsx"



function Descripton() {
  return <h3>I am the Description</h3>;
}

function App() {
  return (
    <div>
      <Descripton/>
      <Descripton/>
      <Title />
      <Title />
    </div>
  );
}

export default App;
