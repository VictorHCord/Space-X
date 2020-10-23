import { gql, useQuery } from '@apollo/client'
import { motion } from 'framer-motion'
import React from 'react'
import { useParams } from 'react-router-dom'
import Rocket from '../../assets/images/rocket.svg'
import {
  Button,
  Card,
  Container,
  Content,
  DetailsCard,
  ItemDescription,
  MissionName
} from './styles'

interface LaunchInitial {
  mission_name: string
  id: string
  details: string
  links: {
    article_link: string
    video_link: string
  }
  ships: [
    {
      image: string
    }
  ]
}

interface LaunchId {
  id: string
}

// Definindo ele como array para fazer o map dentro dele
interface LaunchInfo {
  launch: LaunchInitial
}
const GET_MISSION = gql`
  query Launch($id: ID!) {
    launch(id: $id) {
      id
      details
      mission_name
      links {
        article_link
        video_link
      }
      ships {
        id
        image
      }
    }
  }
`

const DetailsMissionPages: React.FC = () => {
  const { id } = useParams<{ id: string }>()
  const { data, loading, error } = useQuery<LaunchInfo, LaunchId>(GET_MISSION, {
    variables: {
      id
    }
  })

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
          <Card>
            {data?.launch.ships[0] ? (
              <img src={data?.launch.ships[0].image} alt="" />
            ) : (
              <img
                src="https://mk0spaceflightnoa02a.kinstacdn.com/wp-content/uploads/2020/03/crs20_streak1.jpg"
                alt=""
              />
            )}

            <DetailsCard>
              <MissionName> {data?.launch.mission_name} </MissionName>
              <ItemDescription>{data?.launch.details}</ItemDescription>
              <Button>
                <a
                  href={
                    data?.launch.links.article_link
                      ? data?.launch.links.article_link
                      : data?.launch.links.video_link
                  }
                >
                  See more
                </a>
              </Button>
            </DetailsCard>
          </Card>
        </Content>
      </motion.div>
    </Container>
  )
}

export default DetailsMissionPages
