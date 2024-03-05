import React from "react";
import Countries from "./Countries";
import { Col, Row } from "react-bootstrap";
import "./homepage.css";

export default function CountryList({ data }) {
  return (
    <Row style={{ minHeight: "calc(100vh - 112px)" }}>
      {data.length >= 1 ? (
        data.map((data) => {
          return (
            <Col
              key={data.id}
              sm="12"
              md="6"
              className="d-flex justify-content-center align-items-center gap-3"
            >
              <Countries key={data.id} data={data} />
            </Col>
          );
        })
      ) : (
        <h2>None</h2>
      )}
    </Row>
  );
}
