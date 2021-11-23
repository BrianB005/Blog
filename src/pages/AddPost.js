import React, { useState } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { addPost } from "../redux/actions/postActions";
import Alert from "../components/Alert";
const AddPost = () => {
  const [postData, setPostData] = useState({});
  const [errors, setError] = useState(false);
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addPost(postData));
  };
  const createPost = useSelector((state) => state.addPost);
  const { loading, error, success } = createPost;

  if (error) {
    setError(true);
  }
  if (success) {
    setPostData({});
  }

  const handleChange = (e) => {
    setPostData((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };
  console.log(postData);
  return (
    <Wrapper>
      {errors && <Alert title={error} />}
      {success && <Alert title="Product Added Successfully" />}
      <h1>Add a new post</h1>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          name="title"
          onChange={handleChange}
          autoFocus="true"
          required
          placeholder="Post Title"
        />
        <Input
          type="text"
          name="image"
          required
          placeholder="Post Image URL"
          onChange={handleChange}
        />
        <TextArea
          placeholder="Post body"
          name="body"
          rows={8}
          onChange={handleChange}
        />
        <Button>{loading ? "Adding.." : "Add Post"}</Button>
      </Form>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-top: 13vh;
  max-width: 600px;
  width: 90vw;
  margin-left: auto;
  margin-right: auto;
  h1 {
    margin-bottom: 5px;
    color: darkcyan;
  }
`;

const Input = styled.input`
  width: 80%;
  padding: 8px 8px;
  outline: none;
  margin-bottom: 10px;
  border: none;
  border-radius: 6px;
  border-bottom: 3px solid darkcyan;
`;
const TextArea = styled.textarea`
  width: 80%;
  border: none;
  outline: none;
  padding: 8px 9px;
  border-radius: 8px;
  border-bottom: 3px solid darkcyan;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Button = styled.button`
  width: 50%;
  margin: 13px 0 13px 13%;
  background: darkcyan;
  border: 1px solid cyan;
  cursor: pointer;
  color: white;
  padding: 8px;
  border-radius: 12px;
  transition: all 0.5s linear;
  &:hover {
    border-radius: 24px;
  }
`;

export default AddPost;
