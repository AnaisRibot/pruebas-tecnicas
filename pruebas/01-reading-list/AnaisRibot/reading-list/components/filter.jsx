import { useStateContext } from "../context/StateContext";

const FilterByGenre = () => {
  const { selectedGenre, handleChangeGenre } = useStateContext();
  return (
    <>
      <select
        name="selectedGenre"
        value={selectedGenre || ""}
        onChange={(e) => {
          console.log("e in filter  =", e, "selectedGenre =", selectedGenre);
          handleChangeGenre(e);
        }}
        className="bg-black text-gray-300 p-3 text-sm rounded-lg outline-none sm:mt-0 mt-5"
      >
        <option value="">--Filter by Genre--</option>
        <option value="Fantasía">Fantasy</option>
        <option value="Ciencia ficción">Science Fiction</option>
        <option value="Zombies">Zombies</option>
        <option value="Terror">Thriller</option>
      </select>
    </>
  );
};

export default FilterByGenre;
