import React from "react";
import { FaBars } from "react-icons/fa";
import styled from "styled-components";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { signout } from "../redux/actions/userActions";
const Navbar = () => {
  const [open, setOpen] = useState(false);
  const userInfo = useSelector((state) => state.userSignin);
  const dispatch = useDispatch();
  const Logout = () => {
    dispatch(signout());
  };
  // console.log(open);
  return (
    <NavWrapper>
      <Wrapper>
        <Left>
          <Link to="/">
            <Logo>BestBlogs</Logo>
          </Link>
        </Left>
        <Center>
          <List open={open}>
            <Link to="/">
              <ListItem onClick={() => setOpen(false)}>Home</ListItem>
            </Link>
            <Link to="/about">
              <ListItem onClick={() => setOpen(false)}>About</ListItem>
            </Link>
            {userInfo?.userInfor ? (
              <ListItem onClick={() => Logout()}>Logout</ListItem>
            ) : (
              <>
                <Link to="/login">
                  <ListItem onClick={() => setOpen(false)}>Login</ListItem>
                </Link>
              </>
            )}
            {userInfo?.userInfor ? (
              <Link to="/account">
                <ListItem>{userInfo?.userInfor?.user.name}</ListItem>
              </Link>
            ) : (
              <>
                <Link to="/register">
                  <ListItem onClick={() => setOpen(false)}>Register</ListItem>
                </Link>
              </>
            )}
            <Link to="/">
              <ListItem onClick={() => setOpen(false)}>Posts</ListItem>
            </Link>
          </List>
        </Center>
        <Right>
          <div>
            <FaBars onClick={() => setOpen(!open)} />
          </div>
        </Right>
      </Wrapper>
    </NavWrapper>
  );
};

const Left = styled.div``;
const Center = styled.div`
  /* flex: 1; */
`;
const Right = styled.div`
  @media screen and (min-width: 800px) {
    display: none;
  }
  div {
    cursor: pointer;
    transition: all 0.5s linear;
    font-size: 20px;
    &:hover {
      transform: rotate(6deg);
    }
  }
`;
const NavWrapper = styled.div`
  width: 100vw;
  background: lightseagreen;
  height: 50px;
  z-index: 1000;
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  height: 100%;
  align-items: center;
  width: 90%;
  max-width: 1300px;
  margin: 0 auto;
`;
const Logo = styled.div`
  text-transform: uppercase;
  font-weight: 900;
  font-size: 20px;
  cursor: pointer;
  color: #082032;
  text-shadow: 2px 1px 0 white, 3px 2px 0px gray;
  transition: all 0.5s linear;
  &:hover {
    /* opacity: 0.8; */
    transform: rotate(2deg);
  }
`;

const ListItem = styled.li`
  padding: 15px;
  color: white;
  font-size: 17px;
  cursor: pointer;
  position: relative;
  transition: all 0.4s linear;
  &:after {
    content: "";
    background: whitesmoke;
    height: 3px;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 5px;
    border-radius: 10px;
    opacity: 0;
  }
  &:active {
    &:after {
      opacity: 1;
    }
  }
  &:hover {
    background: lightgray;
    color: #082032;
  }
`;

const List = styled.ul`
  list-style-type: none;
  display: flex;
  @media screen and (max-width: 800px) {
    display: block;
    z-index: 2000;
    position: absolute;
    right: ${(props) => (props.open ? 0 : "-100%")};
    top: 35px;
    background: gray;
    width: 60vw;
    max-width: 250px;
    height: 100vh;
    /* opacity: 0; */
    transition: all 1.2s ease-out;
    /* opacity: ${(props) => props.open === true && 1};
     */
  }
`;

export default Navbar;
