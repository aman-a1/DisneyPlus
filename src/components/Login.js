import React from 'react'
import styled from 'styled-components';
function Login() {
    return (
  <Container>
           <CTA>
               <LogoOne src="/images/cta-logo-one.svg"/>
           <SignUp>
               GET ALL THERE
           </SignUp>
           <Description >
           Get The Disney Bundle to stream the best movies, shows, and sports with Disney+, Hulu, and ESPN+. Terms apply. Learn more about The Disney Bundle!
           </Description>
           <LogoTwo src="/images/cta-logo-two.png"/>
           </CTA>

  </Container>
    )
}

export default Login

const Container = styled.div`
position: relative;
height: calc(100vh - 70px);
display: flex;
align-items:top;
justify-content: center;


&:before{
    background-position: top;
    background-size: cover;
    background-repeat: no-repeat;
    background-image: url("/images/login-background.jpg");
    position: absolute;
    top:0;
    bottom:0;
    content: "";
    opacity: 0.75;
    left:0;
    right:0;
    z-index:-1;

}
`
const CTA = styled.div`
max-width:650px;
padding: 80px 40px;
width:90%;
display: flex;
flex-direction: column;
margin-top:100px;
align-items: center;

`
const LogoOne = styled.img``
const LogoTwo = styled.img`
width:85%;
`

const SignUp = styled.a`
width: 100%;
background: #0063e5;
font-weight: bold;
padding: 17px 0;
color: #f9f9f9;
border-radius: 4px;
text-align: center;
font-size: 18px
cursor: pointer;
transition: all 250ms;
letter-spacing: 1.4px;
margin-top: 8px;
margin-bottom: 12px;

&:hover {
    background: #0483ee;

}
`

const Description = styled.p`
font-size: 11px;
letter-spacing: 1.5px;
text-align: center;
line-height: 1.5;
`