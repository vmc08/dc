import React from 'react'
import { Box, SimpleGrid, Text, Divider } from '@chakra-ui/react'

interface ValuePreviewProps {
  label: string
  value: string
}

const ValuePreview: React.FC<ValuePreviewProps> = ({ label, value }) => {
  return (
    <Box w="full">
      <SimpleGrid columns={2}>
        <Text textTransform="uppercase" mb={1} fontSize="xs" color="gray.400">
          {label}
        </Text>
        <Text textTransform="uppercase" mb={1} fontSize="xs">
          {value}
        </Text>
      </SimpleGrid>
      <Divider />
    </Box>
  )
}

export default ValuePreview
