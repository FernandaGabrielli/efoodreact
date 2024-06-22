import styled from 'styled-components'
import { cores } from '../../styles'

export const Container = styled.div`
  color: ${cores.bege};

  p {
    margin-bottom: 16px;
    font-size: 14px;
    line-height: 22px;
  }

  h3 {
    margin-bottom: 16px;
    font-size: 16px;
  }

  .space-between {
    display: flex;
    gap: 40px;

    input {
      width: 100%;
    }
  }

  .marginTop {
    margin-top: 16px;
  }

  input {
    width: 100%;
    padding: 8px;
    margin: 8px 0;
    border: 1px solid ${cores.bege};
    background-color: ${cores.bege};
  }
`

export const InputGroup = styled.div`
  label {
    display: block;
    font-size: 14px;
    font-weight: bold;
    color: ${cores.bege};
  }
`

export const ButtonEntrega = styled.button`
  background-color: ${cores.bege};
  color: ${cores.coral};
  font-size: 14px;
  font-weight: bold;
  padding: 4px;
  width: 100%;
  margin-bottom: 8px;
  border: none;
  cursor: pointer;
`
