import { store } from 'react-recollect';
import makeData from '../../utils/makeData';

const loadProducts = async () => {
  store.loading = true;

  store.products = await makeData('/api/blah');

  store.loading = false;
};

export default loadProducts;
