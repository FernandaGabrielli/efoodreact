import * as S from './styles'

import logo from '../../assets/images/logo.png'
import { Link } from 'react-router-dom'

const ProfileHeader = () => (
  <S.HeaderContainer>
    <S.Container className="container">
      <div>
        <Link to={`/`}>
          <p>Restaurantes</p>
        </Link>
      </div>
      <div>
        <Link to={`/`}>
          <img src={logo} alt="Efood" />
        </Link>
      </div>
      <div>
        <p>0 produto(s) no carrinho</p>
      </div>
    </S.Container>
  </S.HeaderContainer>
)

export default ProfileHeader
