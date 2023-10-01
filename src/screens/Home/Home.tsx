import { Tabs, TabList, TabPanels, Tab, TabPanel, useToast, Box, Select } from '@chakra-ui/react';
import { Header } from '../../components/Header/Header'
import { TableComponent } from '../../components/Table/Table'
import { apiGit } from '../../api/gitApi'
import { useEffect, useState } from 'react'
import { Loading } from '../../components/Loading/Loading'
import { APIReponse, RepoList } from '../../interfaces/gitInterface';

const columns: string[] = [
  'Author', 'Email', 'Commit Message', "Commit Link", "Created"
]

export const Home = () => {
  const toast = useToast()
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [optionSelected, setOptionSelected] = useState<string>(import.meta.env.VITE_FRONTEND_DEFAULT_REPO)
  const [optionList, setOptionList] = useState<RepoList[]>([])
  const [isError, setIsError] = useState<boolean>(false)
  const [repoData, setRepoData] = useState<APIReponse>({
    data: [],
    principal_url: '',
    sucess: false
  })

  const getRepoGitData = async (repoName: string) =>{
    setIsLoading(true)
    try {
      const {data} = await apiGit.get<APIReponse>(`/repo?name=${repoName}`)
      setRepoData(data);
      setIsError(!data.sucess)
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

  const getAllRepoList = async () => {
    setIsLoading(true)
    try {
      const {data} = await apiGit.get<RepoList[]>('repo-list')
      const repoFiltered = data.filter((e:RepoList) => e.owner === import.meta.env.VITE_REPO_OWNER)
      setOptionList(repoFiltered)
      setIsError(false)
    } catch (error) {
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

  useEffect(() => {
    getAllRepoList()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  
  useEffect(()=> {
    getRepoGitData(optionSelected)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[optionSelected])

  return (
      <Box maxW='100vw'>
        <Header/>
        <Box w='15%' position='absolute' top='65px' zIndex={100} ml='8px'>
            <Select placeholder='you can select another repo' variant='outline' color='gray.500' size='xs' onChange={(e)=> setOptionSelected(e.target.value)}>
              {
                optionList?.map((e:RepoList) => (
                  <option key={e.id} value={e.name}>{e.name}</option>
                ))
              }
            </Select>
        </Box>
        <Tabs variant='unstyled' colorScheme='gray' isFitted >
          <TabList>
            <Tab onClick={()=>getRepoGitData(import.meta.env.VITE_FRONTEND_DEFAULT_REPO)} _selected={{ color: 'white', bg: 'gray.600' }}>Frontend Commits History</Tab>
            <Tab onClick={()=>getRepoGitData(import.meta.env.VITE_BACKEND_DEFAULT_REPO)} _selected={{ color: 'white', bg: 'gray.600' }}>Backend Commits History</Tab>
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
                  data={repoData.data}
                  tableCaption={ isError ? "We can't show you commit's history in this moment, please try again!":`Commits ${repoData?.principal_url?.split('/')[5]}'s history`}
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
                  data={repoData.data}
                  tableCaption={isError ? "We can't show you commit's history in this moment, please try again!" :`Commits ${repoData?.principal_url?.split('/')[5]}'s history`}
                />
              }
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
  )
}
