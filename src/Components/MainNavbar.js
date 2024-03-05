import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Data } from "../Data/Data";

export default function MainNavbar() {
  return (
    <div
      style={{ position: "fixed", zIndex: "100000", width: "100%", top: "0" }}
    >
      <Navbar expand="lg" variant="dark" className="bg-dark">
        <Container>
          <Navbar.Brand href="/">Training</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto">
              {Data.map((item) => {
                return (
                  <Nav.Link
                    key={item.id}
                    href={`/Details/${item.country}/${item.id}`}
                  >
                    {item.country}
                  </Nav.Link>
                );
              })}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
