import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Data } from "../Data/Data";
import { Card, Col, Row, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeftLong,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import { Zoom } from "react-awesome-reveal";

export default function CountryDetails() {
  const { country } = useParams();
  const { id } = useParams();

  // To save Details Data
  const [details, setDetails] = useState(Data);

  // Get All Details Page
  function getDetailsCountry() {
    setDetails(Data);
  }

  // To Run Code On Load Country
  useEffect(() => {
    getDetailsCountry();
  }, []);

  return (
    <>
      <div style={{ minHeight: "calc(100vh - 112px)", marginTop: "80px" }}>
        <Row className="d-flex justify-content-start align-items-center gap-3 my-5">
          {details[id].city.map((i, key) => {
            return (
              <Col key={key}>
                <Zoom>
                  <Card style={{ opacity: "1" }} className="card-Details">
                    <Card.Img variant="top" src={i.cityImg} />
                    <Card.Body className="bg-white rounded-1">
                      <Card.Title className="fw-bold text-danger">
                        {i.cityName}
                      </Card.Title>
                      <Card.Text
                        style={{
                          textAlign: "right",
                          fontWeight: "600",
                          fontSize: "17px",
                        }}
                      >
                        {i.cityInfo}
                      </Card.Text>

                      <Link
                        to={`/Details/${country}/${id}/Touristical-Monuments-of/${i.cityNameEN}/${i.cityId}`}
                      >
                        <button
                          variant="outline-info"
                          className="btn more-info"
                        >
                          More Details{" "}
                          <FontAwesomeIcon
                            className="to-right"
                            icon={faArrowRight}
                          />
                        </button>
                      </Link>
                    </Card.Body>
                  </Card>
                </Zoom>
              </Col>
            );
          })}
        </Row>
        <Link to={`/`} className="d-flex justify-content-center">
          <Button variant="danger" style={{ margin: "-30px auto 10px auto" }}>
            <FontAwesomeIcon icon={faArrowLeftLong} /> Back
          </Button>
        </Link>
      </div>
    </>
  );
}
