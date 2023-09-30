import { Spinner, Stack  } from '@chakra-ui/react'

export const Loading = () => {
  return (
    <Stack spacing={5} w='100%' h='70vh' alignItems='center' justifyContent='center'>
      <Spinner
        thickness='3px'
        speed='0.65s'
        emptyColor='gray.200'
        color='gray.500'
        size='xl'
      />
    </Stack> 
  )
}
