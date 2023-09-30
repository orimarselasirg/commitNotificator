import { Container, Tabs, TabList, TabPanels, Tab, TabPanel, useToast } from '@chakra-ui/react'
import { Header } from '../../components/Header/Header'
import { TableComponent } from '../../components/Table/Table'
import { apiGit } from '../../api/gitApi'
import { useEffect, useState } from 'react'
import { Loading } from '../../components/Loading/Loading'

const columns = [
  'Author', 'Email', 'Commit Message', "Commit Link", "Created"
]
export const Home = () => {
  const toast = useToast()
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [isError, setIsError] = useState<boolean>(false)
  const [repoData, setRepoData] = useState<any>([])
  const [urlCommits, setCommitUrl] = useState<string>()

  const getRepoGitData = async (repoName: string) =>{
    setIsLoading(true)
    try {
      const {data} = await apiGit.get(`?repoName=${repoName}`)
      const newData = data?.data?.map((e) => ({
        name: e.author.login,
        avatar: e.author.avatar_url,
        mail: e.commit.author?.email,
        commit: e.commit.message,
        url: e.html_url,
        created: e.commit.author.date,
      }));
      setRepoData([...newData]);
      setCommitUrl(data.url)
      setIsError(false)
      // throw Error
    } catch (error) {
      setIsError(true)
      toast({
        title: 'Oops! Something went wrong',
        description: "Please call the administrator",
        status: 'error',
        duration: 4000,
        isClosable: true,
      })
    } finally {
      setIsLoading(false)
    }
  }
  
  useEffect(()=> {
    getRepoGitData('commitNotificator')
  },[])

  return (
      <Container maxW='100vw'>
        <Header/>
          
        <Tabs variant='unstyled' colorScheme='gray' isFitted >
          <TabList>
            <Tab onClick={()=>getRepoGitData('commitNotificator')} _selected={{ color: 'white', bg: 'gray.600' }}>Frontend Commits History</Tab>
            <Tab onClick={()=>getRepoGitData('tweetApp')} _selected={{ color: 'white', bg: 'gray.600' }}>Backend Commits History</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              {
                isLoading 
                ?
                <Loading/> 
                :
                <TableComponent
                  columns={columns}
                  data={repoData}
                  tableCaption={ isError ? "We can't show you commit's history in this moment, please try again!":`Commits ${urlCommits?.split('/')[5]}'s history`}
                />
              }
            </TabPanel>
            <TabPanel>
            {
                isLoading 
                ? 
                <Loading/> 
                :
                <TableComponent
                  columns={columns}
                  data={repoData}
                  tableCaption={isError ? "We can't show you commit's history in this moment, please try again!" :`Commits ${urlCommits?.split('/')[5]}'s history`}
                />
              }
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Container>
  )
}
