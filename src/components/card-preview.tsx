import React from 'react'
import { Box, Text, Divider, SimpleGrid, VStack } from '@chakra-ui/react'

import ValuePreview from './value-preview'

interface CardPreviewProps {
  values: {
    firstname: string
    lastname: string
    email: string
    phone: string
    houseNumber: string
    street: string
    suburb: string
    state: string
    postcode: string
    country: string
  }
}

const CardPreview: React.FC<CardPreviewProps> = ({ values }) => {
  return (
    <Box minW="300px" maxW="400px">
      <Box bg="blue.800" p={6} pos="relative">
        <Text color="white" fontSize="lg">
          {values.firstname} {values.lastname}
        </Text>
        <Box bg="black" width={70} height={70} pos="absolute" right={4} bottom={-2} />
      </Box>
      <VStack p={6} bg="white" gap={1} w="full">
        <ValuePreview label="Email:" value={values.email} />
        <ValuePreview label="Phone:" value={values.phone} />
        <ValuePreview label="Address:" value={`${values.houseNumber} ${values.street}`} />
        <Text textTransform="uppercase" mb={1} fontSize="xs" textAlign="right">
          {values.suburb}, {values.state}
        </Text>
        <Divider />
        <SimpleGrid columns={2} w="full">
          <ValuePreview label="Postcode:" value={values.postcode} />
          <ValuePreview label="Country:" value={values.country} />
        </SimpleGrid>
      </VStack>
    </Box>
  )
}

export default CardPreview
