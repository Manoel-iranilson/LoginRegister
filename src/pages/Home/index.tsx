
import { Box, Button, Center, Flex, Input, Text, } from '@chakra-ui/react';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import user from '../../assets/user.png';

const Home: React.FC = () => {
    const navigate = useNavigate();
    const email = localStorage.getItem("email")
    const nome = localStorage.getItem("nome")
    const password = localStorage.getItem("password")

    const logoff = () => {
        localStorage.clear();
        navigate("/");
    }

    return (
        <Flex height="100vh" w={"100%"} pt={10} bgGradient="linear(to-t,#00008B,#6495ED)" flexDirection={"column"}>
            < Center >
                <img width={100} src={user} />
            </Center >
            <Center pt={6}>
                <Box h="22rem" w={"22rem"} borderRadius={10} bg={"#fff"}>
                    <Center p={10} >
                        <Flex flexDirection={"column"} >
                            <Center fontSize={20}>
                                Bem vindo, {nome}
                            </Center>
                            <Text pt={5} >Email : {email} </Text>
                            <Text pt={5} pb={5}>password : {password} </Text>


                            <Button colorScheme='blue' onClick={() => logoff()}>Sair</Button>
                        </Flex>
                    </Center>
                </Box>

            </Center >
        </Flex >
    );
}


export default Home;

