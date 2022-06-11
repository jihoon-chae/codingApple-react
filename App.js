import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  let post = "강남 우동 맛집";

  let [글제목, 글제목변경] = useState([
    "남자 코트 추천",
    "강남 우동맛집",
    "파이썬독학",
  ]);
  let [따봉, 따봉변경] = useState(0);
  let [modal, setModal] = useState(false);
  let [title, setTitle] = useState(0)
  let [입력값, 입력값변경] = useState('') // 인풋값에 쓸 것들

  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 blog</div>
      </div>

      <button
        onClick={() => {
          let copy = [...글제목];
          copy[0] = "여자코트 추천";
          글제목변경(copy);
        }}
      >
        글수정
      </button>

      {글제목.map(function (a, i) {
        return (
          <div className="list">
            <h4
              onClick={() => {
                setModal(true); setTitle(i)
              }}
            >
              {글제목[i]}
              <span
                onClick={(e) => {e.stopPropagation() // 좋아요 누르면 모달창 나오는거 막으려고
                  따봉변경(따봉 + 1);
                }}
              >
                👍{" "}
              </span>{" "}
              {따봉}{" "}
            </h4>
            <p>2월 17일 발행</p>
            <button onClick={() => { // 글삭제 버튼
              let copy = [...글제목]
              copy.splice(i, 1) // i라는 변수를 써야 i번째 삭제버튼 누르면 i번째 글이 삭제됨
              글제목변경(copy)
            }}>삭제</button>
          </div>
        );
      })}

<input onChange={(e) => {입력값변경(e.target.value)}} />

<button onClick={()=> {
  let copy = [...글제목];
  copy.unshift(입력값); // e.target.value 가 글제목으로 들어감
  글제목변경(copy)}}>글발행</button> 
{/* 글제목에 하나만 더해주면 글 개수가 늘어남 */}
      {modal == true ? <Modal title={title} 글제목={글제목} /> : null}
    </div>
  );

  function Modal(props) {
    return (
      <div className="modal">
        <h4>{props.글제목[props.title]}</h4>
        <p>날짜</p>
        <p>상세내용</p>
        <button>글수정</button>
      </div>
    );
  }
}

export default App;
