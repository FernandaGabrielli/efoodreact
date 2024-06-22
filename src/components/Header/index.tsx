import { Link } from 'react-router-dom'

import * as S from './styles'

import logo from '../../assets/images/logo.png'

const Header = () => (
  <S.HeaderContainer>
    <div className="container">
      <div>
        <Link to={`/`}>
          <img src={logo} alt="Efood" />
        </Link>
      </div>
      <div>
        <S.Titulo>
          Viva experiências gastronômicas no conforto da sua casa
        </S.Titulo>
      </div>
    </div>
  </S.HeaderContainer>
)

export default Header
