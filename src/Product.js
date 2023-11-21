/*
display something if the cart is empty
// add a proceed to cart  button and change user in cart component
// add user in feedback
// add movie name in cart component
*/

import React from 'react';
import { SimpleGrid, useToast, Box, Center, Button, Icon, CheckboxGroup, Checkbox, Stack, Text, RadioGroup, Radio, Input, InputGroup } from '@chakra-ui/react';
import { AddIcon } from "@chakra-ui/icons";
import ScrollableBox from './ScrollableBox';
import { useContext } from "react";
import DataContext from "./DataContext";
import { useState } from "react"
import { Link as ChakraLink } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

// import {

//     AspectRatioBox,
// } from '@chakra-ui/core';

const MovieCard = ({ movie, selectedQuality, setSelectedQuality, selectedLanguages, setSelectedLanguages }) => {
    const toast = useToast();

    // when the "Add to Cart" button is clicked
    const handleAddToCart = () => {
        // ...

        // show toast
        toast({
            title: "Added to cart",
            status: "success",
            duration: 2000,
            isClosable: true,
        });

        // ...
    };
    const data = useContext(DataContext);
    // const [selectedQuality, setSelectedQuality] = useState([]);
    const [comment, setComment] = useState('')
    const [comments, setComments] = useState({});
    // const [selectedLanguages, setSelectedLanguages] = useState([]);

    const handleQualityChange = (values, id) => {

        let movieObjIdx = selectedQuality.findIndex(o => o.id == id);
        let movieObj;
        if (movieObjIdx === -1) {
            movieObj = {};
            movieObj['id'] = id;
            movieObj['Quality'] = values;

            let temp = selectedQuality;

            temp.push(movieObj);
            setSelectedQuality(temp);

        } else {
            let temp = [...selectedQuality];
            temp[movieObjIdx]['Quality'] = values;
            setSelectedQuality(temp);


        }
    };

    const handleLanguageChange = (values, id) => {

        let movieObjIdx = selectedQuality.findIndex(o => o.id == id);
        let movieObj;
        if (movieObjIdx === -1) {
            movieObj = {};
            movieObj['id'] = id;
            movieObj['Language'] = values;
            let temp = selectedQuality;

            temp.push(movieObj);

            setSelectedQuality(temp);

        } else {
            let temp = [...selectedQuality];
            temp[movieObjIdx]['Language'] = values;
            setSelectedQuality(temp);


        }
        setSelectedLanguages(values);
    };

    let handleComment = (e, id) => {
        if (comments[id] == undefined) {
            let temp = { ...comments };
            temp[id] = [comment];
            setComments(temp);
        } else {
            let temp = { ...comments };
            temp[id].push(comment);
            setComments(temp);
        }

    }



    // const data = useContext(DataContext);
    return (
        <Box borderWidth='0.5px' borderRadius='lg' overflow='hidden' boxShadow='md' borderColor='brand.300' >
            <Center p="2">
                <Box h={"300"} width={"500"} as='img' src={movie.image} borderRadius='lg' alt={movie.title} id="movie_image" />
            </Center>

            <Box p='4'>
                <Box d='flex' alignItems='baseline'>
                    <Box fontWeight='semibold' as='h4' lineHeight='tight' isTruncated id="movie_title">
                        {movie.title}
                    </Box>
                    <Box ml='2' color='gray.600' fontSize='sm' id="movie_year">
                        ({movie.year})
                    </Box>
                </Box>

                <Box>
                    <Box as='span' fontSize='sm' color='gray.600' id="movie_genre">
                        {movie.genre}
                    </Box>
                </Box>

                <Box mt='1' fontWeight='semibold' as='h4' lineHeight='tight' id="movie_rating">
                    {movie.rating}
                </Box>

                <Box>
                    <Box as='span' fontSize='sm' color='gray.600' id="movie_director">
                        Director: {movie.director}
                    </Box>
                </Box>

                <Box>
                    <Box as='span' fontSize='sm' color='gray.600' id="movie_cast">
                        Cast: {movie.cast.join(', ')}
                    </Box>
                </Box>
                <Box mt='2' p="2" fontSize='sm' color='gray.600' id="movie_description">
                    {movie.description}
                </Box>

                <Text>Preferred Quality: </Text>
                {/* <ScrollBox mt='2'> */}
                <ScrollableBox >
                    <Box mt='2' p='2'>
                        <Stack spacing={5} direction='column' align={"center"} id={"movie_quality"}>
                            <CheckboxGroup id={"list-" + movie.id} onChange={(qualityArr) => handleQualityChange(qualityArr, movie.id)} >
                                <Checkbox borderColor={"green.400"} value={'HD (2160p)'}>HD (2160p) - $12.99</Checkbox>
                                <Checkbox borderColor={"green.400"} value={'HD (1080p)'}>HD (1080p) - $9.99</Checkbox>
                                <Checkbox borderColor={"green.400"} value={'SD (720p)'}>SD (720p) - $8.99</Checkbox>
                                <Checkbox borderColor={"green.400"} value={'SD (480p)'}>SD (480p) - $7.99</Checkbox>
                                <Checkbox borderColor={"green.400"} value={'SD (240p)'}>SD (240p) - $5.99</Checkbox>
                            </CheckboxGroup>
                        </Stack>
                    </Box>
                </ScrollableBox>

                <Text>Preferred Language: </Text>
                {/* <ScrollBox mt='2'> */}

                <Box mt='2' p='2' >
                    <RadioGroup onChange={(qualityArr) => handleLanguageChange(qualityArr, movie.id)} >
                        <Stack spacing={5} direction='column' align={"center"} id="movie_language">

                            {movie.languages.map((option, index) => (
                                <Radio borderColor={"green"} key={index} value={option}>
                                    {option}
                                </Radio>
                            ))}

                        </Stack>
                    </RadioGroup>
                </Box>

                <Box mt='2' id="movie_addtocart">
                    <Button id="movie_addtocart_button" colorScheme='teal' size='sm' leftIcon={<Icon as={AddIcon} />} onClick={(e) => {
                        let movieObjIdx = selectedQuality.findIndex(o => o.id == movie.id);

                        if (movieObjIdx == -1 || selectedQuality[movieObjIdx]['Quality'] == undefined || selectedQuality[movieObjIdx]['Language'] == undefined) {
                            alert('Cannot add. Select atleast one language and one quality for a movie')
                            return
                        }
                        data.addToCart(selectedQuality)
                        handleAddToCart();
                    }

                    } >
                        Add to Cart
                    </Button>
                    &nbsp;
                    <Button colorScheme='teal' size='sm' onClick={() => { }} id="movie_goto_cart">

                        <ChakraLink as={RouterLink} to="/cart">
                            Go to cart
                        </ChakraLink>
                        {/* <Link _hover={{ textDecoration: 'none' }}
                            _visited={{ color: 'white' }} color='teal.500' href='/cart' >
                            <Text textDecoration="none">Go to Cart</Text>
                        </Link> */}

                    </Button>
                    &nbsp;
                    <Button colorScheme='teal' size='sm' onClick={() => { }} id="movie_goto_user">

                        <ChakraLink as={RouterLink} to="/user">
                            Go to user
                        </ChakraLink>
                        {/* <Link _hover={{ textDecoration: 'none' }}
                            _visited={{ color: 'white' }} color='teal.500' href='/cart' >
                            <Text textDecoration="none">Go to Cart</Text>
                        </Link> */}

                    </Button>
                    <InputGroup mt='2' id="movie_comment_input">
                        <Input placeholder="Add a comment" value={comment} onChange={(e) => setComment(e.target.value)} />
                        <Button colorScheme="blue" onClick={(e) => { return handleComment(e, movie.id) }}>Comment</Button>
                    </InputGroup>
                </Box>
                <Box mt="2" id="movie_comments">
                    {comments[movie.id]?.map((comment, index) => {
                        return (
                            <p key={index}>{comment}</p>
                        )
                    })}
                </Box>
                {/* </ScrollBox> */}
            </Box>
        </Box>
    );
};


const Product = ({ id, title, image, price }) => {
    return (
        <div className="product">
            <img src={image} alt={title} />
            <h3>{title}</h3>
            <p>${price.toFixed(2)}</p>
            <button>Add to Cart</button>
        </div>
    );
};

export default MovieCard;
