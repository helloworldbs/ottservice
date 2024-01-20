import React, { useState } from 'react'
import { useEffect } from 'react';
import { useParams } from 'react-router-dom'
import axios from '../../api/axios';


const DetailPage = () => {
  let {movieId} = useParams();
  const [movie, setMovie] = useState({});

  useEffect(() => {
    async function getData(){
      const response = await axios.get(
        `/movie/${movieId}`)
      setMovie(response.data); 
    } getData();
  },[movieId])

  if(!movie){
    return null;
  }

  return (
    <section>
      <img 
        className='modal_posterimg'
        src= {`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
        alt='image' />
    </section>
  )
}

export default DetailPage




























// 1. moviemodal창을 클릭했을 때, 모달창 안인지/밖인지 구분시키기 
// -> useRef (리액트)
//  => 클래스형 
//   export default class Hello {
//     constructor(props) {
//       super(props);
//       this.helloRef = React.createRef()
//     }

//     render() {
//       return (
//         <div ref={helloRef}>
          
//         </div>
//       )
//     }
//   }

//  => 함수형 

//  export default function HEllo() {
//   const helloRef = useRef(null);

//    return (
//      <div ref={helloRef}>
       
//      </div>
//    )
//  }
 
// Ref 의 current의 특정 DOM을 가르킨다. (콘솔로확인해보세요)
// -> getElementById, querySelector...(자바스크립트)

// 2. react hook에서 해당 내용 작성 
// 3. moviemodal창을 클릭시 함수 호출하기(callback함수) => 이벤트 등록하기 
// 4. Callback 함수안에 모달 닫아주기 내용 넣기 