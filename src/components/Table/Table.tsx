import {
  Table,
  Thead,
  Tbody,
  // Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Link 
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { formatterDate } from '../../helpers/dateFormatter'

interface Props {
  columns: string[]
  data: any[]
  tableCaption: string
}

export const TableComponent = ({columns, data, tableCaption}: Props) => {

  return (
    <TableContainer>
      <Table w='100%' variant='striped' colorScheme='purple' size='xl'>
        <TableCaption sx={{fontWeight: 500, marginTop: 20}}>{tableCaption}</TableCaption>
        <Thead bg='#C5C5C5'>
          {
            columns.map((column, index) => (
              <Th key={index}>{column}</Th>
            ))
          }
        </Thead>
        <Tbody >
          {
            data.map((data, index) => (
              <Tr key={index} bg={index % 2 === 0 ? '#E1E0E2' : ''} sx={{fontSize: 12}}>
                <Td>{data.name}</Td>
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
          }
        </Tbody>
      </Table>
    </TableContainer>
  )
}
