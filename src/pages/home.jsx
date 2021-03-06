import React, { useEffect, useState } from "react";
import axios from "axios";

import Search from "../components/search/search";
import FilterContext from "../context/filterContext";
import Filters from "../components/filters/filters";
import Cards from "../components/cards/cards";
import Paginate from "./../components/pagination/paginate";

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
          <div className="col-lg-3 col-12 mb-5">
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
          <div className="col-lg-8 col-12">
            <div className="row">
              <Cards page="/" users={users.results} />
            </div>
          </div>{" "}
        </div>
      </div>
      <Paginate
        totalPages={users.info?.pages}
        pageNumber={pageNumber}
        setPageNumber={setPageNumber}
      />
      <footer className="bg-light text-center text-lg-start">
        <div
          className="text-center p-3"
          style={{ backgroundColor: "rgba(225, 227, 225)" }}
        >
          For the project source code:{" "}
          <a
            className=" text-decoration-none link-success"
            href="https://github.com/sakibcy/rick-morty-wiki"
            target="_blank"
            rel="noreferrer"
          >
            Sakibul Hasan - Github
          </a>
        </div>
      </footer>
    </React.Fragment>
  );
};

export default Home;
