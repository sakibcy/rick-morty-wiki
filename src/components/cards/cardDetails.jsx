import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";

const CardDetails = () => {
  const { id } = useParams();

  const [character, setCharacters] = useState("");

  const characterAPI = `https://rickandmortyapi.com/api/character/${id}`;

  useEffect(() => {
    (async function () {
      const result = await axios.get(characterAPI);
      setCharacters(result.data);
    })();
  }, [characterAPI]);

  const { name, image, gender, status, species, location, origin, created } =
    character;

  function renderStatus(status) {
    if (status === "Dead") return "bg-danger";
    if (status === "unknown") return "bg-secondary";
    return "bg-success";
  }
  return (
    <React.Fragment>
      <section className="vh-50 " style={{ backgroundColor: "" }}>
        <div className="container py-6 h-100">
          <div className="row   d-flex justify-content-center align-items-center h-100">
            <div className="col-md-12 col-xl-4">
              <div className="card  bg-light" style={{ borderRadius: "15px" }}>
                <div className="card-body text-center">
                  <div className="mt-3 mb-4">
                    <img
                      src={image}
                      className="rounded-circle img-fluid"
                      style={{ width: "300px" }}
                      alt="Cards"
                    />
                  </div>
                  <h4 className="mb-2 text-primary fs-1 fw-bold">{name}</h4>
                  <p className="text-muted mb-4 fs-5">
                    {gender} <span className="mx-2">|</span>{" "}
                    <span>{species}</span>
                  </p>

                  <span
                    className={`badge ${renderStatus(
                      status
                    )} fs-5 d-flex justify-content-center`}
                  >
                    {status === "" ? "unknown" : status}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="fs-5 justify-content-center mx-5 text-center py-3">
        <span className="mb-4 ">
          Location: <span className="text-muted">{location?.name}</span>
          <br />
        </span>
        <span>
          Origin: <span className="text-muted">{origin?.name}</span>
          <br />
        </span>
        <span>
          Created: <span className="text-muted">{created}</span>
        </span>
      </div>
    </React.Fragment>

    // <div className="">
    //   <div
    //     class="card position-absolute top-50 start-50 translate-middle mt-5"
    //     style={{ width: "288px" }}
    //   >
    //     <img src={image} class="card-img-top" alt="..." />
    //     <div class="card-body">
    //       <h3 class="card-title">{name}</h3>
    //       <p class="card-text">
    //         <h5>Gender: {character.gender}</h5>
    //         <h6>Species: {character.species}</h6>
    //       </p>
    //       <span class="btn btn-primary">{status}</span>
    //     </div>
    //   </div>
    // </div>
  );
};

export default CardDetails;
