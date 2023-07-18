"use client";

import { createContext, useContext, useState, useEffect } from "react";
import data from "../../../../01-reading-list/books.json";
// import { toast } from "react-hot-toast";

const Context = createContext();

const bookDataMapper = (data) => {
  return data.library.map((dataBook) => dataBook.book);
};

export const StateContext = ({ children }) => {
  const [library, setLibrary] = useState(bookDataMapper(data));
  const [savedList, setSavedList] = useState([]);
  const [myList, setMyList] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState("");

  useEffect(() => {
    if (JSON.parse(localStorage.getItem("savedList"))) {
      setSavedList(JSON.parse(localStorage.getItem("savedList")));
    }
  }, []);

  useEffect(() => {
    // storing book ISBN in localStorage
    localStorage.setItem("savedList", JSON.stringify(savedList));

    setLibrary(
      bookDataMapper(data).filter((book) => {
        return myList.indexOf(book) < 0;
      })
    );
  }, [savedList]);

  useEffect(() => {
    // storing book ISBN in localStorage
    setMyList(() =>
      bookDataMapper(data).filter((book) => savedList.includes(book.ISBN))
    );
    setLibrary(
      bookDataMapper(data).filter((book) => !savedList.includes(book.ISBN))
    );
  }, [savedList]);

  const handleChangeGenre = (event) => {
    setSelectedGenre(event.target.value);
  };

  const addToList = (book) => {
    if (library.includes(book)) {
      setLibrary((prev) => prev.filter((ref) => ref.ISBN !== book.ISBN));
      setSavedList((prev) => [...prev, book.ISBN]);
    } else {
      setSavedList((prev) => prev.filter((ref) => ref !== book.ISBN));
      setLibrary((prev) => [...prev, book]);
    }
  };

  return (
    <Context.Provider
      value={{
        library,
        setLibrary,
        savedList,
        setSavedList,
        addToList,
        myList,
        setMyList,
        handleChangeGenre,
        selectedGenre,
        setSelectedGenre,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useStateContext = () => useContext(Context);
