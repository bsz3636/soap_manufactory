/* selectors */
export const getAll = ({products}) => products.data;

export const getBodyProducts = ({ products }) =>
  products.data.filter(item => item.category === 'body');

export const getFaceProducts = ({ products }) =>
  products.data.filter(item => item.category === 'face');

export const getHairProducts = ({ products }) =>
  products.data.filter(item => item.category === 'hair');

/* action name creator */



/* action types */


/* action creators */

/* thunk creators */

/* reducer */
export const reducer = (statePart = [], action = {}) => {
  switch (action.type) {
    
    
    default:
      return statePart;
  }
};