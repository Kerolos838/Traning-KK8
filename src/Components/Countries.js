import React from "react";
import "./homepage.css";
import { Link } from "react-router-dom";
import { Zoom } from "react-awesome-reveal";

export default function Countries({ data }) {
  return (
    <Zoom>
      <Link to={`/Details/${data.country}/${data.id}`}>
        <div className="card card-Home">
          <img src={data.flag} alt={data.country} />
          <div className="overlay">
            <p className="fw-bold">{data.country}</p>
          </div>
        </div>
      </Link>
    </Zoom>
  );
}
