import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Avatar,
  Heading,
  Text,
  Stack
} from '@chakra-ui/react'

type AuthoData = {
  name: string
  email: string
  avatar: string
}

interface Props {
  isOpen: boolean
  onClose: ()=> void
  data: AuthoData
}

export const ModalComponent = ({isOpen, onClose, data}: Props) => {
  return (
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Author Commit's information</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Stack w='100%' mb='5' alignItems='center'>
              <Avatar src={data.avatar} name={data.name} size='2xl' alignSelf='center'/>
              <Heading as='h4'>{data.name}</Heading>
              <Text>{data.email}</Text>
            </Stack>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
  )
}