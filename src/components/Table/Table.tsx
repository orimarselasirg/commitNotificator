import {
  Table,
  Thead,
  Tbody,
  // Tfoot,
  Tr,
  Th,
  Td,
  // TableCaption,
  TableContainer,
  Link 
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { formatFecha } from '../../helpers/dateFormatter'

interface Props {
  columns: string[]
  data: any[]
}

export const TableComponent = ({columns, data}: Props) => {

  return (
    <TableContainer>
      <Table w='100%' variant='simple' colorScheme='teal'>
        {/* <TableCaption>Imperial to metric conversion factors</TableCaption> */}
        <Thead bg='red'>
          {
            columns.map((column, index) => (
              <Th key={index}>{column}</Th>
            ))
          }
        </Thead>
        <Tbody >
          {
            data.map((data, index) => (
              <Tr key={index} >
                <Td>{data.name}</Td>
                <Td>{data.mail}</Td>
                <Td>{data.commit}</Td>
                <Td>
                  <Link href={data.url} isExternal>
                    {data.url.length > 50 ? data.url.slice(0, 50)+'...': data.url} <ExternalLinkIcon mx='2px'/>
                  </Link>
                </Td>
                <Td>{formatFecha(data.created)}</Td>
              </Tr>
            ))
          }
        </Tbody>
        {/* <Tfoot>
          <Tr>
            <Th>To convert</Th>
            <Th>into</Th>
            <Th isNumeric>multiply by</Th>
            <Th isNumeric>multiply by</Th>
            <Th isNumeric>multiply by</Th>
          </Tr>
        </Tfoot> */}
      </Table>
    </TableContainer>
  )
}
