import { Box, Flex, useStyleConfig } from "@chakra-ui/react";

const ScrollableBox = ({ children, ...rest }) => {
    const styles = useStyleConfig("Box", { variant: "scrollable" });

    return (
        <Box overflowY="auto" maxH="150px" {...rest}>
            {children}
        </Box>
    );
};

export default ScrollableBox;