// import fetch from 'node-fetch';

export const fetchProductData = () => {
  return async (dispatch) => {
    try {
      const response = await fetch('http://localhost:8080/api/product');
      const data = await response.json();
      const dataObject = Object.keys(data).map((key) => ({
        id: key,
        ...data[key],
      }));
      dispatch({
        type: 'DATA_PRODUCT',
        value: dataObject,
      }); 
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };
};
