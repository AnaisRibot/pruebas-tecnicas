"use client";

import { createContext, useContext, useState, useEffect } from "react";
import data from "../../../../01-reading-list/books.json";
// import { toast } from "react-hot-toast";

const Context = createContext();

const bookDataMapper = (data) => {
  return data.library.map((dataBook) => dataBook.book);
};

export const StateContext = ({ children }) => {
  const [myList, setMyList] = useState(() => {
    const saved = localStorage.getItem("myList");
    const initialValue = JSON.parse(saved);
    return initialValue || [];
  });
  console.log("library :", bookDataMapper(data));
  console.log("my list : ", myList);
  console.log(
    "filtered library : ",
    bookDataMapper(data).filter((book) => {
      return myList.some((savedBook) => {
        return savedBook.ISBN !== book.ISBN;
      });
    })
  );

  const [library, setLibrary] = useState(() => {
    return bookDataMapper(data).filter((book) => {
      return myList.some((savedBook) => {
        return savedBook.ISBN !== book.ISBN;
      });
    });
  });
  console.log("final library : ", library);

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
