import { useEffect, useState } from 'react'
import * as S from './styles'
import { Restaurant } from '../../pages/Home'
import { useParams } from 'react-router-dom'

const Banner = () => {
  const { id } = useParams()
  const [restaurant, setRestaurant] = useState<Restaurant>()

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((res) => setRestaurant(res))
  }, [id])

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
