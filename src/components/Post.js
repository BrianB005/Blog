import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deletePost } from "../redux/actions/postActions";
import { useNavigate } from "react-router-dom";
const Post = ({ body, image, updatedAt, title, _id }) => {
  const userInfo = useSelector((state) => state.userSignin);
  const dispatch = useDispatch();
  const deleteItem = useSelector((state) => state.deletePost);
  const deleteAPost = () => {
    dispatch(deletePost(_id));
  };
  const navigate = useNavigate();

  if (deleteItem?.success) {
    navigate("/");
  }

  return (
    <Wrapper>
      <Link to={`/posts/${_id}`}>
        <ImageContainer>
          <img src={image} alt={title.substr(0, 13)} />
        </ImageContainer>
      </Link>
      {userInfo?.userInfor?.user?.role === "admin" && (
        <Buttons>
          <button>Update</button>
          <button onClick={deleteAPost} disabled={deleteItem?.loading}>
            {deleteItem?.loading ? "Deleting..." : "Delete"}
          </button>
        </Buttons>
      )}
      <InfoContainer>
        <Container>
          <Author>
            By <span>Brian</span>
          </Author>
          <Time>{new Date(updatedAt).toDateString()}</Time>
        </Container>
        <Link to={`/posts/${_id}`}>
          <Title>{title}</Title>
        </Link>
        <Desc>{body}</Desc>
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
    cursor: pointer;
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
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;

  font-size: 14px;
  color: rgba(0, 100, 100, 0.8);
`;
const Title = styled.h6`
  font-family: "Times New Roman", Times, serif;
  font-size: 17px;
  cursor: pointer;
  margin-bottom: 8px;
  color: #082032;
  &:hover {
    text-decoration: underline;
  }
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

const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
  button {
    padding: 8px 14px;
    background: green;
    color: white;
    border-radius: 8px;
    border: 1px solid #082032;
    transition: all 0.6s linear;
    cursor: pointer;
    &:disabled {
      cursor: not-allowed;
    }
    &:hover {
      border-radius: 20px;
      opacity: 0.8;
    }
    &:last-child {
      background: red;
    }
  }
`;
export default Post;

// https://images.pexels.com/photos/10161241/pexels-photo-10161241.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500
