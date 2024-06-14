import styled from 'styled-components'
import { cores } from '../../styles'
import recyclebin from '../../assets/images/recyclebin.png'

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.7;
`
export const CartContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  z-index: 1;
`
export const Sidebar = styled.aside`
  background-color: ${cores.coral};
  z-index: 1;
  padding: 40px 16px 0;
  max-width: 360px;
  width: 100%;
`
export const Quantity = styled.p`
  font-size: 16px;
  font-weight: bold;
  color: ${cores.bege};
  margin-top: 40px;
`

export const Prices = styled.p`
  margin: 40px 0 16px;
  color: ${cores.bege};
  display: flex;
  justify-content: space-between;
  font-weight: bold;
  font-size: 14px;
`
export const CartItem = styled.li`
  display: flex;
  background-color: ${cores.bege};
  padding: 8px;
  position: relative;

  img {
    height: 80px;
    width: 80px;
    object-fit: cover;
    margin-right: 8px;
    margin-bottom: 4px;
  }

  h3 {
    color: ${cores.coral};
    font-weight: bold;
    font-size: 16px;
    margin-bottom: 16px;
  }

  button {
    background-image: url(${recyclebin});
    width: 16px;
    height: 16px;
    border: none;
    position: absolute;
    bottom: 8px;
    right: 8px;
    cursor: pointer;
  }
`

export const ButtonCart = styled.button`
  border: none;
  background-color: ${cores.bege};
  color: ${cores.coral};
  font-size: 14px;
  font-weight: bold;
  padding: 4px;
  width: 100%;
  cursor: pointer;
`
