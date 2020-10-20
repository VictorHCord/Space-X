import styled from 'styled-components'

export const Container = styled.div`
  background-color: #2f80ed;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    height: 150px;
    width: 200px;
  }

  .button-sign {
    position: absolute;
    right: 0;
    bottom: 0;

    width: 60px;
    height: 60px;
    background: #15c3d6;
    border-radius: 20px;
    display: flex;
    align-items: center;
    justify-content: center;

    transition: background-color 0.2s;
  }
  .wrapper-logo-happy {
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

export const Content = styled.div`
  display: flex;
`

export const ImagensMain = styled.div`
  display: flex;
  flex: 2;

  img {
    margin: 0 auto;
    height: fit-content;
    width: auto;
  }
`

export const DashMain = styled.main`
  flex: 1;
  color: #fff;
  font-family: Piazzolla;

  h1 {
    font-size: 76px;
    font-weight: 800;
    line-height: 70px;
  }

  p {
    margin-top: 40px;
    font-size: 24px;
    line-height: 34px;
  }
`

export const AlignForItens = styled.div`
  display: flex;
  align-items: center;
  font-size: 55px;
  color: #fff;

  span {
    margin-left: 30px;
    font-weight: 700;
  }
`
