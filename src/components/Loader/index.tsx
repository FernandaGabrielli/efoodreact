import { BounceLoader } from 'react-spinners'
import { cores } from '../../styles'
import { Container } from './styles'

const Loader = () => (
  <Container>
    <BounceLoader color={cores.coral} />
  </Container>
)

export default Loader
