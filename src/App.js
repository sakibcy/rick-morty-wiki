import React, { useEffect, useState } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import Filters from "./components/filters/filters";
import Cards from "./components/cards/cards";
import axios from "axios";
import Paginate from "./components/pagination/paginate";
import Search from "./components/search/search";
import FilterContext from "./context/filterContext";

function App() {
  const [pageNumber, setPageNumber] = useState(1);
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("");
  const [gender, setGender] = useState("");
  const [species, setSpecies] = useState("");

  const apiEndpoint = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}&status=${status}&gender=${gender}&species=${species}`;

  useEffect(() => {
    async function getData() {
      const result = await axios.get(apiEndpoint);
      setUsers(result.data);
    }

    getData();
  }, [apiEndpoint]);

  return (
    <React.Fragment>
      <h1 className="text-center ubuntu my-4">
        Rick & Morty <span className="text-primary">Wiki</span>
      </h1>
      <Search setSearch={setSearch} setPageNumber={setPageNumber} />
      <div className="container">
        <div className="row">
          <div className="col-3">
            <FilterContext.Provider
              value={{
                status: status,
                setStatus: setStatus,
                setGender: setGender,
                setSpecies: setSpecies,
                setPageNumber: setPageNumber,
              }}
            >
              <Filters />
            </FilterContext.Provider>
          </div>
          <div className="col-8">
            <div className="row">
              <Cards users={users.results} />
            </div>
          </div>{" "}
        </div>
      </div>
      <Paginate
        totalPages={users.info?.pages}
        pageNumber={pageNumber}
        setPageNumber={setPageNumber}
      />
    </React.Fragment>
  );
}

export default App;
