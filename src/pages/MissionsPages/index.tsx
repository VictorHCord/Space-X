import { gql, useQuery } from '@apollo/client'
import { motion } from 'framer-motion'
import moment from 'moment'
import React from 'react'
import Rocket from '../../assets/images/rocket.svg'
import {
  Cards,
  Container,
  Content,
  DateMission,
  DescriptionMission,
  TitleMission
} from './styles'

interface MissionInitial {
  mission_name: string
  launch_date_local: string
  id: string
  launch_site: {
    site_name_long: string
  }
  ships: {
    image: string
  }
}

// Definindo ele como array para fazer o map dentro dele
interface MissionsInfo {
  launchesPast: Array<MissionInitial>
}
const QUERY_MISSIONS_LAUNCHES_PAST = gql`
  query launchesPast {
    launchesPast(limit: 10) {
      id
      mission_name
      launch_date_local
      launch_site {
        site_name_long
      }
    }
  }
`
const MissionsPages: React.FC = () => {
  const { data, loading, error } = useQuery<MissionsInfo>(
    QUERY_MISSIONS_LAUNCHES_PAST
  )

  if (loading)
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
      </Container>
    )

  if (error) return <p> ...Error</p>

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
          {data?.launchesPast.map(
            ({ id, mission_name, launch_site, launch_date_local }) => (
              <>
                <Cards>
                  <TitleMission> {mission_name} </TitleMission>
                  <DescriptionMission>
                    {launch_site.site_name_long}
                  </DescriptionMission>
                  <DateMission>
                    {moment(launch_date_local).format('DD/MM/YYYY HH:mm')}
                  </DateMission>
                </Cards>
              </>
            )
          )}
        </Content>
      </motion.div>
    </Container>
  )
}

export default MissionsPages
