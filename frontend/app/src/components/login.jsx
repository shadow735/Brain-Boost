import React from 'react';
import { Box, Button, FormControl, Input, Stack, Text } from '@chakra-ui/react';

const Login = () => {
  return (
    <Stack direction="row" spacing={8} justify="center" align="center" height="100vh">
      {/* Left Side - Input Fields */}
      <Stack spacing={4} width="25%" p={4} borderRadius="md" boxShadow="xl">
        <Text color="black" fontSize='large' fontWeight="bold" textAlign="center">Login</Text>
        <FormControl>
          <Input placeholder="Email" variant="filled" />
        </FormControl>
        <FormControl>
          <Input type="password" placeholder="Password" variant="filled" />
        </FormControl>
        <Stack justify="center" align="center">
          <Button colorScheme="blue" variant="solid" width="80%">
            Login
          </Button>
          
          <Text color="black" textAlign="center">Register</Text>
        </Stack>
      </Stack>

      {/* Right Side - Image */}
      <Box width="40%">
        <img
          src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
          alt="Login"
          style={{ width: '100%', height: 'auto', borderRadius: '8px', boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)' }}
        />
      </Box>
    </Stack>
  );
};

export default Login;
