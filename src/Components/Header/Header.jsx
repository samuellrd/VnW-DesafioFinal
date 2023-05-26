import * as S from "./HeaderStyles";
import Logo from "../../assets/logoDellMovies.png";
import Movies from "../Movies/Movies";
import { AiOutlineSearch } from "react-icons/ai";
import MovieDescription from "./MovieDescription";

export default function Header() {
  return (
    <S.Header>
      <S.SectionHeader>
        <img src={Logo} alt="logo Dell-Movies" />
        <S.DivHeader>
          <S.Titles>Séries</S.Titles>
          <S.Titles>Filmes</S.Titles>
        </S.DivHeader>
        <S.NavHeader>
          <AiOutlineSearch size={30} color="#FFF" />
          <ul>
            <li>Filtro</li>
            <li>Login</li>
          </ul>
        </S.NavHeader>
      </S.SectionHeader>
      <MovieDescription />
    </S.Header>
  );
}
