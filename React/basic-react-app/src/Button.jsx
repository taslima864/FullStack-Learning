function printHello() {
  console.log("hello");
  }

  function printBye(){
    console.log("Bye!!");
  }
  export default function Button() {
    return (
      <div>
        <button onClick={printHello}>Click me!</button>
        <p onClick={printBye}>this para is event demo</p>
      </div>
    );  
  }

