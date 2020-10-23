import { motion } from 'framer-motion'
import React from 'react'
import Rocket from '../../assets/images/rocket.svg'
import { Cards, Container, Content } from './styles'

const MissionsPages: React.FC = () => {
  return (
    <Container>
      <motion.div
        className="wrapper-logo"
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
        <Content>
          <Cards> teste </Cards>
        </Content>
      </motion.div>
    </Container>
  )
}

export default MissionsPages
