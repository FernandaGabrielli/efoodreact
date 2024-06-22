import { useParams } from 'react-router-dom'

import * as S from './styles'

import { useGetBannerQuery } from '../../services/api'

type BannerParams = {
  id: string
}

const Banner = () => {
  const { id } = useParams() as BannerParams
  const { data: restaurant } = useGetBannerQuery(id)

  return (
    <S.Imagem style={{ backgroundImage: `url(${restaurant?.capa})` }}>
      <div className="container">
        <S.Container>
          <div>
            <S.Text>{restaurant?.tipo}</S.Text>
          </div>
          <div>
            <S.Titulo>{restaurant?.titulo}</S.Titulo>
          </div>
        </S.Container>
      </div>
    </S.Imagem>
  )
}

export default Banner
