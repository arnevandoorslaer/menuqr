import { Grid, GridItem } from '@chakra-ui/react';
import Dashboard from './pages/dashboard';
import Navbar from './components/navbar';
import Sidebar from './components/sidebar';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useAtom } from 'jotai';
import { categoryAtom, tableIdAtom } from './services/store';

export default function App() {
  const { category, table } = useParams();
  const [, setCategory] = useAtom(categoryAtom);
  const [, setTableId] = useAtom(tableIdAtom);

  useEffect(() => {
    if (category)
      setCategory(category.replaceAll('--', '/').replaceAll('-', ' '));
    if (table) setTableId(Number(table));
  }, []);

  return (
    <Grid templateColumns='repeat(6, 1fr)' bg='gray.50'>
      <GridItem
        as='aside'
        colSpan={{ base: 6, lg: 2, xl: 1 }}
        bg='teal.400'
        minHeight={{ lg: '100vh' }}
        p={{ base: '20px', lg: '30px' }}
        boxShadow='dark-lg'
      >
        <Sidebar />
      </GridItem>
      <GridItem
        as='main'
        colSpan={{ base: 6, lg: 4, xl: 5 }}
        p={{ base: '5px', md: '40px' }}
      >
        <Navbar />
        <Dashboard />
      </GridItem>
    </Grid>
  );
}
