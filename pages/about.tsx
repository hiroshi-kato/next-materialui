import Link from 'next/link';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';

import Layout from '../components/Layout';

const AboutPage = () => (
  <Layout title='About | Next.js + TypeScript Example'>
    <Container maxWidth='sm'>
      <Box my={4}>
        <Typography variant='h4' component='h1' gutterBottom>
          Next.js example
        </Typography>
        <Link href='/' passHref>
          <Button variant='contained' color='primary'>
            Go to the main page
          </Button>
        </Link>
      </Box>
    </Container>
  </Layout>
);

export default AboutPage;
