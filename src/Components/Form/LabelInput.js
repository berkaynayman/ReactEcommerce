import { FormLabel, Input } from '@chakra-ui/react'

function LabelInput({Id, Type, Placeholder}) {
  return (
    <>
        <FormLabel mt={'3'} mb={'0'} htmlFor={Id}>{Placeholder}</FormLabel>
        <Input id={Id} type={Type} placeholder={Placeholder} />
    </>
  )
}

export default LabelInput