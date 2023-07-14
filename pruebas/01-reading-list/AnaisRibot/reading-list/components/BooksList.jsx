import Book from "./Book";

const BooksList = ({ list }) => {
  if (list.length === 0)
    return (
      <div>
        <p>no books yet</p>
      </div>
    );
  return (
    <ul>
      {list.map((library) => (
        <Book key={library.book.ISBN} book={library.book} />
      ))}
    </ul>
  );
};
export default BooksList;
