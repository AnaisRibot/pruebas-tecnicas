"use client";
import BooksList from "@components/BooksList";
import NavBar from "@components/NavBar";
import { useStateContext } from "../context/StateContext";
// import data from "../../../../01-reading-list/books.json";

const page = () => {
  const { library, myList, selectedGenre } = useStateContext();

  return (
    <>
      <NavBar />
      <div className="flex">
        <div className="border-r-4 rounded-r-[25px] shadow-lg shadow-gray-100 border-gray-200  inline-block w-[250px]">
          <BooksList title="My reading list" list={myList} />
        </div>
        <div className="w-full">
          <BooksList
            title="Library"
            list={library}
            selectedGenre={selectedGenre}
          />
        </div>
      </div>
    </>
  );
};

export default page;
