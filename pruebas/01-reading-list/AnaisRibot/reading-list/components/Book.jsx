import Image from "next/image";
import { useStateContext } from "../context/StateContext";

const Book = ({ book, list }) => {
  const { addToList } = useStateContext();
  function handleClick() {
    addToList(book);
  }

  return (
    <div className="flex  flex-col p-4 backdrop-blur-sm animate-slideup rounded-lg cursor-pointer ">
      <Image
        src={book.cover}
        width={300}
        height={0}
        alt="Picture of the author"
        style={{ height: "auto" }}
        className="  rounded-lg"
      />

      <button onClick={handleClick}>
        {list === "Library" ? "add" : "remove"}
      </button>

      <p className="mt-4 font-semibold text-lg  text-gray-500 truncate">
        {book.title},{" "}
        <span className="mt-4 italic text-gray-500 truncate">
          {book.author.name}
        </span>
      </p>
    </div>
  );
};

export default Book;
