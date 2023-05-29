import React, { useEffect, useState } from "react";
import Carousel from "react-elastic-carousel";
import axios from "axios";
import * as S from "./MainStyles";

export default function Caroussel() {
  const [filmes, setFilmes] = useState([]);

  const getFilmes = async () => {
    await axios
      .get(
        "https://api.themoviedb.org/3/movie/popular?api_key=34635a3c54d72514d08fd6979b14e222&language=pt-Br&page=1"
      )
      .then((resposta) => {
        const allApi = resposta.data.results.map((item) => {
          return {
            ...item,
            image: `https://image.tmdb.org/t/p/w500/${item.poster_path}`,
          };
        });
        setFilmes(allApi);
      })
      .catch((error) =>
        alert(`desculpe, você teve um erro de requisição ${error}`)
      );
  };

  useEffect(() => {
    getFilmes();
  }, []);

  return (
    <>
      <S.ContainerTitle>Últimos lançamentos</S.ContainerTitle>
      <Carousel itemsToScroll={3} itemsToShow={5}>
        {filmes.map((item) => (
          <div>
            <img src={item.image} style={{ width: "90%" }} />
            <S.MovieName>{item.title}</S.MovieName>
            <S.Year>{String(item.release_date).slice(0, 4)}</S.Year>
          </div>
        ))}
      </Carousel>
    </>
  );
}
