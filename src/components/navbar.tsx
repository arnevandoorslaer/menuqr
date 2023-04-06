import {
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Spacer,
  Text,
} from '@chakra-ui/react';
import { FiShoppingCart } from 'react-icons/fi';
import { useAtom } from 'jotai';
import { filteredCategoryAtomByName, tableAtom } from '../services/store';

export default function Navbar() {
  const [category] = useAtom(filteredCategoryAtomByName);
  const [table] = useAtom(tableAtom);

  return (
    <Flex as='nav' p='10px' alignItems='center' mb='30px'>
      <Heading as='h1' textTransform='uppercase'>
        {category?.title ?? 'menu'}
      </Heading>
      <Spacer />
      <HStack spacing='20px'>
        <Box bg='gray.200' p='10px'>
          <Text fontWeight='bold'>{table?.number}</Text>
        </Box>
        <Button colorScheme='teal' boxShadow='lg'>
          <FiShoppingCart />
        </Button>
      </HStack>
    </Flex>
  );
}
