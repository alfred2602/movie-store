import { useContext, useEffect, useState } from "react";
import DataContext from "./DataContext";
import { Box, Divider, Text, VStack, HStack, Flex, Checkbox, Button, Image } from "@chakra-ui/react";
import movies from './movies'
import FeedbackForm from './Feedback'


function CartItems({ cartItems }) {
    const data = useContext(DataContext);
    cartItems = data.cartItems

    const [totalPrice, setTotalPrice] = useState(0);
    const [tempTPrice, setTempTPrice] = useState();

    useEffect(() => {
        /*
            {
                1: 22.99,

            }
        */
        let priceObj = {}, total = 0;
        cartItems.map((item) => {

            let movieObj = movies.find(o => o.id == item.id);
            let tempPrice = 0;
            item['Quality'].map((it) => tempPrice = tempPrice + movieObj['price'][it]);
            priceObj[item.id] = tempPrice
            total = total + tempPrice
            // console.log(priceObj)
            setTotalPrice(total)
            // setTotalPrice(total)
            setTempTPrice(priceObj)
        })

        // console.log(data)
    }, [])

    // const [totalPrice, setTotalPrice] = useState(0);
    let total = 0;
    var tempPrice = 0;

    var handleClick = (e, id, price) => {
        //reduce price 
        if (e.target.checked) {
            // console.log("hi")
            setTempTPrice((prevState) => {
                const updatedState = { ...prevState };
                updatedState[id] += price;
                // console.log(updatedState)
                return updatedState
            })
            setTotalPrice((prevState) => prevState + price);
            return
        }
        setTempTPrice((prevState) => {
            const updatedState = { ...prevState };
            updatedState[id] -= price;
            // console.log(updatedState)
            return updatedState
        })
        setTotalPrice((prevState) => prevState - price);
        // console.log(tempTPrice, e.target)
    }

    let handleRemove = (e, id) => {

        // console.log(cartItems)
        let movieObjIdx = cartItems.findIndex(o => o.id == id);
        var temp = [...cartItems];
        temp = temp.filter(function (item) {
            return item.id != id
        })

        let price = tempTPrice[id];
        setTotalPrice((prevState) => prevState - price);

        setTempTPrice((prevState) => {
            const updatedState = { ...prevState };
            delete updatedState[id];
            // console.log(updatedState)
            return updatedState
        })

        data.addToCart(temp)
    }

    return (
        <Box padding={"10"}>

            <HStack spacing={4} >
                {/* Left Column */}
                {/* <Box borderColor={"blackAlpha.100"}> */}
                <Box flex={4} borderColor={"black !important"} border={"1px"} bg="white" rounded="md" w="100%">
                    {cartItems.length > 0 ? cartItems.map((item) => {
                        let movieObj = movies.find(o => o.id == item.id);
                        tempPrice = 0;
                        item['Quality'].map((it) => tempPrice = tempPrice + movieObj['price'][it]);
                        total = total + tempPrice
                        // console.log(movieObj)

                        return (
                            <Box padding={5} minHeight={{ base: "auto", md: "100px" }} key={item.id}>
                                <Text fontSize="lg" fontWeight="bold" color="gray.700"> List of movies </Text>
                                <HStack spacing={4} align={"center"} w="100%" justify={"space-evenly"}>
                                    <VStack key={item.id} align="center">
                                        <Image id={"cart_image"} src={movieObj.image} rounded="md"
                                            alt={`Movie poster for ${movieObj.title}`} boxSize="150px" objectFit="contain" />

                                        <Text fontSize="lg" fontWeight="bold" color="gray.700">{`Movie: ${movieObj.title}`}</Text>
                                        <Text fontSize="sm" fontWeight="semibold" color="gray.500">{`Quality: ${item.Quality.join(", ")}`}</Text>
                                        <Text fontSize="sm" fontWeight="semibold" color="gray.500">{`Language: ${item.Language}`}</Text>

                                        <Divider borderWidth={"1px"} borderColor={"red"} />
                                    </VStack>
                                    <VStack key={item.id + 'a'} align="right">
                                        <Box id={"cart_quality_checkboxes"}>
                                            {item.Quality.map((quality, index) => {
                                                // console.log(quality);

                                                let price = {
                                                    "HD (2160p)": 12.99,
                                                    "HD (1080p)": 9.99,
                                                    "SD (720p)": 8.99,
                                                    "SD (480p)": 7.99,
                                                    "SD (240p)": 5.99,
                                                };

                                                return (
                                                    <Flex key={index} align="center" >
                                                        <Checkbox defaultChecked size="md" colorScheme="green" mr={2} onChange={(e) => handleClick(e, item.id, price[quality])} />
                                                        <Text fontSize="md" fontWeight="light">{quality}</Text>
                                                    </Flex>
                                                )
                                            })}
                                        </Box>
                                        {/*
                                        add check box with texts as quality array. Example - ["HD (2160p)", "HD (1080p)"]
                                      */}
                                        <Button id={"remove_item"} size={"sm"} backgroundColor={"green"} color={"white"} onClick={(e) => handleRemove(e, item.id)}>
                                            Remove
                                        </Button>
                                        <Divider borderWidth={"1px"} borderColor={"red"} />
                                    </VStack>

                                </HStack>
                            </Box>
                        )
                    }) : "Add movies to cart from the home page"}
                </Box>
                {/* </Box> */}
                {/* Right Column */}
                <Box flex={2} borderColor={"black !important"} border={"1px"} bg="white" rounded="md">
                    <VStack align="right">
                        {cartItems.map((item) => {
                            let movieObj = movies.find(o => o.id == item.id);
                            return (
                                <Text key={item.id} fontSize="md">{`${movieObj.title} - $${tempTPrice ? tempTPrice[item.id] : 0}`}</Text>
                            )
                        })}
                        <Divider />
                        <Text fontSize="lg" fontWeight="bold">{`Total: $${totalPrice.toFixed(2)}`}</Text>
                    </VStack>
                </Box>


            </HStack >
            <Box padding={"5"} align={"center"}>
                <FeedbackForm />
            </Box>
        </Box >
    );
}

function Cart() {
    const data = useContext(DataContext);
    useEffect(() => {
        // console.log(data) 
    }, [])

    return (<>
        hei</>)
}

export default CartItems;