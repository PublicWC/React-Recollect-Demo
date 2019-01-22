import { store } from 'react-recollect';

const updatePrices = () => {
  store.products.forEach(product => {
    if (Math.random() > 0.9) {
      product.price = product.price * (Math.random() + 0.5);
    }
  });
};

export default updatePrices;
