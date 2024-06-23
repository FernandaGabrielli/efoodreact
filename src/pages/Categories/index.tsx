import { useParams } from 'react-router-dom'

import Banner from '../../components/Banner'
import Cart from '../../components/Cart'
import ProfileHeader from '../../components/ProfileHeader'
import ListaPratos from '../../components/ListaPratos'
import Loader from '../../components/Loader'

import { useGetRestaurantQuery } from '../../services/api'

export type Prato = {
  prices: number
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
  prices: number
}

type PratoParams = {
  id: string
}

const Categories = () => {
  const { id } = useParams() as PratoParams
  const { data: restaurant } = useGetRestaurantQuery(id)

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
  return <Loader />
}

export default Categories
