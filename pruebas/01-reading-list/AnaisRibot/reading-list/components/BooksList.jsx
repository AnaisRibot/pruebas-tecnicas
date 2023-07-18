import Book from "./Book";
import FilterByGenre from "./filter";

const BooksList = ({ title, list, selectedGenre }) => {
  console.log("selected genre in booklist =", selectedGenre);
  if (!list || list.length === 0)
    return (
      <section>
        <h1 className="mt-4 font-semibold text-lg  text-white truncate">
          {title}
        </h1>
        <p className="mt-4 font-semibold text-lg text-gray-500 truncate">
          no books yet
        </p>
      </section>
    );
  return (
    <section>
      <h1 className="mt-4 font-semibold text-lg  text-white truncate">
        {title} ({list.length})
      </h1>
      {title === "Library" && <FilterByGenre />}

      {title === "Library" && selectedGenre !== ""
        ? list
            .filter((book) => book.genre === selectedGenre)
            .map((book) => <Book key={book.ISBN} book={book} list={title} />)
        : list.map((book) => <Book key={book.ISBN} book={book} list={title} />)}
    </section>
  );
};
export default BooksList;
