import React from 'react'
import { Text, Divider } from '@chakra-ui/react'

interface FormHeaderProps {
  title: string
}

const FormHeader: React.FC<FormHeaderProps> = ({ title }) => {
  return (
    <>
      <Text textTransform="uppercase" mb={1} fontSize="xs" color="gray.400">
        {title}
      </Text>
      <Divider />
    </>
  )
}

export default FormHeader
