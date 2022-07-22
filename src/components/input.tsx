import React from 'react'
import { Box, Text, Input as ChakraInput, InputProps as ChakraInputProps } from '@chakra-ui/react'

interface InputProps {
  label: string
  chakraInputProps: ChakraInputProps
}

const Input: React.FC<InputProps> = ({ label, chakraInputProps }) => {
  return (
    <Box>
      <Text textTransform="uppercase" mb={1} fontSize="xs">
        {label}
      </Text>
      <ChakraInput {...chakraInputProps} />
    </Box>
  )
}

export default Input
