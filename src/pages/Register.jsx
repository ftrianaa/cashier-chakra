import {
    Box,
    Heading,
    FormControl,
    FormLabel,
    FormErrorMessage,
    Input,
    InputGroup,
    Button,
    InputRightElement,
    VStack,
    Text,
    Flex,
} from "@chakra-ui/react"
import { useState } from "react"
import React from "react"
import { Link } from "react-router-dom"
export default function Register(props) {
    const [show, setShow] = useState(false)
    const handleClick = () => setShow(!show)
    const handleRegister = props.handleRegister
    const email = props.email
    const setEmail = props.setEmail
    const pass = props.pass
    const setPass = props.setPass
    const named = props.named
    const setNamed = props.setNamed
    const dated = props.dated
    const setDated = props.setDated
    const isEmailError = email === ''
    const isPassError = pass === ''
    const isNameError = named === ''
    const isDateError = dated === null
    

    return (
        <>
            <VStack spacing={8}>
                <Heading textTransform={"uppercase"} letterSpacing='8px' pt='5%'>Cashier.id</Heading>
                <Box>
                    <FormControl isInvalid={isNameError} isRequired>
                        <FormLabel>Full Name</FormLabel>
                        <Input type='text' value={named} onChange={e=>setNamed(e.target.value)}/>
                        {isNameError ? (
                            <FormErrorMessage>Fullname is required.</FormErrorMessage>
                        ) : <></>}
                    </FormControl>
                    <FormControl isInvalid={isEmailError} isRequired>
                        <FormLabel>Email</FormLabel>
                        <Input type='email' value={email} onChange={e => setEmail(e.target.value)} placeholder='Enter email' />
                        {isEmailError ? (
                            <FormErrorMessage>Email is required.</FormErrorMessage>
                        ) : <></>}
                    </FormControl>
                    <FormControl isInvalid={isDateError} isRequired>
                        <FormLabel>Birthdate</FormLabel>
                        <Input type='date' value={dated} onChange={e => setDated(e.target.value)} />
                        {isDateError ? (
                            <FormErrorMessage>Birthdate is required.</FormErrorMessage>
                        ) : <></>}
                    </FormControl>
                    <FormControl isInvalid={isPassError} isRequired>
                        <FormLabel>Password</FormLabel>
                        <InputGroup size='md' >
                            <Input
                                pr='4.5rem'
                                type={show ? 'text' : 'password'}
                                placeholder='Enter password'
                                onChange={e => setPass(e.target.value)}
                                value={pass}
                            />
                            <InputRightElement width='4.5rem'>
                                <Button h='1.75rem' size='sm' onClick={handleClick}>
                                    {show ? 'Hide' : 'Show'}
                                </Button>
                            </InputRightElement>
                        </InputGroup>
                        {isPassError ? (
                            <FormErrorMessage>Password is required.</FormErrorMessage>
                        ) : <></>}
                    </FormControl>

                    <FormControl pt='20px'>
                        <Button colorScheme='teal' variant='outline' height='35px' width='350px' onClick={handleRegister}>
                            Register
                        </Button>
                    </FormControl>
                    <Box >
                        <Flex gap='2' alignItems='center' justifyContent='center'>
                            <Text textTransform='uppercase' fontSize='14px' pt='4' letterSpacing='2px'>Have an account?</Text>
                            <Link to='/'>
                                <Text textTransform='uppercase' fontSize='14px' pt='4' letterSpacing='2px' fontWeight='bold' _hover={{ color: 'teal', cursor: 'pointer', textDecoration: 'underline' }}>Login here</Text>
                            </Link>
                        </Flex>
                    </Box>
                </Box>
            </VStack>
        </>
    )
}