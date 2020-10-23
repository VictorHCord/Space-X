import { lighten } from 'polished'
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
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;

  a {
    padding: 0;
    text-decoration: none;
  }
`

export const Cards = styled.div`
  cursor: pointer;
  background-color: #15c3d6;
  border: 1px solid #bababb;
  border-radius: 4px;
  display: inline-block;
  padding: 10px;
  margin: 10px 0 0 10px;
  flex-grow: 1;
  width: calc(100% * (1 / 5) - 10px - 1px);

  :hover {
    background-color: ${lighten(0.03, '#15c3d6')};
  }
`

export const TitleMission = styled.h2`
  font-weight: 500;
  color: #fff;
  font-family: Piazzolla;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  ::after {
    content: '';
    display: block;
    width: 32px;
    height: 2px;
    background-color: #fff;
    margin: 0.9375rem auto;
    border-radius: 6px;
  }
`

export const DescriptionMission = styled.span`
  display: flex;
  padding: 10px;
  color: #fff;
`
export const DateMission = styled.span`
  padding: 10px;
  font-weight: 600;
  color: #fff;
`
