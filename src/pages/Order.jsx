import { Card, Heading, TableContainer, Table, Th, Thead, Tr } from "@chakra-ui/react";

export default function Order(){
    return(
        <Card position='sticky' top='5.8em' zIndex='100' height='500px' width='545px'>
            <Heading textTransform="uppercase" letterSpacing='8px' color='#bfedef' textShadow='1px 1px gray'>List Order</Heading>
            <Card>
                <TableContainer>
                    <Table>
                        <Thead>
                            <Tr>
                                <Th>Product</Th>
                                <Th>Price</Th>
                            </Tr>
                        </Thead>
                    </Table>
                </TableContainer>
            </Card>
        </Card>
    )
}