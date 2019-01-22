import React from 'react';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import styles from './Product.module.css';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Hidden from '@material-ui/core/Hidden/Hidden';

const formatDate = dateAsNum => {
  const date = new Date(dateAsNum);
  return date.toLocaleString('en', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });
};

const formatPrice = priceAsNum => `$${priceAsNum.toFixed(2)}`;

const Product = React.memo(({ product }) => (
  <Card className={styles.panel}>
    <Hidden xsDown>
      <CardMedia
        image={`http://lorempixel.com/300/300/${product.category}/${product.id % 10 + 1}`}
        height={300}
        width={300}
        className={styles.image}
      />
    </Hidden>

    <CardContent className={styles.cardContent}>
      <Typography variant="h6" color="primary" gutterBottom>
        {product.name}
      </Typography>

      <Typography variant="subtitle2" gutterBottom>
        {formatPrice(product.price)}
      </Typography>

      <Typography variant="body1" className={styles.description}>
        {product.description}
      </Typography>

      <div className={styles.details}>
        <Typography variant="overline" color="secondary">
          {product.category}
        </Typography>

        <Typography variant="overline">
          {formatDate(product.date)}
        </Typography>

        <button
          className={styles.starButton}
          onClick={() => product.favorite = !product.favorite}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="24.5"
            viewBox="0 0 260 245"
          >
            <path
              className={product.favorite ? styles.starOn : styles.starOff}
              d="m55,237 74-228 74,228L9,96h240"
            />
          </svg>
        </button>
      </div>
    </CardContent>
  </Card>
));

export default Product;
