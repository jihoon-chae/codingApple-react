import { memo, useState } from "react";
import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addCount } from './../store.jsx';
import { changeName, increase } from "./../store/userSlice.jsx";

let Child = memo (function(){
  console.log('재렌더링됨')
  return <div>자식임</div>
})



function Cart() {
  let[count, setCount] = useState(0)
  let dispatch = useDispatch(); //store.jsx로 요청 보내주는 함수
  let state = useSelector((state) => {
    return state;
  }); // Redux store에 있던거 가져와줌
  // console.log(state.cart );

  return (
    <div>
      <h6>{state.user.name} {state.user.age}의 장바구니</h6> 
      <Child /><button onClick={()=>{ setCount(count+1) }}> + </button>
      <button onClick={() => { // 버튼 누르면 재렌더링 됨 -> 자식도 재렌더링됨
        dispatch(increase(100))
      }}>age +1 버튼</button>
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>상품명</th>
            <th>수량</th>
            <th>변경하기</th>
          </tr>
        </thead>
        <tbody>
          {state.cart.map((a, i) => {
            return (
              <tr key={i}>
                <td>{state.cart[i].id}</td>
                <td>{state.cart[i].name}</td>
                <td>{state.cart[i].count}</td>
                <td>
                  <button
                    onClick={() => {
                      dispatch(addCount(state.cart[i].id)); // dispatch안에 변경함수 써줘야함 // 이러면 더 정확한 코드
                    }}
                  >
                    +
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}

export default Cart;
