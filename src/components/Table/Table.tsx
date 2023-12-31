import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Link,
  useDisclosure
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { formatterDate } from '../../helpers/dateFormatter'
import { ModalComponent } from '../Modal/Modal'
import { useState } from 'react';
import { CommitsReponse } from '../../interfaces/gitInterface';

interface Props {
  columns: string[]
  data: CommitsReponse[]
  tableCaption: string
}

type AuthoData = {
  name: string
  email: string
  avatar: string
}

export const TableComponent = ({columns, data, tableCaption}: Props) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [authorData, setAuthorData] = useState<AuthoData>({
    name: '',
    email: '',
    avatar: ''
  })

  const onOpenModal = (data:AuthoData) => {
    setAuthorData(data)
    onOpen()
  }
  return (
    <TableContainer>
      <Table variant='striped' colorScheme='gray' size='md'>
        <TableCaption sx={{fontWeight: 500, marginTop: 20}}>{tableCaption}</TableCaption>
        <Thead bg='gray.500'>
          <Tr>
            {
              columns.map((column, index) => (
                <Th key={index} color='white'>{column}</Th>
              ))
            }
          </Tr>
        </Thead>
        <Tbody >
          {
            data.length > 0 
            ?
            data.map((data, index) => (
              <Tr key={index} sx={{fontSize: 13}}>
                <Td onClick={()=>onOpenModal({name: data.name, email: data.mail, avatar: data.avatar})} sx={{cursor: 'pointer', textDecoration: 'underline'}}>{data.name}</Td>
                <Td>{data.mail}</Td>
                <Td>{data.commit}</Td>
                <Td>
                  <Link href={data.url} isExternal>
                    {data.url.length > 50 ? data.url.slice(0, 50)+'...': data.url} <ExternalLinkIcon mx='2px'/>
                  </Link>
                </Td>
                <Td>{formatterDate(data.created)}</Td>
              </Tr>
            ))
            : []
          }
        </Tbody>
      </Table>
        <ModalComponent isOpen={isOpen} onClose={onClose} data={authorData}/>
    </TableContainer>
  )
}
