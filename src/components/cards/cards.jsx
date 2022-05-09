import React from "react";
import styles from "./cards.module.scss";
import { Link } from "react-router-dom";

const Cards = ({ users, page }) => {
  if (!users) {
    return "No character Found";
  }
  const userStatusClass = (userStatus) => {
    if (userStatus === "Dead") return "bg-danger";
    if (userStatus === "unknown") return "bg-secondary";
    return "bg-success";
  };

  return users.map((user) => {
    const { id, name, location, status, image } = user;
    return (
      <Link
        to={`${page}${id}`}
        style={{ cursor: "pointer" }}
        className=" mb-4 col-lg-4 col-md-6 col-12 text-black position-relative text-decoration-none"
        key={id}
      >
        <div
          className={`${styles.cards} d-flex flex-column justify-content-center`}
        >
          <img src={image} alt="" className={`${styles.img} img-fluid`} />
          <div
            style={{ padding: "10px" }}
            className="content bg-light rounded-1"
          >
            <div className="fs-4 fw-bold mb-4 "> {name} </div>
            <div>
              <div className="fs-6">Last Location</div>
              <div className="fs-5"> {location["name"]} </div>
            </div>
          </div>
        </div>

        <div
          className={`${styles.badge} position-absolute  ${userStatusClass(
            status
          )} badge`}
        >
          {status}
        </div>
      </Link>
    );
  });
};

export default Cards;
