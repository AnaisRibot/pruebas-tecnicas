import Book from "./Book";
import FilterByGenre from "./filter";

const BooksList = ({ title, list, selectedGenre }) => {
  let listFilteredByGenre = list
    .filter((book) => book.genre === selectedGenre)
    .map((book) => <Book key={book.ISBN} book={book} list={title} />);

  let unfilteredList = list.map((book) => (
    <Book key={book.ISBN} book={book} list={title} />
  ));

  // return if empty list
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

  // return if books in list
  return (
    <section>
      <div className="flex flex-row justify-between justify-items-center px-8">
        <h1 className="mt-4 font-semibold text-lg  text-white truncate">
          {title} ({list.length})
        </h1>
        {title === "Library" && <FilterByGenre />}
      </div>

      {/* results by genre */}
      {title === "Library" && selectedGenre !== "" && (
        <h2 className="text-lg  text-white mt-4 ml-6">{`Results in ${selectedGenre} (${listFilteredByGenre.length})`}</h2>
      )}

      {title === "Library" && selectedGenre !== "" ? (
        <div className="flex flex-wrap mt-4 sm:justify-start justify-center">
          {listFilteredByGenre}
        </div>
      ) : (
        <div className="flex flex-wrap mt-4 sm:justify-start  ">
          {unfilteredList}
        </div>
      )}
    </section>
  );
};
export default BooksList;
