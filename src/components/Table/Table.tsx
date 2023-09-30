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
} from '@chakra-ui/react'

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
            columns.map((column) => (
              <Th>{column}</Th>
            ))
          }
        </Thead>
        <Tbody >
          {
            data.map((data) => (
              <Tr>
                <Td>{data.name}</Td>
                <Td>{data.email}</Td>
                <Td>{data.commit}</Td>
                <Td>{data.url}</Td>
                <Td>{data.date}</Td>
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
