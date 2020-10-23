import { motion } from 'framer-motion'
import React from 'react'
import { FiArrowRight } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import Rocket from '../../assets/images/rocket.svg'
import Taken from '../../assets/images/taken.svg'
import World from '../../assets/images/world.svg'
import {
  AlignForItens,
  Container,
  Content,
  DashMain,
  ImagensMain
} from './styles'





const DashboardPages: React.FC = () => {
  return (
    <Container>
      <motion.div
        className="wrapper-logo-happy"
        initial={{ scale: 0 }}
        animate={{ scale: 2 }}
        transition={{ duration: 1.5, repeat: 1, repeatType: 'reverse' }}
      >
        <img src={Rocket} alt="Logo da plataforma" />
      </motion.div>
      <motion.div
        className="content-wrapper"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3, duration: 0.8 }}
      >
        <AlignForItens>
          <img src={Rocket} alt="Logo da plataforma" />
          <span> Space-X </span>
        </AlignForItens>
        <Content>
          <DashMain>
            <h1>Descubra e explore novos mundos</h1>
            <p>Visite e veja mais informações sobre os planetas.</p>
          </DashMain>

          <ImagensMain>
            <img src={World} alt="Mundos a explorar" />
            <img src={Taken} alt="Siga e encontre oque deseja" />
          </ImagensMain>
        </Content>
        <Link to="/dashboard" className="button-sign">
          <FiArrowRight size={26} color="rgba(8, 0, 0, 0.6)" />
        </Link>
      </motion.div>
    </Container>
  )
}

export default DashboardPages
