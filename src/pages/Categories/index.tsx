import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

import ProfileHeader from '../../components/ProfileHeader'
import Banner from '../../components/Banner'
import ListaPratos from '../../components/ListaPratos'

export type Prato = {
  id: number
  foto: string
  preco: number
  nome: string
  descricao: string
  porcao: string
}

const Categories = () => {
  const { id } = useParams()

  const [prato, setPrato] = useState<Prato[]>([])

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((res) => setPrato(res.cardapio))
  }, [id])

  return (
    <>
      <ProfileHeader />
      <Banner />
      {prato && <ListaPratos pratos={prato} />}
      {!prato && <h3>Carregando...</h3>}
    </>
  )
}

export default Categories
