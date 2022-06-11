import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Container, Nav } from "react-bootstrap";
import "./App.css";
import data from "./data.js";
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";
import Detail from './routes/Detail';

function App() {
  let [shoes] = useState(data); // data.js에 있는 어레이
  let navigate = useNavigate() // 페이지 이동시킬때 Link대신 씀
  return (
    <div>
     
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">React</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route
          path="/"
          element={
            <div>
              {" "}
              <div className="main-bg"></div>
              <div className="container">
                <div className="row">
                  {shoes.map((a, i) => {
                    return <Card shoes={shoes[i]} i={i + 1} />;
                  })}
                </div>
              </div>
            </div>
          }
        />{" "}
        {/* /detail로 접속하면 보여줄 html */}
        <Route path="/detail" element={<Detail />} />{" "}
        {/* /detail로 접속하면 보여줄 html */}
        <Route path="/about" element={<div>어바웃페이지</div>} />{" "}
        {/* /about로 접속하면 보여줄 html */}
        <Route />
      </Routes>
    </div>
  );
}

function Card(props) {
  return (
    <div className="col-md-4">
      <img
        src={"https://codingapple1.github.io/shop/shoes" + props.i + ".jpg"}
        width="80%"
      />
      <h4>{props.shoes.title}</h4>
      <p>{props.shoes.price} </p>
    </div>
  );
}

export default App;
