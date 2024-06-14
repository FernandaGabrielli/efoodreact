import { useEffect, useState } from 'react'
import Header from '../../components/Header'
import ListaRestaurantes from '../../components/ListaRestaurantes'

export type Restaurant = {
  id: number
  titulo: string
  avaliacao: number
  descricao: string
  capa: string
  button: string
  destacado: boolean
  tipo: string
  cardapio?: {
    foto: string
    preco: number
    id: number
    nome: string
    descricao: string
    porcao: string
  }
}

const Home = () => {
  const [restaurantes, setRestaurantes] = useState<Restaurant[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((resposta) => resposta.json())
      .then((resposta) => setRestaurantes(resposta))
  }, [])

  return (
    <>
      <Header />
      <ListaRestaurantes comercios={restaurantes} />
    </>
  )
}

export default Home
