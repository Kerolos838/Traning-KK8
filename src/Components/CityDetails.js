import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import { Data } from "../Data/Data";
import { Button, Card, Col, Row } from "react-bootstrap";
import { Zoom } from "react-awesome-reveal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeftLong, faHouse } from "@fortawesome/free-solid-svg-icons";

export default function CityDetails() {
  const { id } = useParams();

  const { cityId } = useParams();

  // console.log(cityId);
  // console.log(id);

  // To save Details Data
  const [details, setDetails] = useState(Data);

  // Get All Details Page
  function getDetailsCity() {
    setDetails(Data);
  }

  // To Run Code On Load City
  useEffect(() => {
    getDetailsCity();
  }, []);

  return (
    <div style={{ minHeight: "calc(100vh - 112px)", marginTop: "80px" }}>
      <div>
        {details[id].city.map((i, key) => {
          return i.cityId === cityId ? (
            <>
              <Row
                key={key}
                className="d-flex justify-content-start align-items-center gap-3 my-3"
              >
                {i.touristicalMonuments.map((j, key2) => {
                  return (
                    <Col key={key2}>
                      <Zoom>
                        <Card
                          style={{ textAlign: "right" }}
                          className="card-city"
                        >
                          <Card.Img variant="top" src={j.imgMonument} />
                          <Card.Body>
                            <Card.Title className="text-danger fw-bold fs-4">
                              {j.nameMonument}
                            </Card.Title>
                            <Card.Text className=" fw-semibold fs-5">
                              {j.infoMonument}
                            </Card.Text>
                          </Card.Body>
                        </Card>
                      </Zoom>
                    </Col>
                  );
                })}
              </Row>
              <div
                className="d-flex justify-content-center gap-2"
                style={{ margin: "0px auto 10px auto" }}
              >
                <Link
                  to={`./../../../`}
                  className="d-flex justify-content-center"
                >
                  <Button variant="danger">
                    <FontAwesomeIcon icon={faArrowLeftLong} /> Back
                  </Button>
                </Link>
                <Link to={`/`}>
                  <Button variant="primary">
                    <FontAwesomeIcon icon={faHouse} />
                  </Button>
                </Link>
              </div>
            </>
          ) : (
            ""
          );
        })}
      </div>
    </div>
  );
}
