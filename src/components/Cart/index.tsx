import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { close } from '../../store/reducers/cart'
import prato from '../../assets/images/prato.png'

import {
  Overlay,
  CartContainer,
  Sidebar,
  Prices,
  CartItem,
  ButtonCart
} from './styles'

const Cart = () => {
  const { isOpen } = useSelector((state: RootReducer) => state.cart)

  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }

  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeCart} />
      <Sidebar>
        <ul>
          <CartItem>
            <img src={prato} />
            <div>
              <h3>Nome do prato</h3>
              <span>R$ 80,00 </span>
            </div>
            <button type="button" />
          </CartItem>
        </ul>
        <Prices>
          <p>Valor total</p> <p>R$ 250,00</p>
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
