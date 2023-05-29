import styled from "styled-components";

export const Main = styled.main`
  color: #fff;
`;

export const NavMain = styled.nav`
  display: flex;
  padding: 3vh 4.3vw;
  gap: 4vw;
`;

export const GendersMovies = styled.ul`
  width: 83vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #f6f6f6;
  font-size: 1.2rem;

  li {
    &:hover {
      text-decoration: underline;
      cursor: pointer;
    }
  }
`;

// ESTILIZAÇÃO DA PARTE DO CAROUSEL

export const ContainerTitle = styled.p`
  padding: 10vh 0 5vh 4.5vw;
  font-size: 1.5rem;
  font-weight: 700;
`;

export const Year = styled.p`
  width: 17vw;
  font-size: 0.8rem;
  font-weight: 300;
  color: #f6f6f6;
  text-align: start;
`;

export const MovieName = styled.h5`
  font-size: 1rem;
  font-weight: 700;
  width: 17vw;
  text-align: start;
`;

export const MoviesContainer = styled.section`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

export const MovieBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 65vh;
  width: 19vw;
`;

export const PagesBox = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1vw;
  font-weight: 300;
  font-size: 1rem;
  padding-bottom: 10vh;

  p {
    border: 2px solid #ffffff;
    border-radius: 10px;
    padding: 10px;
    cursor: pointer;
  }
`;

export const PageNumber = styled.li`
  width: 3.5vw;
  height: 7vh;
  display: flex;
  align-items: center;
  justify-content: center;
  border: solid 2px #fff;
  border-radius: 50%;
  color: ${(props) => props.Color || "#FFF"};
  background-color: ${(props) => props.BackColor || "transparent"};
  cursor: pointer;
`;
