import {
  Box,
  Button,
  Card as ChCard,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
  Heading,
  HStack,
  Text,
} from '@chakra-ui/react';
import { ViewIcon, EditIcon } from '@chakra-ui/icons';
import { MenuItem } from '../models/menuItem';
import { FiPlusCircle } from 'react-icons/fi';

export default function Card(props: { item: MenuItem }) {
  const { item } = props;
  return (
    <ChCard
      borderTop='8px'
      borderColor='teal.400'
      bg='white'
      boxShadow='dark-lg'
    >
      <CardHeader>
        <Box>
          <Heading as='h3' size='sm' textTransform='uppercase'>
            {item.name}
          </Heading>
          <HStack>
            <Text color='gray.600'>Voeg Toe</Text>
            <Box _hover={{ cursor: 'pointer' }}>
              <FiPlusCircle fontSize='1.2em'></FiPlusCircle>
            </Box>
          </HStack>
        </Box>
      </CardHeader>
      <CardBody color='gray.500'>
        <Text>${item.price}</Text>
      </CardBody>
      <Divider borderColor='gray.200' />
      <CardFooter>
        <HStack>
          <Button variant='ghost' leftIcon={<ViewIcon />}>
            Watch
          </Button>
          <Button variant='ghost' leftIcon={<EditIcon />}>
            Comment
          </Button>
        </HStack>
      </CardFooter>
    </ChCard>
  );
}
