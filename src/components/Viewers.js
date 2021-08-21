import React from "react";
import styled from "styled-components";

function Viewers() {

  
  const stopMovie = (e) => {
    e.target.pause();
    console.log('off');
  }
  
  const playMovie = (e) => {
    e.target.play();
    console.log('on');
  }

  return (
    <Container>
      <Wrap>

        <img src="/images/viewers-disney.png" />
        <video id="background-video" onMouseOver={playMovie}
          onMouseOut={stopMovie}>
          <source src="/videos/1564674844-disney.mp4" type="video/mp4" />
        </video>
      </Wrap>
      <Wrap>
        <img src="/images/viewers-pixar.png" />
        <video id="background-video" onMouseOver={playMovie}
          onMouseOut={stopMovie}>
          <source src="/videos/1564676714-pixar.mp4" type="video/mp4" />
        </video>
      </Wrap>
      <Wrap>
        <img src="/images/viewers-marvel.png" />
        <video id="background-video" onMouseOver={playMovie}
          onMouseOut={stopMovie}>
          <source src="/videos/1564676115-marvel.mp4" type="video/mp4" />
        </video>
      </Wrap>
      <Wrap>
        <img src="/images/viewers-starwars.png" />
        <video id="background-video" onMouseOver={playMovie}
          onMouseOut={stopMovie}>
          <source src="/videos/1608229455-star-wars.mp4" type="video/mp4" />
        </video>
      </Wrap>
      <Wrap>
        <img src="/images/viewers-national.png" />
        <video id="background-video" onMouseOver={playMovie}
          onMouseOut={stopMovie}>
          <source src="/videos/1564676296-national-geographic.mp4" type="video/mp4" />
        </video>
      </Wrap>
    </Container>
  );
}

export default Viewers;

const Container = styled.div`
  margin-top: 30px;
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  grid-gap: 25px;
  padding: 30px 0 26px;
`;
const Wrap = styled.div`
  position: relative;
  cursor: pointer;
  border: 3px solid rgba(249, 249, 249, 0.1);
  border-radius: 10px;
  box-shadow: rgb(0 0 0 / 69%) 0 26px 30px -10px,
    rgb(0 0 0 / 73%) 0 16px 10px -10px;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  img {
    
    width: 100%;
    height: 100%;
    object-fit: cover;
    
  }

  video {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
    visibility: hidden;
    &:hover{
      play;
    }
  }
  &:hover {
    img{
      display: none;
      overflow: 
    }
    video{
      visibility: visible;
    }

    transform: scale(1.05);
    border-color: rgba(249, 249, 249, 0.8);
    box-shadow: rgb(0 0 0 / 80%) 0 40px 58px -16px,
      rgb(0 0 0 / 72%) 0 30px 22px -10px;
  }
  &:hover .after {
    display: block;
  }
`;
