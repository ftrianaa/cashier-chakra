import { Card, Heading, TableContainer, Table, Th, Thead, Tr, Tbody, Td, Text} from "@chakra-ui/react";
import { useContext } from "react";
import { CashierContext } from "../store/AppContext";

export default function Order(){
    const {quantity} = useContext(CashierContext)
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
                        <Tbody>
                            <Tr>
                                <Td>
                                    <Text>You added {quantity} products</Text>
                                </Td>
                            </Tr>
                        </Tbody>
                    </Table>
                </TableContainer>
            </Card>
        </Card>
    )
}