import { darken } from 'polished'
import styled from 'styled-components'

export const Container = styled.div`
  background-color: #2f80ed;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  .wrapper-logo {
    position: absolute;
    z-index: 10;
  }

  .content-wrapper {
    position: relative;
    width: 100%;
    max-width: 1100px;
    height: 100%;
    max-height: 650px;
    margin-left: 35px;
    margin-right: 35px;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    justify-content: center;
  }
`

export const Content = styled.div`
  margin: 0 auto;
  width: 50%;
  @media (max-width: 680px) {
    width: 100%;
  }
`

export const Card = styled.div`
  border: 1px solid #fff;
  border-radius: 4px;
`

export const DetailsCard = styled.div`
  border: 1px solid #fff;
  background: #fff;
`

export const MissionName = styled.h1`
  font-weight: 600;
  font-size: 1.6rem;
  text-align: center;
  margin: 10px;
  @media (max-width: 680px) {
    font-size: 1.1rem;
  }
`

export const ItemDescription = styled.div`
  font-size: 1rem;
  padding: 10px;
  line-height: 2;
  @media (max-width: 680px) {
    font-size: 0.9rem;
  }
`

export const Button = styled.button`
  border: none;
  display: flex;
  margin: 20px auto;
  padding: 20px;
  font-weight: 600;
  color: #fff;
  font-size: 1rem;
  background: #15c3d6;
  border-radius: 5px;
  cursor: pointer;
  a {
    color: inherit;
    padding: 0;
    text-decoration: none;
  }
  :hover {
    background: ${darken('0.1', '#15c3d6')};
  }
`
