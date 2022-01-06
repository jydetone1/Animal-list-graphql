import { useParams } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { useQuery, gql } from '@apollo/client';
import CardDisplay from '../components/CardDisplay/CardDisplay';

const CATEGORY_QUERY = gql`
  query ($slug: String!) {
    category(slug: $slug) {
      id
      category
      slug
      animals {
        id
        title
        price
        image
      }
    }
  }
`;
const CategoryPage = () => {
  const { slug } = useParams();
  const { error, data, loading } = useQuery(CATEGORY_QUERY, {
    variables: {
      slug,
    },
  });

  if (loading) return <div>loading...</div>;
  if (error) return <div>Error...</div>;

  return (
    <div className='py-5'>
      <Container>
        <h1 className='text-capitilize'></h1>
        {data.category.category}
        <CardDisplay animals={data.category.animals} />
      </Container>
    </div>
  );
};

export default CategoryPage;
