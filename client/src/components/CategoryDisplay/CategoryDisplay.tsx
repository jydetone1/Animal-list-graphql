import './Category.css';
import { Container } from 'react-bootstrap';
import AnimalToBeDisplay from '../../assets/images';
import { useQuery, gql } from '@apollo/client';
import { Link } from 'react-router-dom';
import { CategoryType } from '../../utils/types';

const CATEGORIES_QUERY = gql`
  {
    categories {
      id
      category
      image
      slug
    }
  }
`;

const CategoryDisplay = () => {
  const { loading, error, data } = useQuery(CATEGORIES_QUERY);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error..</div>;
  return (
    <div className='CategoryDisplay'>
      <Container className='CategoryDisplay-container'>
        {data.categories.map((category: CategoryType) => {
          return (
            <Link
              to={`/products/${category.slug}`}
              className='CategoryDisplay-card-container'
            >
              <div key={category.id} className='CategoryDisplay-card'>
                <img src={AnimalToBeDisplay[category.image]}></img>
              </div>
              <h3> {category.category}</h3>
            </Link>
          );
        })}
      </Container>
    </div>
  );
};

export default CategoryDisplay;
