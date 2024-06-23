import styled from 'styled-components'

import bannerImg from '../../assets/images/Vector.png'
import { breakpoints } from '../../styles'

export const HeaderContainer = styled.div`
  display: flex;
  background-image: url(${bannerImg});
  background-size: cotain;

  .container {
    height: 186px;
    display: flex;
    text-align: center;
    padding: 40px 0;
    text-decoration: none;
    font-size: 18px;
    font-weight: bold;

    @media (max-width: ${breakpoints.tablet}) {
      p {
        padding: 5px;
      }

      img {
        margin: 0 10px 0px 10px;
      }
    }
  }
`

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1024px;
`
