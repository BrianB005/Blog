// import React, { useEffect } from "react";
// import Slider from "react-slick";

// import { useSelector, useDispatch } from "react-redux";
// import { getAllPosts } from "../redux/actions/postActions";
// import styled from "styled-components";
// const SliderItem = () => {
//   const dispatch = useDispatch();
//   const allPosts = useSelector((state) => state.posts);
//   console.log(allPosts);
//   // const { posts } = allPosts;
//   console.log();
//   useEffect(() => {
//     dispatch(getAllPosts());
//     //eslint-disable-next-line
//   }, []);
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     auto: true,
//   };
//   return (
//     <Slider {...settings}>
//       {/* {allPosts?.map((post) => (
//         <Wrapper>
//           <h1>{post.title}</h1>
//         </Wrapper>
//       ))} */}
//       <Wrapper1>
//         <Wrapper>
//           <div>hello1</div>
//         </Wrapper>
//         <Wrapper>
//           <div>hello2</div>
//         </Wrapper>
//         <Wrapper>
//           <div>hello3</div>
//         </Wrapper>
//       </Wrapper1>
//     </Slider>
//   );
// };

// const Wrapper1 = styled.div`
//   display: flex;
//   width: 100vw;
//   margin: 20px 0;
//   height: 200px;
//   overflow: hidden;
//   flex-direction: row;
// `;
// const Wrapper = styled.div`
//   height: 100%;
//   div {
//     width: 90%;
//     background: red;
//     margin: 0 auto;
//     height: 100%;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//   }
// `;

// export default SliderItem;
