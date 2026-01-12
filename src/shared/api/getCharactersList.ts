import axios from "axios";

export const getCharactersList = async () => {
  const URL = "https://rickandmortyapi.com/api/character";

  const response = await axios.get(URL);

  return response.data.results;
};
