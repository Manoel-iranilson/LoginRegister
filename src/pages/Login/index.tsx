import { Box, Button, Center, Container, Flex, Img, Input, Stack, Text, useToast } from '@chakra-ui/react';
import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';
import user from '../../assets/user.png';

const Login: React.FC = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const toast = useToast()

    const { auth, setAuth }: any = useContext(AuthContext)

    function Login() {
        if (email == " " || password == "") {
            return (
                toast({
                    title: 'Verifique os dados',
                    description: "email ou senha invalido",
                    status: 'error',
                    duration: 1000,
                    isClosable: false,
                })
            )
        }
        if (localStorage.getItem("email") == email && localStorage.getItem("password") == password) {
            setAuth(true)
            localStorage.setItem("auth", JSON.stringify(auth))
            navigate("/home");
            return;
        } else {
            return (
                toast({
                    title: 'Verifique os dados',
                    description: "email ou senha invalidos",
                    status: 'error',
                    duration: 1000,
                    isClosable: false,
                })
            )
        }
    }

    return (
        <Flex height="100vh" w={"100%"} pt={10} bgGradient="linear(to-t,#00008B,#6495ED)" flexDirection={"column"}>
            < Center >
                <img width={100} src={user} />
            </Center >
            <Center pt={6}>
                <Box h="22rem" w={"20rem"} borderRadius={10} bg={"#fff"}>
                    <Center p={10} >
                        <Flex flexDirection={"column"} >
                            <Input w={"16rem"} mb={10} placeholder='Email' type={"email"} onChange={(e) => setEmail(e.target.value)} />
                            <Input variant={"outline"} mb={10} type={"password"} placeholder='Digite sua senha' onChange={(e) => setPassword(e.target.value)} />
                            <Button colorScheme='blue' onClick={() => Login()}>Login</Button>
                        </Flex>
                    </Center>
                    <Center>
                        <Text>Não tem conta ? </Text>
                        <Button pl={2} colorScheme='#000' variant='link' onClick={() => navigate("/Register")} >
                            Registre-se
                        </Button>
                    </Center>

                </Box>

            </Center >
        </Flex >

    );
}

export default Login;