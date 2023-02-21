import { Box, Flex, Heading, Spacer, Button, ButtonGroup, Input } from "@chakra-ui/react";
import { ColorModeSwitcher } from "../ColorModeSwitcher";
import { Link } from "react-router-dom";
import { SearchIcon } from '@chakra-ui/icons'

export default function Header(props) {
  const setSearch = props.setSearch
  const handleSearch = props.handleSearch
  return (

    <Box p='3' pos='sticky' top='0' zIndex='100' backgroundColor="gray.700" >
      <Flex minWidth='max-content' alignItems='center' gap='2'>
        <Box >
          <Heading textTransform={"uppercase"} letterSpacing='8px' color='#bfedef'>cashier.id</Heading>
        </Box>
        <Spacer />
        <Box>
          <Flex>
            <Input width='100%' type='text' backgroundColor='gray.200' onChange={e=>setSearch(e.target.value)}></Input>
            <Button onClick={handleSearch}><SearchIcon></SearchIcon></Button>
          </Flex>
        </Box>
        <Spacer />
        <ButtonGroup gap='0'>
          <Link to='/products'>
            <Button backgroundColor='transparent' color='#bfedef' _hover={{ color: 'gray.700', backgroundColor: '#bfedef' }}>Product</Button>
          </Link>
          <Link to='/'>
            <Button backgroundColor='transparent' color='#bfedef' _hover={{ color: 'gray.700', backgroundColor: '#bfedef' }}>Log out</Button>
          </Link>
          <ColorModeSwitcher />
        </ButtonGroup>
      </Flex>

    </Box>

  )
}