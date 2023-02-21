import { Box, Flex, Heading, Spacer, Button, ButtonGroup } from "@chakra-ui/react";
import { ColorModeSwitcher } from "../ColorModeSwitcher";
import { Link } from "react-router-dom";
export default function Header() {
  return (

    <Box p='3' pos='sticky' top='0' zIndex='100' backgroundColor="gray.700" >
      <Flex minWidth='max-content' alignItems='center' gap='2'>
        <Box >
          <Heading textTransform={"uppercase"} letterSpacing='8px' color='#bfedef'>cashier.id</Heading>
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