import { useState } from "react";
import Item from "./Item";

export default function Parkinglist({ items, onDeleteItem, onToggleItem, onClearlist }) {
  const [sortBy, setSortBy] = useState("input");

  let sortedItems;
  if (sortBy === "input") sortedItems = items;
  if (sortBy === "description")
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  if (sortBy === "packed")
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));

  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <Item
            item={item}
            key={item.id}
            onDeleteItem={onDeleteItem}
            onToggleItem={onToggleItem} />
        ))}
      </ul>

      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Sort by...</option>
          <option value="description">sort by Description</option>
          <option value="packed">sort by Packed status</option>
        </select>
        <button onClick={onClearlist}>Clear list</button>
      </div>
    </div>
  );
}
