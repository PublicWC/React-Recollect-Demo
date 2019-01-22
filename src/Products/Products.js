import React from 'react';
import { collect } from 'react-recollect';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Product from '../Product/Product';
import styles from './Products.module.css';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';

class Products extends React.PureComponent {
  state = {
    filter: 'all',
    searchQuery: '',
  };

  render() {
    const { props, state } = this;

    if (props.store.loading) {
      return (
        <div className={styles.loading}>
          <CircularProgress />
        </div>
      );
    }

    const products = state.filter === 'all'
      ? props.store.products
      : props.store.products.filter(product => product.favorite);

    const filteredProducts = state.searchQuery
      ? products.filter(product => (
        product.name.toLowerCase().includes(state.searchQuery.toLowerCase()) ||
        product.category.toLowerCase().includes(state.searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(state.searchQuery.toLowerCase())
      ))
      : products;

    return (
      <div className={styles.wrapper}>
        <Paper className={styles.refinement}>
          <Grid container spacing={24} alignItems="center">
            <Grid item xs={12} md={6}>
              <TextField
                autoFocus
                placeholder="puppies"
                fullWidth
                variant="outlined"
                label="Search"
                margin="normal"
                InputLabelProps={{
                  shrink: true,
                }}
                value={state.searchQuery}
                onChange={e => {
                  this.setState({
                    searchQuery: e.target.value,
                  });
                }}
              />
            </Grid>

            <Grid item xs={12} md={3}>
              <Select
                className={styles.filter}
                value={state.filter}
                onChange={e => {
                  this.setState({ filter: e.target.value });
                }}
              >
                <MenuItem value="all">All products</MenuItem>
                <MenuItem value="favourites">Favourite products</MenuItem>
              </Select>
            </Grid>

            <Grid item xs={12} md={3} style={{ textAlign: 'center' }}>
              <Button
                variant="outlined"
                color="primary"
                onClick={() => {
                  products.forEach(product => {
                    product.favorite = false;
                  });
                }}
              >
                Un-favourite everything
              </Button>
            </Grid>
          </Grid>
        </Paper>

        <Typography variant="caption" className={styles.resultCount}>
          {(props.store.products.length !== filteredProducts.length) && (
            <span>
              Showing {filteredProducts.length} result{filteredProducts.length === 1 ? '' : 's'}
            </span>
          )}
        </Typography>

        {filteredProducts && filteredProducts.map(product => (
          <Product key={product.id} product={product}/>
        ))}
      </div>
    );
  }
}

export default collect(Products);
