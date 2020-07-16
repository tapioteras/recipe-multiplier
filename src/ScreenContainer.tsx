import React from "react";
import { Box, Stack } from "@chakra-ui/core";

export interface ScreenContainerProps {
  children: React.ReactNode;
}

const ScreenContainer: React.FC<ScreenContainerProps> = ({ children }) => (
  <Box bg="tomato" w="100%" p={4} color="white">
    <Stack paddingTop={5} spacing={5}>
      {children}
    </Stack>
  </Box>
);

export default ScreenContainer;
