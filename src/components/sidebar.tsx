import { Divider, List, ListItem, Text } from '@chakra-ui/react';
import { useAtom } from 'jotai';
import {
  filteredCategoryAtomByName,
  categoriesAtom,
  categoryAtom,
  tableIdAtom,
} from '../services/store';
import { NavLink } from 'react-router-dom';

export default function Sidebar() {
  const [category] = useAtom(filteredCategoryAtomByName);
  const [table] = useAtom(tableIdAtom);
  const [categories] = useAtom(categoriesAtom);
  const [, setCategory] = useAtom(categoryAtom);

  return (
    <List color='white' fontSize='1.2em' spacing={5}>
      {categories.map((c) => (
        <ListItem key={c.id}>
          <NavLink
            className='btn btn-dark m-2 text-white'
            to={`/${c.title.replaceAll(' ', '-').replaceAll('/', '--')}/${
              table || ''
            }`}
            key={c.title}
          >
            <Text
              _hover={{
                color: 'gray.300',
                cursor: 'pointer',
                marginLeft: '10px',
              }}
              textTransform='uppercase'
              color={c.id === category?.id ? 'gray.300' : ''}
              marginLeft={c.id === category?.id ? '10px' : ''}
              onClick={() => setCategory(c?.title)}
            >
              {c.title}
            </Text>
          </NavLink>

          <Divider />
        </ListItem>
      ))}
    </List>
  );
}
