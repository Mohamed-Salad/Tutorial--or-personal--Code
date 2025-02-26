import { MouseEvent } from "react";
import { useState } from "react";
function ListGroup() {
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
  // items = [];
  const [selectedIndex, setSelectedIndex] = useState(-1);
  return (
    <>
      <h1>List</h1>
      {items.length == 0 && <p>No Items found</p>}
      {items.map((item, index) => (
        <li
          className={
            selectedIndex == index
              ? "list-group-item-active"
              : "list-group-item"
          }
          key={item}
          onClick={() => {
            setSelectedIndex(index);
          }}
        >
          {item}
        </li>
      ))}
    </>
  );
}

export default ListGroup;
