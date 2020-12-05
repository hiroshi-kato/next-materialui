import Link from 'next/link';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import Layout from '../components/Layout';

const IndexPage = () => (
  <Layout title='Home | Next.js + TypeScript Example'>
    <Container maxWidth='sm'>
      <Box my={4}>
        <Typography variant='h4' component='h1' gutterBottom>
          Next.js example
        </Typography>
        <Link href='/about'>Go to the about page</Link>
      </Box>
    </Container>
  </Layout>
);

export default IndexPage;