import { SimpleGrid } from '@chakra-ui/react';

import Card from '../components/card';
import { useAtom } from 'jotai';
import { filteredItemAtom } from '../services/store';

export default function Dashboard() {
  const [items] = useAtom(filteredItemAtom);

  return (
    <SimpleGrid padding='0' spacing={10} minChildWidth='250px'>
      {items && items.map((item) => <Card item={item} key={item.id}></Card>)}
    </SimpleGrid>
  );
}
