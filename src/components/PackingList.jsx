import React, { useState } from "react";
import Item from "./Item";

// const initialItems = [
//   { id: 1, description: "Passports", quantity: 2, packed: false },
//   { id: 2, description: "Socks", quantity: 12, packed: false },
//   { id: 3, description: "Charger", quantity: 1, packed: true },
//   { id: 4, description: "Laptop", quantity: 1, packed: false },
// ];

function PackingList({ showItems, onDeleteItem, onToggleItem, onClearList }) {
  const [sortBy, setSort] = useState("packed");

  let sortedItems;

  if (sortBy === "input") sortedItems = showItems;

  if (sortBy === "description")
    sortedItems = showItems
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));

  if (sortBy === "packed")
    sortedItems = showItems
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));

  return (
    <div className="list">
      <ul>
        {sortedItems.map((list) => (
          <Item
            item={list}
            onDeleteItem={onDeleteItem}
            onToggleItem={onToggleItem}
            key={list.id}
          />
        ))}
      </ul>
      <div className="actions">
        <select value={sortBy} onChange={(e) => setSort(e.target.value)}>
          <option value="input">Sort by input order</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed status</option>
        </select>
        <button onClick={onClearList}>Clear list</button>
      </div>
    </div>
  );
}
export default PackingList;
