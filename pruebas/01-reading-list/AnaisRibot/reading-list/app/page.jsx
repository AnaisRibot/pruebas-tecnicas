import BooksList from "@components/BooksList";
import data from "../../../../01-reading-list/books.json";

const page = () => {
  let myList = [];
  let listOfBooks = data.library;

  return (
    <div>
      <BooksList list={myList} />
      <BooksList list={listOfBooks} />
    </div>
  );
};

export default page;
