import Book from "./Book";

const BooksList = ({ title, list }) => {
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
        {title}
      </h1>
      {list.map((book) => (
        <Book key={book.ISBN} book={book} list={title} />
      ))}
    </section>
  );
};
export default BooksList;
