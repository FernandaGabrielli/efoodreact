import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { close, remove } from '../../store/reducers/cart'

import {
  Overlay,
  CartContainer,
  Sidebar,
  Prices,
  CartItem,
  ButtonCart
} from './styles'
import { formataPreco } from '../PratosRestaurante'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)

  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }

  const getTotalPrice = (): number => {
    return items.reduce((acumulador, valorAtual) => {
      return (acumulador += valorAtual.preco!)
    }, 0)
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeCart} />
      <Sidebar>
        <ul>
          {items.map((item) => (
            <CartItem key={item.id}>
              <img src={item.foto} alt={item.nome} />
              <div>
                <h3>{item.nome}</h3>
                <span>{formataPreco(item.preco)}</span>
              </div>
              <button onClick={() => removeItem(item.id)} type="button" />
            </CartItem>
          ))}
        </ul>
        <Prices>
          <p>Valor total</p> <p>{formataPreco(getTotalPrice())}</p>
        </Prices>
        <ButtonCart
          title="Clique aqui para continuar com a compra"
          type="button"
        >
          Continuar com a compra
        </ButtonCart>
      </Sidebar>
    </CartContainer>
  )
}

export default Cart
