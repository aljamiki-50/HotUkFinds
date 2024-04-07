"use client";
import React, { useState } from "react";
import { RiChatSmileLine } from "react-icons/ri";


const Wishlist = () => {
  const [items, setItems] = useState(["Initial Item"]);
  const [newItem, setNewItem] = useState("");

  const handleAddItem = (e) => {
    e.preventDefault(); // Prevent form submission from refreshing the page
    if (!newItem.trim()) return; // Prevent adding empty items
    setItems([...items, newItem]);
    setNewItem(""); // Clear the input after adding
  };

  return (
    <div className=" relative    p-4">
      <h2 className="text-lg font-semibold text-indigo-600">My Wishlist</h2>
      <ul className="my-4">
        {items.map((item, index) => (
          <li
            key={index}
            className="bg-indigo-100 text-indigo-600 rounded-md p-2 my-2"
          >
            {item}
          </li>
        ))}
      </ul>
      <form onSubmit={handleAddItem} className="flex gap-2">
        <input
          type="text"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          className="flex-1 p-2 border border-indigo-300 rounded-md"
          placeholder="Add a new item"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
        >
          Add
        </button>
      </form>
      <h1 className=" flex flex-row gap-x-0 sm:gap-x-2 font-bold text-md sm:text-3xl   absolute top-[170%] sm:top-[180%] sm:left-[30%]">Dear User ! Our Wishlist underDevlopement Still <RiChatSmileLine />
  </h1>
    </div>
  );
};

export default Wishlist;
