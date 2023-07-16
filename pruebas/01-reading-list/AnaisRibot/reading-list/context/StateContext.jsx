"use client";

import { createContext, useContext, useState } from "react";
import data from "../../../../01-reading-list/books.json";
// import { toast } from "react-hot-toast";

const Context = createContext();

const bookDataMapper = (data) => {
  return data.library.map((dataBook) => dataBook.book);
};

export const StateContext = ({ children }) => {
  const [library, setLibrary] = useState(bookDataMapper(data));
  const [myList, setMyList] = useState([]);
  console.log(library);

  const addToList = (book) => {
    console.log("book :", book);
    library.map((test) => console.log("library book :", test));
    if (library.includes(book)) {
      console.log("yyyeeeeeeeeeeeeesssssssssss");
      setMyList((prev) => [...prev, book]);
      setLibrary((prev) => prev.filter((ref) => ref.ISBN !== book.ISBN));
    } else {
      console.log("nnnoooooooooooooooo");
      setMyList((prev) => prev.filter((ref) => ref.ISBN !== book.ISBN));
      setLibrary((prev) => [...prev, book]);
    }
  };

  return (
    <Context.Provider
      value={{
        library,
        setLibrary,
        myList,
        setMyList,
        addToList,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useStateContext = () => useContext(Context);
