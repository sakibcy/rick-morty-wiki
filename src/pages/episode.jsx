import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import InputGroup from "../components/filters/inputGroup";
import Cards from "./../components/cards/cards";

const Episode = () => {
  const [id, setId] = useState(1);
  const [episode, setEpisode] = useState([]);
  const [characters, setCharacters] = useState([]);
  const [totalEpisode, setTotalEpisode] = useState([]);

  const apiEndPoint = `https://rickandmortyapi.com/api/episode/${id}`;

  useEffect(() => {
    const getData = async () => {
      const result = await axios.get(apiEndPoint);
      setEpisode(result.data);

      let character = await Promise.all(
        result.data.characters.map(async (character) => {
          const result = await axios.get(character);
          return result.data;
        })
      );
      setCharacters(character);

      (async function () {
        const allEpisode = await axios.get(
          `https://rickandmortyapi.com/api/episode/`
        );
        setTotalEpisode(allEpisode.data.results);
      })();
    };

    getData();
  }, [apiEndPoint]);

  const { name, air_date } = episode;

  return (
    <div className="container justify-content-center">
      <div className="row">
        <h1 className="text-center mb-3">
          Episode:{" "}
          <span className="text-primary">
            {name === "" ? "Unknown" : name}{" "}
          </span>
        </h1>
        <h5 className="text-center mb-5">
          Air Date: {air_date === "" ? "Unknown" : air_date}{" "}
        </h5>
      </div>
      <div className="row">
        <div className="col-lg-3 col-12">
          {" "}
          <h4 className="">Pick Episode </h4>{" "}
          <span className="text-center">
            <InputGroup
              inputGroupName="Episode"
              totalEpisode={totalEpisode}
              setId={setId}
            />
          </span>
        </div>
        <div className="col-lg-8 col-12 justify-content-center">
          <div className="row">
            <Cards page="/episodes/" users={characters} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Episode;
