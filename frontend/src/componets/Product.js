import {Link}  from 'react-router-dom';
import Rating from './Rating';
//  --------------------------------- The Layout For Product View --------------------------------- \\

export default function Product(P) {
    const { product } = P 
    return(
        <div key={product._id} className="card">
          {/* Link of Image */}
        <Link to={`/product/${product._id}`}> 
          <img
            className="medium"
            src={process.env.PUBLIC_URL + product.image}
            alt={product.name}
          />
        </Link>
        <div className="card-body">
          <Link to={`/product/${product._id}`}>
            <h2>{product.name}</h2>
          </Link>
          <Rating rating={product.rating} numReviews={product.numReviews}></Rating>
          <div className="price">${product.price}</div>
        </div>
      </div>
    )
}