import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Nav } from "react-bootstrap";
// import '../App.css'

function Detail(props) {
  let [count, setCount] = useState(0);
  let [alert, setAlert] = useState(true);
  let [탭, 탭변경] = useState(0); // 기본이 0번째 탭이니까
  let { id } = useParams(); // 유저가 URL파라미터 입력한거 가져오기

  useEffect(() => {
    // mount, update시 실행됨
    let a = setTimeout(() => {
      setAlert(false);
    }, 5000);
    // console.log(2);
    return () => {
      // console.log(1); // useEffect 동적전에 실행되는 코드
      clearTimeout(a); // 타이머 제거해주는 함수, mount시 실행 안됨
    };
  }, []);

  return (
    <div className="container">
      {alert == true ? (
        <div className="alert alert-warning">5초이내 구매시 할인</div>
      ) : null}
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        버튼
      </button>
      <div className="row">
        <div className="col-md-6">
          <img
            src="https://codingapple1.github.io/shop/shoes1.jpg"
            width="100%"
          />
        </div>
        <div className="col-md-6">
          <h4 className="pt-5">{props.shoes[id].title}</h4>
          <p>{props.shoes[id].content}</p>
          <p>{props.shoes[id].price}원</p>
          <button className="btn btn-danger">주문하기</button>
        </div>
      </div>
      <Nav variant="tabs" defaultActiveKey="link0">
        <Nav.Item>
          <Nav.Link
            onClick={() => {
              탭변경(0);
            }}
            eventKey="link0"
          >
            버튼0
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            onClick={() => {
              탭변경(1);
            }}
            eventKey="link1"
          >
            버튼1
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            onClick={() => {
              탭변경(2);
            }}
            eventKey="link2"
          >
            버튼2
          </Nav.Link>
        </Nav.Item>
      </Nav>

      <TabContent shoes= {props.shoes} 탭={탭} /> 
      {/* Detail 컴포넌트 안에서는 props.shoes로 해야함! */}
    </div>
  );

  function TabContent({탭, shoes}){
    let [fade, setFade] = useState('')
    useEffect(() => {
      setFade(' end') // state가 변할때 end부착 
    }, [탭])
    // 탭 state가 변할때 end 부착
    return (
    <div className={'start' + fade}>
    {[ <div>{shoes[0].title}</div>, <div>내용1</div>, <div>내용2</div> ][탭]}
    </div>)
  }
}

export default Detail;
