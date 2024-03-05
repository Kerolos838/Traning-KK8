import React from "react";
import { Container } from "react-bootstrap";
import Footer from "./Components/Footer";
import MainNavbar from "./Components/MainNavbar";
import CountryList from "./Components/CountryList";
import { Data } from "./Data/Data";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CountryDetails from "./Components/CountryDetails";
import CityDetails from "./Components/CityDetails";

export default function App() {
  return (
    <div>
      <MainNavbar />
      <Container style={{ marginTop: "56px" }}>
        <Router>
          {/* <Routes>
            <Route path="/" element={<CountryList data={Data} />} />
          </Routes> */}

          <Routes>
            <Route path="/" element={<CountryList data={Data} />} />
            <Route>
              <Route
                path="/Details/:country/:id"
                element={<CountryDetails data={Data} />}
              />
              <Route
                path="/Details/:country/:id/Touristical-Monuments-of/:cityName/:cityId"
                element={<CityDetails />}
              />
            </Route>
          </Routes>
        </Router>
      </Container>
      <Footer />
    </div>
  );
}
