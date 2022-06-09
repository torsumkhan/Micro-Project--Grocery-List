import React from "react";

const List = ({ items }) => {
  return (
    <div className="grocery-list">
      {items.map((item) => {
        return <h3>{item.title}</h3>;
      })}
    </div>
  );
};

export default List;
