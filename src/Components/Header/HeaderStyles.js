import styled from "styled-components";
import BgAvatar from "../../assets/avatarBg.png";

export const Header = styled.header`
  height: 100vh;
  background-image: url(${BgAvatar});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

// Secetion onde ta a navbar e tem o fundo tranpatente

export const SectionHeader = styled.section`
  padding: 0 2vw;
  background: transparent;
  height: 9.5vh;
  backdrop-filter: blur(9px);
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const DivHeader = styled.div`
  display: flex;
`;

export const Titles = styled.button`
  padding: 1.5vh 2.5vw;
  font-size: 1rem;
  background: transparent;
  border: none;
  color: #fff;

  &:hover,
  &:focus,
  &:active {
    background-color: #747474;
    box-shadow: 0px 3px 6px #0000005c;
    border-radius: 25px;
    cursor: pointer;
  }
`;

export const NavHeader = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 15vw;
  cursor: pointer;

  ul {
    display: flex;
    justify-content: space-between;
    width: 65%;
    font-size: 1.2rem;
  }
`;

// PARTE DA DESCRIÇÃO DO FILME

export const MovieDescription = styled.section`
  height: 45vh;
  padding-left: 10vw;
  background: transparent linear-gradient(180deg, #00000000 0%, #000000 100%) 0%
    0% no-repeat;
`;

export const MovieName = styled.h2`
  font-size: 1.8rem;
  font-weight: 700;
`;

export const MovieInfo = styled.p`
  color: #f6f6f6;
  font-size: 0.7rem;
  font-weight: 300;
`;

export const Nota = styled.div`
  width: 12vw;
  padding: 1vh 0;
  display: flex;
  align-items: center;
  justify-content: space-between;

  h4 {
    font-size: 1.6rem;
    font-weight: 400;
  }

  span {
    color: #f6f6f6;
    font-size: 0.7rem;
    font-weight: 300;
  }
`;

export const Imdb = styled.p`
  background-color: #f6c700;
  color: #000;
  font-weight: 800;
  border-radius: 10%;
  padding: 0 0.1vw;
`;

export const Movieresume = styled.p`
  width: 43vw;
  color: #f6f6f6;
  font-weight: 300;
`;
export const ButtonDiv = styled.div`
  width: 30vw;
  padding: 2vh 0;
  display: flex;
  justify-content: space-between;
`;

export const Button = styled.button`
  padding: 1.5vh 3vw;
  display: flex;
  align-items: center;
  color: #fff;
  border: none;
  font-weight: 600;
  font-size: 1rem;
  gap: 10px;
  border-radius: 21px;
  box-shadow: 0px 3px 6px #00000029;
  background-color: ${(props) => props.BgColor || "#D53A00"};
  cursor: pointer;
`;
