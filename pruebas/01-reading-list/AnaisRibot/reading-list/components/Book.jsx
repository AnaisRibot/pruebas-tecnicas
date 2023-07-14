import Image from "next/image";

const Book = ({ book }) => {
  console.log(book.title);
  return (
    <div className="flex flex-col p-4 bg-white/5 bg-opacity-80 backdrop-blur-sm animate-slideup rounded-lg cursor-pointer">
      <Image
        src={book.cover}
        width={300}
        height={500}
        alt="Picture of the author"
        className="  rounded-lg"
      />
      <p className="mt-4 font-semibold text-lg text-black truncate">
        {book.title}
      </p>
    </div>
  );
};

export default Book;
