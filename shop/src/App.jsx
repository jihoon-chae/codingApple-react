import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Container, Nav } from "react-bootstrap";
import "./App.css";
import data from "./data.js";
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";
import Detail from "./routes/Detail";
import axios from "axios";

function App() {
  let [shoes, setShoes] = useState(data); // data.js에 있는 어레이
  let navigate = useNavigate(); // 페이지 이동시킬때 Link대신 씀, Hook
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">ShoeShop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link
              onClick={() => {
                navigate("/");
              }}
            >
              Home
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                navigate("/detail");
              }}
            >
              Cart
            </Nav.Link>{" "}
            {/* 클릭하면 해당 경로로 이동 */}
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
                    // shoes라는 states   개수만큼 카드 컴포넌트 생성해라
                    return <Card shoes={shoes[i]} i={i + 1} />;
                  })}
                </div>
              </div>
              <button
                onClick={() => {
                  // 로딩중 UI 띄우기
                  axios
                    .get("https://codingapple1.github.io/shop/data2.json")
                    .then((결과) => {
                      // console.log(결과.data);

                      let copy = [...shoes, ...결과.data]; // axios가 JSON을 array로 자동으로 바꿔줌
                      // console.log(copy)
                      setShoes(copy);
                      // 로딩중 UI 숨기기
                    });

                  axios.post("url", { name: "kim" }); // 서버로 데이터 전송

                  Promise.all([axios.get("/url1"), axios.get("/url2")]) // 동시에 ajax요청
                    .then(() => {})

                    .catch(() => {
                      console.log("실패함");
                    });
                }}
              >
                더보기
              </button>
            </div>
          }
        />{" "}
        <Route path="/detail/:id" element={<Detail shoes={shoes} />} />
        {/* /detail로 접속하면 보여줄 html */}
        <Route path="*" element={<div>404, 없는 페이지임</div>} />
        {/* 404페이지 */}
        <Route path="/about" element={<About />}>
          <Route path="member" element={<div>멤버 설명</div>} />
          {/* about인데 member에 대한 설명 */}
          <Route path="location" element={<About />} />
          {/* about인데 location에 대한 설명, 라우트태그 안에 넣기 */}
        </Route>
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

function About() {
  return (
    <div>
      <h4>회사정보임</h4>
      <Outlet></Outlet>
    </div>
  );
}

export default App;
