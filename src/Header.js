import { Flex, Box, Heading, Button, IconButton, useDisclosure, Center, Spacer } from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { Link as ChakraLink } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";


import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
} from '@chakra-ui/react'

function Header() {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <Flex width={"100%"} bg='brand.100' alignItems='center' boxShadow="sm" align="center" justify="space-between" py={4} px={6}>
            {/* Logo */}
            {/* <Center> */}
            {/* <Spacer /> */}

            {/* <Heading alignItems={"center"} color='brand.300' as="h1" size="lg" fontWeight="light">
                My Store
            </Heading> */}
            {/* </Center> */}
            {/* <Box p='2' textAlign='center' mx='auto' width={"100%"} flexBasis={{ base: "100%", md: "auto" }}> */}
            <Heading alignItems={"center"} color='brand.300' as="h1" size="lg" fontWeight="light">
                The Movie Store
            </Heading>
            {/* </Box> */}



            {/* Hamburger menu */}
            <IconButton
                aria-label="Open Menu"
                size="md"
                icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                display={{ md: "none" }}
                onClick={isOpen ? onClose : onOpen}
            />

            {/* Navigation links */}
            <Box color='brand.300' display={{ base: isOpen ? "block" : "none", md: "block" }} flexBasis={{ base: "100%", md: "auto" }}>
                <Flex align="center" justify={["center", "space-between", "flex-end", "flex-end"]} paddingLeft={"-1.5"} direction={["column", "row", "row", "row"]} pt={[4, 4, 0, 0]}>
                    {/* <Menu >
                        <MenuButton as={Button} rightIcon={<HamburgerIcon />}>
                            Actions
                        </MenuButton>
                        <MenuList>
                            <MenuItem>Download</MenuItem>
                            <MenuItem>Create a Copy</MenuItem>
                            <MenuItem>Mark as Draft</MenuItem>
                            <MenuItem>Delete</MenuItem>
                            <MenuItem>Attend a Workshop</MenuItem>
                        </MenuList>
                    </Menu> */}
                    <Button variant="ghost" mr={[0, 4, 4, 4]} my={[2, 0, 0, 0]}>
                        <ChakraLink as={RouterLink} to="/">
                            Home
                        </ChakraLink>
                    </Button>
                    <Button variant="ghost" mr={[0, 4, 4, 4]} my={[2, 0, 0, 0]}>
                        <ChakraLink as={RouterLink} to="/cart">
                            Cart
                        </ChakraLink>
                    </Button>
                    <Button variant="ghost" my={[2, 0, 0, 0]}>
                        <ChakraLink as={RouterLink} to="/user">
                            User
                        </ChakraLink>
                    </Button>
                </Flex>
            </Box>
        </Flex>
    );
}

export default Header;
