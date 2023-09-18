import Image from "next/image";
import { useStateContext } from "../context/StateContext";

const Book = ({ book, list }) => {
  const { addToList } = useStateContext();
  function handleClick() {
    addToList(book);
  }

  return (
    <div className="flex flex-col w-[250px] mt-10 animate-slideup rounded-lg cursor-pointer ">
      <Image
        src={book.cover}
        width={200}
        height={300}
        alt="Picture of the author"
        className="m-auto rounded-lg"
      />

      <button
        onClick={handleClick}
        className="rounded-full m-auto px-4 py-1 bg-gray-600 text-gray-200 hover:bg-gray-200 hover:text-gray-600 mt-3"
      >
        {list === "Library" ? "add" : "remove"}
      </button>

      <p className="mt-2 font-semibold text-lg text-decoration-solid text-gray-200 text-center">
        {book.title}
      </p>
      <p className="text-center italic text-gray-200 truncate">
        {book.author.name}
      </p>
    </div>
  );
};

export default Book;
