import prato from '../../assets/images/prato.png'

import {
  Overlay,
  CartContainer,
  Sidebar,
  Prices,
  Quantity,
  CartItem,
  ButtonCart
} from './styles'

const Cart = () => (
  <CartContainer>
    <Overlay />
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
      <ButtonCart title="Clique aqui para continuar com a compra" type="button">
        Continuar com a compra
      </ButtonCart>
    </Sidebar>
  </CartContainer>
)

export default Cart
