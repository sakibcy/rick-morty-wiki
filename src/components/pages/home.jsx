import React, { useEffect, useState } from "react";
import axios from "axios";

import Search from "../search/search";
import FilterContext from "../../context/filterContext";
import Filters from "../filters/filters";
import Cards from "../cards/cards";
import Paginate from "../pagination/paginate";

const Home = () => {
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
};

export default Home;
