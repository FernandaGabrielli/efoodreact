import { Link } from 'react-router-dom'

import estrela from '../../assets/images/estrela.png'
import * as S from './styles'

type Props = {
  id: number | undefined
  image: string
  title: string
  number: number
  description: string
  button: string
  tipo: string
  destacado: boolean
}

const Restaurante = ({
  id,
  image,
  title,
  number,
  description,
  tipo,
  destacado
}: Props) => (
  <S.Card>
    <img src={image} alt={title} />
    <S.Infos>
      {destacado === true ? (
        <S.TagContainer>Destaque da semana</S.TagContainer>
      ) : null}
      <S.TagContainer>{tipo}</S.TagContainer>
    </S.Infos>
    <S.CardContainer>
      <S.TituloContainer>
        <S.Titulo>{title}</S.Titulo>
        <S.NotaContainer>
          <S.Nota>{number}</S.Nota>
          <img src={estrela} alt="Estrela" />
        </S.NotaContainer>
      </S.TituloContainer>
      <S.Descricao>{description}</S.Descricao>
      <S.SaibaMais>
        <Link
          style={{ textDecoration: 'none', color: '#FFEBD9' }}
          to={`cardapio/${id}`}
        >
          Saiba mais
        </Link>
      </S.SaibaMais>
    </S.CardContainer>
  </S.Card>
)

export default Restaurante
