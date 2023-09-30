import { Tabs, TabList, TabPanels, Tab, TabPanel, useToast, Box } from '@chakra-ui/react';
import { Header } from '../../components/Header/Header'
import { TableComponent } from '../../components/Table/Table'
import { apiGit } from '../../api/gitApi'
import { useEffect, useState } from 'react'
import { Loading } from '../../components/Loading/Loading'
import { GitResponse, data } from '../../interfaces/gitInterface';

const columns: string[] = [
  'Author', 'Email', 'Commit Message', "Commit Link", "Created"
]

type ResponseTableData = {
  name: string
  avatar: string
  mail: string
  commit: string
  url: string
  created: string 
}
export const Home = () => {
  const toast = useToast()
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [isError, setIsError] = useState<boolean>(false)
  const [repoData, setRepoData] = useState<ResponseTableData[]>([])
  const [urlCommits, setCommitUrl] = useState<string>()

  const getRepoGitData = async (repoName: string) =>{
    setIsLoading(true)
    try {
      const {data} = await apiGit.get<GitResponse>(`?repoName=${repoName}`)
      const newData: ResponseTableData[] = data?.data?.map((e: data) => ({
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
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  return (
      <Box maxW='100vw'>
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
      </Box>
  )
}
