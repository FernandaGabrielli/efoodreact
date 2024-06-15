import { Prato } from '../../pages/Categories'
import PratosRestaurante from '../PratosRestaurante'
import * as S from './styles'

export type Props = {
  pratos: Prato[]
}

const ListaPratos = ({ pratos }: Props) => (
  <S.Container className="container">
    <div>
      <S.List>
        {pratos.map((prato) => (
          <li key={prato.id}>
            <PratosRestaurante
              id={prato.id}
              foto={prato.foto}
              nome={prato.nome}
              descricao={prato.descricao}
              porcao={prato.porcao}
              preco={prato.preco}
              cardapio={[]}
            />
          </li>
        ))}
      </S.List>
    </div>
  </S.Container>
)

export default ListaPratos
