import { Restaurant } from '../../pages/Home'
import Restaurante from '../Restaurante'
import * as S from './styles'

export type Props = {
  comercios: Restaurant[]
}

const ListaRestaurantes = ({ comercios }: Props) => (
  <S.Container className="container">
    <div>
      <S.List>
        {comercios.map((comercio) => (
          <li key={comercio.id}>
            <Restaurante
              id={comercio.id}
              tipo={comercio.tipo}
              image={comercio.capa}
              title={comercio.titulo}
              number={comercio.avaliacao}
              destacado={comercio.destacado}
              description={comercio.descricao}
              button={comercio.button}
            />
          </li>
        ))}
      </S.List>
    </div>
  </S.Container>
)

export default ListaRestaurantes
