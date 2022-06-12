import {useState, useEffect} from 'react';
import { useParams } from "react-router-dom";


function Detail(props) {
  useEffect(() => {
    console.log('안녕')
  })
  let[count, setCount] = useState(0)
  let[alert, setAlert] = useState(true)
  let { id } = useParams(); // 유저가 URL파라미터 입력한거 가져오기
  


  return (
    <div className="container">
      <button onClick={() =>{
        setCount(count+1) 
      }}>버튼</button>
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
    </div>
  );
}

export default Detail;
