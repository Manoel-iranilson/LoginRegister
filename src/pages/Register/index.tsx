import React, { useState } from 'react';
import { Box, Button, Center, Container, Flex, Input, Text, useToast } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';



const Register: React.FC = () => {
    const navigate = useNavigate();
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const toast = useToast()


    const register = () => {
        if (password.length >= 8) {
            localStorage.setItem("nome", nome)
            localStorage.setItem("email", email)
            localStorage.setItem("password", password)
            navigate("/");
            return (
                toast({
                    title: 'Sucesso',
                    description: "Usuario cadastrado com sucesso",
                    status: 'success',
                    duration: 800,
                    isClosable: false,
                    position: "top"

                })
            );

        } else {
            return (
                toast({
                    title: 'senha',
                    description: "A senha deve ter no minino 8 caracteres",
                    status: 'error',
                    duration: 800,
                    isClosable: false,
                    position: "top"
                })
            );
        }



    }


    return (
        <Flex height="100vh" w={"100%"} pt={10} bgGradient="linear(to-t,#00008B,#6495ED)" flexDirection={"column"}>
            <Center>
                <Text color={"#fff"} fontSize="50">Registre-se</Text>
            </Center>
            <Center pt={5}>
                <Box h="25rem" w={"20rem"} borderRadius={10} bg={"#fff"}>
                    <Center p={10} >
                        <Flex flexDirection={"column"} >
                            <Input w={"16rem"} mb={10} placeholder='Nome' onChange={(e) => setNome(e.target.value)} />
                            <Input w={"16rem"} mb={10} placeholder='Email' onChange={(e) => setEmail(e.target.value)} />
                            <Input variant={"outline"} mb={10} type={"Password"} placeholder='Digite sua senha' onChange={(e) => setPassword(e.target.value)} />
                            <Button colorScheme='blue' onClick={() => register()}>Cadastra</Button>
                        </Flex>
                    </Center>
                    <Center>
                        <Text>Ja tem conta? </Text>
                        <Button pl={2} colorScheme='#000' variant='link' onClick={() => navigate("/")}>
                            Logar
                        </Button>
                    </Center>

                </Box>

            </Center>
        </Flex>
    );
}

export default Register;

