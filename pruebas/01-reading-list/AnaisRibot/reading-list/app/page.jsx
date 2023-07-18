"use client";
import BooksList from "@components/BooksList";
import { useStateContext } from "../context/StateContext";
// import data from "../../../../01-reading-list/books.json";

const page = () => {
  const { library, myList, selectedGenre } = useStateContext();

  return (
    <div>
      <BooksList title="My reading list" list={myList} />
      <BooksList title="Library" list={library} selectedGenre={selectedGenre} />
    </div>
  );
};

export default page;
