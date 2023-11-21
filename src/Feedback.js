import { useState } from "react";
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Input,
    Textarea,
    Button,
    VStack,
    useToast,
    Select
} from "@chakra-ui/react";


function FeedbackForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [selectedUser, setSelectedUser] = useState("");

    const toast = useToast();

    const handleSubmit = (e) => {
        e.preventDefault();
        // Your submit logic here
        toast({
            title: "Feedback Submitted!",
            description: "Thank you for your feedback!",
            status: "success",
            duration: 5000,
            isClosable: true,
        });
    };
    const handleOptionChange = (e) => {
        setSelectedUser(e.target.value);

        if (e.target.value === "addUser") {
            window.location.assign("/user");
        }
    };
    return (
        <form onSubmit={handleSubmit}>
            <VStack id={"feedback_form"} spacing={4} align="stretch" w="500px" h="600px" bg="white" rounded="md" padding={5}>
                <FormControl id="name" isRequired>
                    <FormLabel>Name</FormLabel>
                    <Input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <FormHelperText>Enter your full name</FormHelperText>
                </FormControl>

                <FormControl id="email" isRequired>
                    <FormLabel>Email</FormLabel>
                    <Input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <FormHelperText>Enter your email address</FormHelperText>
                </FormControl>

                <FormControl id="message" isRequired>
                    <FormLabel>Message</FormLabel>
                    <Textarea
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    />
                    <FormHelperText>
                        Enter your feedback or comments here
                    </FormHelperText>
                </FormControl>

                <FormControl id="user" isRequired>
                    <FormLabel>Select User</FormLabel>
                    <Select placeholder="Select user" value={selectedUser} onChange={handleOptionChange}>
                        <option value="user1">Default</option>
                        <option value="user2">Arun</option>
                        <option id={"addUser"} value="addUser" onChange={handleOptionChange}>Add User</option>

                    </Select>
                    <FormHelperText>Select an option from the list</FormHelperText>
                </FormControl>

                <Button type="submit" colorScheme="blue">
                    Submit Feedback
                </Button>
            </VStack>
        </form>
    );
}

export default FeedbackForm;
