import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import MovieCard from './Product';
import movies from './movies'
import { Card, CardHeader, CardBody, CardFooter, Spacer } from '@chakra-ui/react'
import { SimpleGrid, Box } from '@chakra-ui/react';
import { useContext } from "react";
import DataContext from "./DataContext";



const ProductListingContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

const ProductListing = () => {
    const [selectedQuality, setSelectedQuality] = useState([]);
    const [selectedLanguages, setSelectedLanguages] = useState([]);

    const data = useContext(DataContext);
    // const [products, setProducts] = useState([]);

    useEffect(() => {
        // Fetch products from API
        // fetch('/api/products')
        //     .then((response) => response.json())
        //     .then((data) => setProducts(data))
        //     .catch((error) => console.error(error));
        /*
        [{
                    "id": 1,
                    "title": "Product 1",
                    "image": "https://via.placeholder.com/200x200.png?text=Product+1",
                    "price": 9.99
                }, {
                    "id": 1,
                    "title": "Product 1",
                    "image": "https://via.placeholder.com/200x200.png?text=Product+1",
                    "price": 9.99
                }]
        */

        // console.log(data)
        // setProducts(movies)
    }, []);

    return (
        // <Card maxW='sm'>
        //     <CardBody>
        <ProductListingContainer>
            {/* <Spacer /> */}
            {/* {products.map((product) => (
                <Product
                    key={product.id}
                    title={product.title}
                    image={product.image}
                    price={product.price}
                />
            ))} */}
            {
                <SimpleGrid columns={{ sm: 1, md: 3 }} spacing='4' p="4">
                    {movies.map((movie) => (
                        <MovieCard key={movie.title} movie={movie} selectedQuality={selectedQuality} setSelectedQuality={setSelectedQuality} selectedLanguages={selectedLanguages} setSelectedLanguages={setSelectedLanguages} />
                    ))}
                </SimpleGrid>
            }
        </ProductListingContainer>
        //     </CardBody>
        // </Card>

    );
};

export default ProductListing;
