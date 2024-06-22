import { Link } from 'react-router-dom'

import * as S from './styles'

import logo from '../../assets/images/logo.png'
import instagram from '../../assets/images/instagram.png'
import facebook from '../../assets/images/facebook.png'
import twitter from '../../assets/images/twitter.png'

const Footer = () => (
  <S.FooterContainer>
    <div className="container">
      <div>
        <Link to={`/`}>
          <img src={logo} alt="Efood" />
        </Link>
      </div>
      <S.RedesContainer>
        <a href="https://www.instagram.com/">
          <img src={instagram} alt="" />
        </a>
        <a href="https://www.facebook.com/">
          <img src={facebook} alt="" />
        </a>
        <a href="https://www.twitter.com/">
          <img src={twitter} alt="" />
        </a>
      </S.RedesContainer>
      <div>
        <S.Descricao>
          A efood é uma plataforma para divulgação de estabelecimentos, a
          responsabilidade pela entrega, qualidade dos produtos é toda do
          estabelecimento contratado.
        </S.Descricao>
      </div>
    </div>
  </S.FooterContainer>
)

export default Footer
