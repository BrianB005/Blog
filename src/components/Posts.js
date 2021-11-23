import React, { useEffect } from "react";
import Post from "./Post";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Button from "./Button";
import Loading from "../components/Loading";
// import SliderItem from "./Slider";
import { getAllPosts } from "../redux/actions/postActions";
const Posts = () => {
  const userInfo = useSelector((state) => state.userSignin);
  // if (userInfo?.userInfor.user.role === "admin") {
  // }
  const dispatch = useDispatch();
  const allPosts = useSelector((state) => state.posts);
  const { loading, posts } = allPosts;
  useEffect(() => {
    dispatch(getAllPosts());
    //eslint-disable-next-line
  }, [posts]);
  // console.log(allPosts);
  if (loading) {
    return <Loading />;
  }

  return (
    <>
      {/* <SliderItem></SliderItem> */}
      {userInfo?.userInfor?.user?.role === "admin" && (
        <Link to="/posts/add">
          <Button style={{ marginLeft: 300 }}>Add Post</Button>
        </Link>
      )}
      {posts?.map((post) => (
        <Post key={post._id} {...post} />
      ))}
    </>
  );
};

export default Posts;
