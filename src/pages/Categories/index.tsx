import { useParams } from 'react-router-dom'

import ProfileHeader from '../../components/ProfileHeader'
import Banner from '../../components/Banner'
import ListaPratos from '../../components/ListaPratos'
import { useGetRestaurantQuery } from '../../services/api'
import Cart from '../../components/Cart'

export type Prato = {
  id: number
  foto: string
  preco: number
  nome: string
  descricao: string
  porcao: string
  cardapio: Prato[]
}

export interface Restaurante {
  id: number
  titulo: string
  capa: string
  avaliacao: number
  descricao: string
  tipo: string
  destacado: boolean
  cardapio: Prato[]
}

const Categories = () => {
  const { id } = useParams()
  const { data: restaurant } = useGetRestaurantQuery(id!)

  if (restaurant) {
    return (
      <>
        <ProfileHeader />
        <Banner />
        <ListaPratos pratos={restaurant.cardapio} />
        <Cart />
      </>
    )
  }
  return <h3>Carregando...</h3>
}

export default Categories
