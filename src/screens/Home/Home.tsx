import { Container, Box } from '@chakra-ui/react'
import { Header } from '../../components/Header/Header'
import { TableComponent } from '../../components/Table/Table'

const columns = [
  'Author', 'Email', 'Commit Message', "Commit Link", "Created"
]

const data = [
  {
    name: 'Ramiro grisales',
    email: 'ramirogrisales@gmail.com',
    commit: 'Feat: this is a commit message',
    url : 'https://github.com/',
    created: '2017-10-10'
  },
  {
    name: 'Ramiro grisales',
    email: 'ramirogrisales@gmail.com',
    commit: 'Feat: this is a commit message',
    url : 'https://github.com/',
    created: '2017-10-10'
  },
  {
    name: 'Ramiro grisales',
    email: 'ramirogrisales@gmail.com',
    commit: 'Feat: this is a commit message',
    url : 'https://github.com/',
    created: '2017-10-10'
  },
  {
    name: 'Ramiro grisales',
    email: 'ramirogrisales@gmail.com',
    commit: 'Feat: this is a commit message',
    url : 'https://github.com/',
    created: '2017-10-10'
  },
  {
    name: 'Ramiro grisales',
    email: 'ramirogrisales@gmail.com',
    commit: 'Feat: this is a commit message',
    url : 'https://github.com/',
    created: '2017-10-10'
  },
]


export const Home = () => {

  return (
    <>
    <Container w='100vw' h='100vh' overflowX='hidden'>
      <Header/>
      {/* <Container w='100%'> */}
        <TableComponent
          columns={columns}
          data={data}
        />
      {/* </Container> */}
    </Container>
    </>
  )
}
