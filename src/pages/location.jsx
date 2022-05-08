import { useState, useEffect } from "react";
import axios from "axios";
import Cards from "../components/cards/cards";
import InputGroup from "../components/filters/inputGroup";

const Location = () => {
  const [locationId, setlocationId] = useState(1);
  const [location, setLocation] = useState([]);
  const [residents, setResidents] = useState([]);

  const locationAPI = `https://rickandmortyapi.com/api/location/${locationId}`;

  useEffect(() => {
    (async () => {
      const result = await axios.get(locationAPI);
      setLocation(result.data);

      let characters = await Promise.all(
        result.data.residents.map(async (resident) => {
          const result = await axios.get(resident);
          return result.data;
        })
      );

      setResidents(characters);
    })();
  }, [locationAPI]);

  const { name, dimension, type } = location;

  return (
    <div className="container">
      <div className="row">
        <h3 className="text-center mb-4">
          <span className="fw-bold">
            Location:{" "}
            <span className="text-primary">
              {name === "" ? "Unknow" : name}
            </span>{" "}
          </span>
          <span className="fs-4">
            <br />
            Dimension: {dimension === "" ? "Unknow" : dimension}
          </span>
          <span className="fs-5">
            <br />
            Type: {type === "" ? "Unknow" : type}
          </span>
        </h3>
      </div>
      <div className="row">
        <div className="col-3">
          <h5>Pick Location </h5>
          <InputGroup totalEpisode={residents} setId={setlocationId} />
        </div>
        <div className="col-8">
          <div className="row">
            <Cards users={residents} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Location;
