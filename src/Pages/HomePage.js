import axios from "axios";
import { useEffect, useState } from "react";
import CharacterCard from "../components/CharacterCard";
const HomePage = () => {
  const [characters, setCharacters] = useState(null);
  const [filter, setFilter] = useState("");
  useEffect(() => {
    const getCharacters = async () => {
      const response = await axios.get(
        "https://hp-assessment-api.herokuapp.com/hp/characters"
      );
      console.log(response.data);
      setCharacters(response.data);
    };
    getCharacters();
  }, []);
  const updatedFilter = (e) => {
    setFilter(e.target.value);
  };
  return (
    <div>
      <h1>Characters Page</h1>
      <input
        type="text"
        placeholder="housename"
        value={filter}
        onChange={updatedFilter}
      />
      {!characters
        ? "Loading"
        : characters
            //sorting characters alphabetically
            .sort((a, b) => a.name.localeCompare(b.name))
            .filter((char) => char.name.startsWith(filter))
            .map((char) => (
              // using a different component to display the character
              <CharacterCard
                key={char.id}
                id={char.id}
                houseId={char.houseId}
                name={char.name}
                born={char.born}
                img={char.imgUrl}
                house={char.house?.name}
              />
            ))}
    </div>
  );
};
export default HomePage;
