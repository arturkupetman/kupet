import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: row;

  @media (max-width: 1280px) {
    flex-direction: column;
     min-height: auto;
  }
`;

export const HeroBlock = styled.div`
  width: 50vw;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #00ff15 100%);
  position: relative;


  @media (max-width: 1280px) {
    width: 100%;
    height: 60vh;
  }

  @media (max-width: 768px) {
    background-position: center center;
  }
`;

export const HeroImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  
`;

export const HeroDiv = styled.div`
    width: 100%;
    height: 30vh;
    position: absolute;
    bottom:0;
    background: linear-gradient(180deg, rgba(11, 11, 11, 0) 20%, rgba(0, 0, 0, 0.3) 40%, rgba(0, 0, 0, 0.75) 65%, #0b0b0b 100%);
`

export const ContentBlock = styled.div`
  width: 50vw;
  height: 100vh;
  padding: 4vw;
  display: flex;
  flex-direction: column;
  gap: 2vh;
  background-color: #161616;
  color: white;
  position: relative;
  justify-content: center;

  @media (max-width: 1280px) {
    width: 100vw;
    height: auto;
    padding: 35px;
     justify-content: center;
  }
`;

export const Title = styled.h1`
  font-family: 'Bebas Neue Pro';
 font-size: 91px;
  text-align: center;
  line-height: 1;
  width: 100%;
  text-transform: uppercase;

  @media (max-width: 1280px) {
    font-size: 60px;
    position: absolute;
    top: -70px;
    left: 0;
  }
`;

export const Subtitle = styled.h2`
    font-family: 'Bebas Neue Middle';
  font-size: 30px
  text-align: left;
  color: #888;
  line-height: 1.4;
  text-align: center;
  color: #00ff15;
  font-weight: 500;
  @media (max-width: 1280px) {
    font-size: 2.5vw;
  }

  @media (max-width: 768px) {
    font-size: 4vw;
  }
`;

export const SocialLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1vh;
  width: 100%;
  max-width: 100%;
  margin-top: 2vh;

  @media (max-width: 1280px) {
    gap: 2vh;
  }
`;

export const SocialLink = styled.a`
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 1.5vh 1.5vw;
  border-radius: 0.5vw;
  color: white;
  text-decoration: none;
  transition: background-color 0.3s ease;
  background: #101010;
  -webkit-tap-highlight-color: transparent;
  user-select: none;
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 18px;
  color: #fff;

  @media (min-width: 1281px) {
    &:hover {
      background-color: #333;
    }
  }

  @media (max-width: 1280px) {
    padding: 2vh 3vw;
border-radius: 10px;
    gap: 15px;
    font-size: 16px;
  }
`;

export const IconContainer = styled.div`
  width: 63px;
  height: 63px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  background: ${props => props.bgColor};

  @media (max-width: 1280px) {
    width: 49px;
    height: 49px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

