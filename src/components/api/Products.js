import axios from "axios";


export default async function GetAllProducts(_props) {
  try {
    const response = await axios(`https://dummyjson.com/${_props}`);
    const data = await response.data;
    return data.products;
  } catch (error) {
    if (error.status === 404) {
      throw new Error('Products not found');
    }
    else {
      console.error('Something went wrong while fetching data!', error);
      throw new Error('Something went wrong while fetching data!');
    }
  }
}
