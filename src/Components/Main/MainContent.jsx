import * as S from "./MainStyles";
import Movies from "../Main/Movies";
import { AiOutlineSearch } from "react-icons/ai";
import Carousel from "./Carousel";

export default function MainContent() {
  return (
    <S.Main>
      <S.NavMain>
        <S.GendersMovies>
          <li>Popular</li>
          <li>Drama</li>
          <li>Ação</li>
          <li>Aventura</li>
          <li>Comédia</li>
          <li>Crime</li>
          <li>Fantasia</li>
          <li>Família</li>
        </S.GendersMovies>
        <AiOutlineSearch size={30} />
      </S.NavMain>
      <Carousel />
      <Movies />
      <S.PagesBox>
        <S.PageNumber Color="#000" BackColor="#FFF">
          1
        </S.PageNumber>
        <S.PageNumber>2</S.PageNumber>
        <S.PageNumber>4</S.PageNumber>
        <S.PageNumber>4</S.PageNumber>
        <span>. . .</span>
        <S.PageNumber>322</S.PageNumber>
        <p>Último</p>
      </S.PagesBox>
    </S.Main>
  );
}
