"use client";
import { useEffect } from "react";
import BooksList from "@components/BooksList";
import { useStateContext } from "../context/StateContext";
// import data from "../../../../01-reading-list/books.json";

const page = () => {
  const { library, myList } = useStateContext();

  useEffect(() => {
    // storing input name
    localStorage.setItem("myList", JSON.stringify(myList));
  }, [myList]);
  return (
    <div>
      <BooksList title="My reading list" list={myList} />
      <BooksList title="Library" list={library} />
    </div>
  );
};

export default page;
