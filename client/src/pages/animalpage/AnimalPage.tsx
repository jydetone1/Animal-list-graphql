import { Container } from 'react-bootstrap';
import animals from '../../assets/images';
import Star from '../../assets/svg/Star';
import './AnimalPage.css';
import { useParams } from 'react-router-dom';
import { useQuery, gql } from '@apollo/client';
import { AnimalDetails } from '../../utils/types';

const ANIMAL_QUERY = gql`
  query ($slug: String!) {
    animal(slug: $slug) {
      title
      image
      stock
      description
      price
    }
  }
`;

const AnimalPage = () => {
  const { slug } = useParams();
  const { error, data, loading } = useQuery(ANIMAL_QUERY, {
    variables: {
      slug,
    },
  });
  if (loading) return <div>loading...</div>;
  if (error) return <div>errror...</div>;
  return (
    <div className='py-5'>
      <Container>
        <div className='d-flex'>
          <img
            src={animals[data.animal.image]}
            className='product-img'
            style={{ marginRight: '1rem' }}
          />
          <div className='text-container'>
            <h1>{data.animal.title}</h1>
            <div className='star-container'>
              <Star />
              <Star />
              <Star />
              <Star />
              <Star />
              <div className='rating-stock-container'>
                <p>1402 rating</p>
                <p>{data.animal.stock} in stock</p>
              </div>
            </div>
            <div className='about-container'>
              <h4>About this Animal</h4>
              {data.animal.description.map((description: AnimalDetails) => {
                return <li>{description}</li>;
              })}
            </div>
          </div>
          <div className='cart-container border'>
            <p className='price'>
              <span>CAD${data.animal.price}</span>
            </p>
            <p className='delivery-time'>
              Free delivery: Thursday, Feb 25 Details
              <button className='buy-now-btn' style={{ marginTop: '2rem' }}>
                Add to cart
              </button>
              <button> Buy Now </button>
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default AnimalPage;
