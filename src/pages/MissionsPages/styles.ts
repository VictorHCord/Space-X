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
    justify-content: space-between;
  }
`

export const Content = styled.div``

export const Cards = styled.span``
