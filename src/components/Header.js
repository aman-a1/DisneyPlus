import React, {useEffect} from "react";
import styled from "styled-components";
import {
    selectUserPhoto,
    selectUserName,
    setUserLogin,
    setSignOut
} from '../features/user/userSlice'
import { useHistory } from "react-router";
import {useDispatch, useSelector} from 'react-redux'
import { auth, provider } from "../firebase"

function Header() {



    const dispatch = useDispatch();
const userName = useSelector(selectUserName);
const userPhoto = useSelector(selectUserPhoto);
useEffect(()=>{
auth.onAuthStateChanged(async(user) => {
    if(user)
    {
        dispatch(setUserLogin({
            name: user.displayName,
            email: user.email,
            photo: user.photoURL,
        }))
        history.push("/")
    }
})
},[])

const signIn = () => {
        auth.signInWithPopup(provider).then((result)=>
        {
            
            let user = result.user;
           dispatch(setUserLogin({
               name: user.displayName,
               email: user.email,
               photo: user.photoURL,
           }))
           history.push("/")
        })
}
const history = useHistory();
const signOut = () => {
    auth.signOut().then(() => {
        dispatch(setSignOut());
        history.push("/login");
    })
}


  return (
    <Nav>
      <Logo src="/images/logo.svg" />
      {
          !userName ? 
          (<LoginContainer>
              <Login onClick={signIn}>
              Login
          </Login>
            </LoginContainer>) :
          <>
<NavMenu>
        <a>
          <img src="/images/home-icon.svg" />
          <span>HOME</span>
        </a>
        <a>
          <img src="/images/search-icon.svg" />
          <span>SEARCH</span>
        </a>
        <a>
          <img src="/images/watchlist-icon.svg" />
          <span>WATCHLIST</span>
        </a>
        <a>
          <img src="/images/original-icon.svg" />
          <span>ORIGINALS</span>
        </a>
        <a>
          <img src="/images/movie-icon.svg" />
          <span>MOVIES</span>
        </a>
        <a>
          <img src="/images/series-icon.svg" />
          <span>SERIERS</span>
        </a>
      </NavMenu>
      <UserImg src={userPhoto}  onClick={signOut}/>
          </>
          
      }
      
      
    </Nav>
  );
}

export default Header;
const Nav = styled.nav`
  overflow-x: hidden;
  height: 70px;
  background: #090b13;
  display: flex;
  align-items: center;
  padding: 0 36px;
`;
const Logo = styled.img`
  width: 80px;
`;

const NavMenu = styled.div`
  display: flex;
  flex: 1;
  margin-left: 20px;
  align-items: center;
  a {
    display: flex;
    padding: 0 12px;
    align-items: center;
    cursor: pointer;

    img {
      height: 20px;
    }
    span {
      font-size: 13px;
      letter-spacing: 1.42px;
      position: relative;

      &:after {
        content: "";
        height: 2px;
        background: white;
        position: absolute;
        // top: 0;
        left: 0;
        right: 0;
        bottom: -6px;
        opacity: 0;
        transform: scaleX(0);
        transition: all 400ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
      }
    }
    &:hover {
      span:after {
        opacity: 1;
        transform: scaleX(0.8);
      }
    }
  }
`;
const UserImg = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  cursor: pointer;
`;
const Login = styled.div`
border: 1px solid #f9f9f9;
padding: 8px 16px;
border-radius: 4px;
letter-spacing: 1.5px;
text-transform: uppercase;
background: rgba(0,0,0,.6);
transition: all 250ms ease 0s;
cursor: pointer;

&:hover{
    background: #f9f9f9;
    color: #000;
    border-color: transparent;
}

`
const LoginContainer = styled.div`
flex:1;
display: flex;
justify-content: flex-end;
`