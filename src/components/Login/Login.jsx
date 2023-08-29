import {
    Button,
    Container,
    Heading,
    Input,
    Text,
    VStack,
  } from '@chakra-ui/react';
  import React, { useState } from 'react';
  import { Link } from 'react-router-dom';
  
  const Login = () => {
    const [inputVal,setInputVal] = useState('');
    console.log(inputVal);
    return (
      <Container maxW={'container.xl'} h={'100vh'} p={['3','8']}>
        <form>
          <VStack
            alignItems={'stretch'}
            spacing={'8'}
            w={['full', '96']}
            m={'auto'}
            my={'16'}
          >
            <Heading>Welcome Back</Heading>
  
            <Input
              placeholder={'Email'}
              type={'email'}
              required
              focusBorderColor={'purple.500'}
            />
            <Input
              placeholder={'Password'}
              type={'password'}
              required
              focusBorderColor={'purple.500'}
              onChange={(e)=>setInputVal(e.target.value)}
            />
  
            <Button variant={'link'} alignSelf={'flex-end'}>
              {/* <Link to={'/forgetpassword'}>Forget Password?</Link> */}
              Forget Password?
            </Button>
  
            <Button colorScheme={'purple'} type={'submit'}>
              Log In
            </Button>
  
            <Text textAlign={'right'}>
              New User?{' '}
              <Button variant={'link'} colorScheme={'purple'}>
                <Link to={'/signup'}>Sign Up</Link>
              </Button>
            </Text>
          </VStack>
        </form>
      </Container>
    );
  };
  
  export default Login;