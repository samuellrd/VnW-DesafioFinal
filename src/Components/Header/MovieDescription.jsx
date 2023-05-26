import * as S from "./HeaderStyles";
import { HiStar } from "react-icons/hi";
import { BsFillPlayFill } from "react-icons/bs";
import { FaFilm } from "react-icons/fa";

export default function MovieDescription() {
  return (
    <S.MovieDescription>
      <div>
        <S.MovieName>Avatar: o Caminho da Água</S.MovieName>
        <S.MovieInfo>3hr 23 min | Fantasia, Família | 2023 </S.MovieInfo>
        <S.Nota>
          <HiStar size={30} color="#F3CD32" />
          <h4>
            {" "}
            9,9<span>/10</span>
          </h4>
          <S.Imdb>IMDb</S.Imdb>
        </S.Nota>
        <S.Movieresume>
          Após formar uma família, Jake Sully e Ney'tiri fazem de tudo para
          ficarem juntos. No entanto, eles devem sair de casa e explorar as
          regiões de Pandora quando uma antiga ameaça ressurge, e Jake deve
          travar uma guerra difícil contra os humanos.
        </S.Movieresume>
        <S.ButtonDiv>
          <S.Button>
            <BsFillPlayFill size={25} /> Assistir agora
          </S.Button>
          <S.Button BgColor="#717171">
            <FaFilm size={20} /> Trailer
          </S.Button>
        </S.ButtonDiv>
      </div>
    </S.MovieDescription>
  );
}
