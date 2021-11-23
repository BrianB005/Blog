import React, { useEffect } from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getPost } from "../redux/actions/postActions";
const Post = () => {
  const location = useLocation();
  const postId = location.pathname.split("/")[2];
  console.log(postId);
  const dispatch = useDispatch();
  const singlePost = useSelector((state) => state.post);
  console.log(singlePost.post);
  useEffect(() => {
    dispatch(getPost(postId));
  }, [postId, dispatch]);
  return (
    <Wrapper>
      <ImageContainer>
        <img
          src="https://images.pexels.com/photos/10208801/pexels-photo-10208801.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          alt="horizon"
        />
      </ImageContainer>
      <InfoContainer>
        <Container>
          <Author>
            By <span>Brian</span>
          </Author>
          <Time>Mon 2021 -11-27</Time>
        </Container>
        <Title>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam,
        </Title>
        <Desc>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
          qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui
          dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed
          quia non numquam eius modi tempora incidunt ut labore et dolore magnam
          aliquam quaerat voluptatem Sed ut perspiciatis unde omnis iste natus
          error sit voluptatem accusantium doloremque laudantium, totam rem
          aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
          architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam
          voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
          consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
          Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
          consectetur, adipisci velit, sed quia non numquam eius modi tempora
          incidunt ut labore et dolore magnam aliquam quaerat voluptatem
        </Desc>
      </InfoContainer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 90vw;
  padding: 30px;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 20px;
  height: max-content;
  box-shadow: 2px 3px 17px gray;
  background: whitesmoke;
  border-radius: 15px;
`;
const ImageContainer = styled.div`
  width: 100%;

  &:hover {
    img {
      transform: scale(1.03);
    }
  }
  img {
    width: 100%;
    height: 400px;
    border-radius: 20px;
    /* cursor: pointer; */
    object-fit: cover;
    transition: all 0.5s linear;
  }
`;

const InfoContainer = styled.div`
  padding: 20px;
`;

const Desc = styled.h5`
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  width: 100%;
  line-height: 1.4;
  font-size: 14px;
  color: rgba(0, 100, 100, 0.8);
`;
const Title = styled.h6`
  font-family: "Times New Roman", Times, serif;
  font-size: 17px;
  margin-bottom: 8px;
  color: #082032;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 6px;
`;

const Author = styled.h4`
  span {
    color: cadetblue;
    font-family: cursive;
    cursor: pointer;
    transition: all 0.5s linear;
    &:hover {
      margin-left: 4px;
    }
  }
`;

const Time = styled.p``;
export default Post;

// https://images.pexels.com/photos/10161241/pexels-photo-10161241.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500
// https://images.pexels.com/photos/7810108/pexels-photo-7810108.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500
