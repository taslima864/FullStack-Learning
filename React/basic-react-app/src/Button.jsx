function handleClick() {
  console.log("hello");
}

function handleMouseOver() {
  console.log("Bye!!");
}

function handleDblClick() {
  console.log("You doubled Clicked");
}
export default function Button() {
  return (
    <div>
      <button onClick={handleClick}>Click me!</button>
      <p onMouseOver={handleMouseOver}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
        dolor sunt odio iusto sint, vel dolores fugiat quos quibusdam, nam
        itaque voluptates? Provident delectus laudantium nemo, aliquam
        perferendis cum perspiciatis!
      </p>
      <button onDoubleClick={handleDblClick}>double click me!!</button>
    </div>
  );
}
