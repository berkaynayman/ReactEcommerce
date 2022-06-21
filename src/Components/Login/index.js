import React from 'react'

import { 
Box, Button, Checkbox, Container, Divider,
FormControl, FormLabel, Heading, HStack, Input,
Stack, Text, useBreakpointValue, useColorModeValue,
} from '@chakra-ui/react'

import { OAuthButtonGroup } from './OAuthButtonGroup'

function LoginForm() {
  return (
    <Container maxW="lg" py={{ base: '12', md: '24' }} px={{ base: '0', sm: '8' }} >
        <Stack
            textAlign={'center'}
        >
            <Stack
                spacing="1"
                py={'5'}
                borderWidth={{base: 'none', sm:'2'}}
                borderStyle={'solid'}
                borderColor={useColorModeValue('gray.200', 'gray.900')}
                borderRadius={'xl'}
                backgroundColor={'gray.100'}
            >
                <Stack
                    spacing={{ base: '2', md: '3' }}
                >
                    <Heading
                        size={useBreakpointValue({ base: 'xs', md: 'sm' })}
                    >
                        Log in to your account
                    </Heading>
                    <HStack
                        spacing="1"
                        justify="center"
                    >
                        <Text
                            color="muted"
                        >
                            Don't have an account?
                        </Text>
                        <Button
                            variant="link"
                            colorScheme="blue"
                        >
                            Sign up
                        </Button>
                    </HStack>
                </Stack>
            </Stack>
            <Box
                py={{ base: '4', sm: '8' }}
                px={{ base: '4', sm: '10' }}
                bg={useBreakpointValue({ base: 'transparent', sm: 'bg-surface' })}
                borderWidth={'1px'}
                borderStyle={'solid'}
                borderColor={useColorModeValue('gray.200', 'gray.900')}
                borderRadius={'xl'}
            >
                <Stack
                    spacing="6"
                >
                    <Stack
                        spacing="5"
                    >
                        <FormControl>
                            <FormLabel htmlFor="email">Email</FormLabel>
                            <Input id="email" type="email" placeholder='Email' />
                            <FormLabel mt={'3'} htmlFor="password">Password</FormLabel>
                            <Input id="password" type="password" placeholder='Password' />
                        </FormControl>
                    </Stack>
                    <HStack 
                        justify="space-between"
                    >
                        <Checkbox
                            defaultChecked
                        >
                            Remember me
                        </Checkbox>
                        <Button
                            variant="link"
                            colorScheme="blue"
                            size="sm"
                        >
                            Forgot password?
                        </Button>
                    </HStack>
                    <Stack
                        spacing="6"
                    >
                        <Button
                            bgColor={'pink.400'}
                            color={'white'}
                            _hover={{
                                bg: 'pink.500',
                            }}
                        >
                            Sign in
                        </Button>
                        <HStack>
                            <Divider />
                            <Text
                                fontSize="sm"
                                whiteSpace="nowrap"
                                color="muted"
                            >
                                or continue with
                            </Text>
                            <Divider />
                        </HStack>
                        <OAuthButtonGroup />
                    </Stack>
                </Stack>
            </Box>
        </Stack>
    </Container>
  )
}

export default LoginForm