import "./App.css";

function Title() {
  return <h1>I am the Title</h1>;
}

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
