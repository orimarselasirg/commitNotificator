import { Container, Box } from '@chakra-ui/react'
import { Header } from '../../components/Header/Header'
import { TableComponent } from '../../components/Table/Table'
import { apiGit } from '../../api/gitApi'
import { useEffect, useState } from 'react'

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
  const [repoData, setRepoData] = useState<any>([])
  const [urlCommits, setCommitUrl] = useState<string>()
  const getRepoGitData = async () =>{
    try {
      const {data} = await apiGit.get('')
      console.log(data);
      const newData = data?.data?.map((e) => ({
        name: e.author.login,
        avatar: e.author.avatar_url,
        mail: e.commit.author?.email,
        commit: e.commit.message,
        url: e.html_url,
        created: e.commit.author.date,
      }));
  
      setRepoData((prevData) => [...newData]);
      // console.log(data.data);
      // return data.data
      setCommitUrl(data.url)
    } catch (error) {
      console.log(error);
    }
  }
  
  useEffect(()=> {
    getRepoGitData()
  },[])

  return (
    <>
    <Container w='100vw' h='100vh' overflowX='hidden'>
      <Header/>
      {/* <Container w='100%'> */}
        <TableComponent
          columns={columns}
          data={repoData}
          tableCaption={`Commits ${urlCommits?.split('/')[5]}'s history`}
        />
      {/* </Container> */}
    </Container>
    </>
  )
}
