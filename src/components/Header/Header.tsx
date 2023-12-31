import { Box, Avatar, Heading, Stack, Badge} from '@chakra-ui/react'

export const Header = () => {
  return (
    <Box bg='#171b22' color='white' display='flex' alignItems='center' p={2}>
      <Stack direction='row' justifyContent='space-between' w='100%' alignItems='center'>
        <Heading  fontSize='18px' as='h1'>
          Commits Notificator App
        </Heading>
        <Stack direction='column' h='80px' justifyContent='flex-end' alignItems='center'>
          <Avatar name='Ramiro Grisales' src='https://lh3.googleusercontent.com/a/ACg8ocLpqxKA3uS9glAM3pYvvCD6m9OR1Aj4uRVUkeLQQb7run8=s288-c-no' borderRadius='50%' w={50} h={50}/>
          <Badge variant='outline' colorScheme='green'>
            Design by Ramiro
          </Badge>
        </Stack>
      </Stack>
    </Box >
  )
}
