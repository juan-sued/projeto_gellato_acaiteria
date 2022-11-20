import { axiosI } from '../../services/axios';

async function requestRegisterProduct(objNewProduct, setObjNewProduct, sucess) {
  axiosI
    .post(`/products`)
    .then(({ data }) => {
      sucess();
    })
    .catch(err => {
      console.error(err);
      setObjNewProduct({ ...objNewProduct, price: '' });
    });
}

export default requestRegisterProduct;
