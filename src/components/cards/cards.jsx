import React from "react";
import styles from "./cards.module.scss";

const Cards = ({ users }) => {
  if (!users) {
    return "No Character found :(";
  }

  const userStatusClass = (userStatus) => {
    if (userStatus === "Dead") return "bg-danger";
    if (userStatus === "unknown") return "bg-secondary";
    return "bg-success";
  };

  return users.map((user) => (
    <div className=" mb-4 col-4 position-relative" key={user.id}>
      <div className={styles.cards}>
        <img src={user.image} alt="" className={`${styles.img} img-fluid`} />
        <div style={{ padding: "10px" }} className="content">
          <div className="fs-4 fw-bold mb-4 "> {user.name} </div>
          <div>
            <div className="fs-6">Last Location</div>
            <div className="fs-5"> {user.location["name"]} </div>
          </div>
        </div>
      </div>

      <div
        className={`${styles.badge} position-absolute  ${userStatusClass(
          user.status
        )} badge`}
      >
        {user.status}
      </div>
    </div>
  ));
};

export default Cards;
