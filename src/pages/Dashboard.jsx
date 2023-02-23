import {
    Flex, Image, Text, Tag, Stack, Card, CardBody, CardFooter, Heading, Divider, Button, ButtonGroup, useDisclosure, Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Grid,
} from "@chakra-ui/react"
import { useState, useEffect } from "react"
import Api from "../config/Config"
import { StarIcon } from '@chakra-ui/icons'
import Header from "../components/Header"
import Order from "./Order"
export default function Dashboard() {
    const [products, setProducts] = useState([])
    const [description, setDescription] = useState([])
    const [search, setSearch] = useState([])
    const getProduct = async () => {
        try {
            const res = await Api.get('/products.json?rating_greater_than=4.95')
            setProducts(res.data)
        } catch (error) {
            throw (error)
        }
    }
    const { onOpen, onClose, isOpen } = useDisclosure()
    const handlePreview = (data, index) => {
        const newData = data
        newData.index = index
        setDescription(newData)
    }
    // console.log(products);
    const handleSearch = async () => {
        try {
            const res = await Api.get(`products.json?brand=${search}`)
            setProducts(res.data)
        } catch (error) {
            throw (error)
        }
    }
    const handleOrder = () => {

    }
    // console.log(search)
    useEffect(() => {
        getProduct()
    }, [])
    return (
        <>
            <Header
                setSearch={setSearch}
                handleSearch={handleSearch}
            />
            <>
                <Grid templateColumns='repeat(2, 1fr)'>
                    <Flex flexWrap='wrap' alignItems='center' justifyContent='center' mt='10'>
                        {products.map((data, index) => (
                            <Card maxW='235px' margin='10px' key={index}>
                                <CardBody >
                                    <Flex alignItems='center' justifyContent='center' display='flex'>
                                        <Image
                                            src={data.api_featured_image}
                                            alt={data.name}
                                            borderRadius='lg'
                                        />
                                    </Flex>
                                    <Stack mt='6' spacing='3'>
                                        <Heading size='md' textOverflow='ellipsis' whiteSpace='nowrap'
                                            overflow='hidden'>{data.name}</Heading>
                                        <Text textOverflow='ellipsis' whiteSpace='nowrap'
                                            overflow='hidden'>
                                            {data.description}
                                        </Text>
                                        <Text><StarIcon color='gold' />{data.rating}</Text>
                                        <Text color='blue.600' fontSize='2xl' >
                                            ${data.price}
                                        </Text>
                                    </Stack>
                                </CardBody>
                                <Divider />
                                <CardFooter>
                                    <ButtonGroup spacing='2'>
                                        <Button variant='solid' colorScheme='blue' onClick={()=>{handleOrder(data)}}>
                                            Buy now
                                        </Button>
                                        <Button variant='ghost' colorScheme='blue' onClick={() => { handlePreview(data, index); onOpen(); }}>
                                            Preview
                                        </Button>
                                    </ButtonGroup>
                                </CardFooter>
                            </Card>
                        ))}
                    </Flex>
                    <Order />
                </Grid>
                <Modal onClose={onClose} isOpen={isOpen} isCentered>
                    <ModalOverlay />
                    <ModalContent>
                        <ModalHeader>Description</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody>
                            <Flex alignItems='center' justifyContent='center' display='flex'>
                                <Image src={description.api_featured_image} />
                            </Flex>
                            <Heading> {description.name}</Heading>  <Tag>{description.product_type}</Tag>
                            <Text align='justify'>{description.description}</Text>
                        </ModalBody>
                        <ModalFooter>
                            <Button onClick={onClose}>Close</Button>
                        </ModalFooter>
                    </ModalContent>
                </Modal>
            </>
        </>
    )
}