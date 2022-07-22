import { FC, useState, ChangeEvent } from 'react'
import { Flex, Box, Heading, SimpleGrid, Button } from '@chakra-ui/react'

import FormHeader from '@components/form-header'
import Input from '@components/input'
import CardPreview from '@components/card-preview'

const Home: FC = () => {
  const [formValue, setFormValue] = useState({
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
    houseNumber: '',
    street: '',
    suburb: '',
    state: '',
    postcode: '',
    country: '',
  })

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name as keyof typeof formValue
    const value = e.target.value
    console.log(name)
    if (name) {
      setFormValue({
        ...formValue,
        [name]: value,
      })
    }
  }

  return (
    <Flex alignItems="center" justifyContent="center" h="100vh">
      <Flex border="1px solid black">
        <Box p={6}>
          <Heading mb={6}>hCard Builder</Heading>
          <FormHeader title="Personal details" />
          <SimpleGrid columns={2} gap={4} py={4}>
            <Input
              label="Given name"
              chakraInputProps={{ type: 'text', name: 'firstname', value: formValue.firstname, onChange }}
            />
            <Input
              label="Surname"
              chakraInputProps={{ type: 'text', name: 'lastname', value: formValue.lastname, onChange }}
            />
            <Input
              label="Email"
              chakraInputProps={{ type: 'email', name: 'email', value: formValue.email, onChange }}
            />
            <Input label="Phone" chakraInputProps={{ type: 'text', name: 'phone', value: formValue.phone, onChange }} />
          </SimpleGrid>
          <FormHeader title="Address" />
          <SimpleGrid columns={2} gap={4} py={4}>
            <Input
              label="House name or #"
              chakraInputProps={{ type: 'text', name: 'houseNumber', value: formValue.houseNumber, onChange }}
            />
            <Input
              label="Street"
              chakraInputProps={{ type: 'text', name: 'street', value: formValue.street, onChange }}
            />
            <Input
              label="Suburb"
              chakraInputProps={{ type: 'text', name: 'suburb', value: formValue.suburb, onChange }}
            />
            <Input label="State" chakraInputProps={{ type: 'text', name: 'state', value: formValue.state, onChange }} />
            <Input
              label="Postcode"
              chakraInputProps={{ type: 'text', name: 'postcode', value: formValue.postcode, onChange }}
            />
            <Input
              label="Country"
              chakraInputProps={{ type: 'text', name: 'country', value: formValue.country, onChange }}
            />
          </SimpleGrid>
          <SimpleGrid columns={2} gap={4} py={4}>
            <Button colorScheme="gray">Upload Avatar</Button>
            <Button colorScheme="blue">Create hCard</Button>
          </SimpleGrid>
        </Box>
        <Flex bg="gray.100" alignItems="center" justifyContent="center" px={16}>
          <CardPreview values={formValue} />
        </Flex>
      </Flex>
    </Flex>
  )
}

export default Home
