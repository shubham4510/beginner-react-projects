import { Box, Button, HStack, Heading, Input, Stack, VStack,Text } from '@chakra-ui/react'
import {AiOutlineSend} from 'react-icons/ai'
import { FaGithub, FaLinkedin } from "react-icons/fa6";


const Footer = () => {
  return (
    <Box bg={'blackAlpha.900'} minH={'40'} p={'16'} color={'white'}>

        <Stack direction={['column','row']}>
            <VStack alignItems={'stretch'} w={'full'} px={'4'}>
                <Heading textAlign={['center','left']} size={'md'} textTransform={'uppercase'}>
                    Follow us on LinkdIn
                </Heading>
                <HStack borderBottom={'2px solid white'} py={'2'}>
                    <Input placeholder='Enter Email Here...' border={'none'} borderRadius={'none'} outline={'none'} focusBorderColor='none'/>
                    <Button p={'0'} colorScheme='purple' variant={'ghost'} borderRadius={'0 20px 20px 0'}>
                        <AiOutlineSend/>
                    </Button>
                </HStack>
            </VStack>

            <VStack w={'full'} borderLeft={['none','1px solid white']} borderRight={['none','1px solid white']}>
                <Heading textAlign={'center'} textTransform={'uppercase'}>
                    VIDEO HUB
                </Heading>
                <Text>
                    All rights received
                </Text>
            </VStack>

            <VStack w={'full'}>
                <Heading size={'md'} textTransform={'uppercase'}>
                    Social Media
                </Heading>
                <Button variant={'link'} colorScheme='white'>
                    <a target='blank' href="https://www.linkedin.com/in/shubham-bhardwaj-b5b609258/"><FaLinkedin size={'25'}/></a>
                </Button>
                <Button variant={'link'} colorScheme='white'>
                    <a target='blank' href="https://github.com/shubham4510"><FaGithub size={'25'}/></a>
                </Button>
            </VStack>

            


        </Stack>

    </Box>
  )
}

export default Footer;