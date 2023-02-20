import {
    Box,
    Heading,
    FormControl,
    FormLabel,
    FormErrorMessage,
    Input,
    InputGroup,
    Button,
    InputRightElement
} from "@chakra-ui/react"
import { useState } from "react"
import React from "react"
export default function Login(props) {
    const [show, setShow] = useState(false)
    const handleClick = () => setShow(!show)
    const handleLogin = props.handleLogin
    const email = props.email
    const setEmail = props.setEmail
    const pass = props.pass
    const setPass = props.setPass
    const isEmailError = email === ''
    const isPassError = pass === ''
    return (
        <>
            <Heading textTransform={"uppercase"} letterSpacing='8px'>Cashier.id</Heading>
            <Box>
                <FormControl isInvalid={isEmailError}>
                    <FormLabel>Email</FormLabel>
                    <Input type='email' value={email} onChange={e => setEmail(e.target.value)} placeholder='Enter email' />
                    {isEmailError ? (
                        <FormErrorMessage>Email is required.</FormErrorMessage>
                    ) : <></>}
                </FormControl>
                <FormControl isInvalid={isPassError}>
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
                    <Button colorScheme='teal' variant='outline' size='md'
                        height='48px'
                        width='200px' onClick={handleLogin}>
                        Login
                    </Button>
                </FormControl>
            </Box>
     
        </>
     
    )
}