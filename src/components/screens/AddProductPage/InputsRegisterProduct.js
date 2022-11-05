import styled from 'styled-components';
import axios from 'axios';
//===
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

//===
import ButtonSubmit from '../../shared/ButtonSubmit';
import Loading from '../../shared/Loading';
import SelectCategory from './selectCategory';
import SelectProduct from './selectProduct';
import { useProduct } from '../../../hooks/useProducts';
export default function InputRegisterProduct() {
  const navigate = useNavigate();

  const { productsAndCategories } = useProduct();

  const [inputCategory, setInputCategory] = useState('');

  const [inputNameProduct, setInputNameProduct] = useState('');

  const [inputAmountroduct, setInputAmountroduct] = useState('');
  const [selectedProduct, setSelectedProduct] = useState('');
  const [inputProductName, setInputProductName] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Pedido pré-pronto');
  const [inputDiscountProduct, setInputDiscountProduct] = useState('');
  const [inputImage, setInputImage] = useState('');

  const [inputPriceProduct, setInputPriceProduct] = useState('');
  const [objNewProduct, setObjNewProduct] = useState({
    category: '',
    name: '',
    amount: '',
    price: '',
    discount: '',
    image: ''
  });

  const [stateButton, setStateButton] = useState('habilitado');

  function registerProduct(event) {
    event.preventDefault();
    setStateButton('loading');

    //================ Validação de novo produto =================>
    objNewProduct.name = selectedProduct;
    const productsList = productsAndCategories.productsList;

    if (inputNameProduct) {
      const isProductRegistered = productsList.some(
        category => category.category === inputNameProduct
      );
      if (isProductRegistered) {
        setInputNameProduct('');
        setStateButton('isProductRegistered');
      }
      objNewProduct.name = inputNameProduct;
    }
    //================ Validação de nova categoria =================>
    objNewProduct.category = selectedCategory;
    const categoriesList = productsAndCategories.categoriesWithTitle;

    if (inputCategory) {
      const isCategoryRegistered = categoriesList.some(
        category => category.category === inputCategory
      );
      if (isCategoryRegistered) {
        setInputCategory('');
        setStateButton('isCategoryRegistered');
      }

      objNewProduct.category = inputCategory;
    }

    // ===

    objNewProduct.amount = inputAmountroduct;
    objNewProduct.price = inputPriceProduct;
    objNewProduct.discount = inputDiscountProduct;
    objNewProduct.image = inputImage;
    // ===

    setObjNewProduct({ ...objNewProduct });
    console.log('deu certo', objNewProduct);
    const promise = axios.post(URL, objNewProduct);

    promise.then(() => {
      navigate('../sucessProductRegister', { replace: true });
    });
    promise.catch(err => {
      const error = err.response.status;
      if (error === 500) console.log('erro do servidor');
      setInputPriceProduct('');
      //colocar um state button caso a categoria ja exista
      setStateButton('err');
    });
  }

  if (stateButton === 'err' && inputPriceProduct.length > 0) {
    setStateButton('habilitado');
  }
  return (
    <ContainerFormStyle>
      <form onSubmit={registerProduct}>
        <section className="sectionCategories">
          <SelectCategory
            setSelectedCategory={setSelectedCategory}
            selectedCategory={selectedCategory}
          />

          <div className="containerAddCategory">
            <label htmlFor="inputCategory">Não encontrou? Adicione você mesmo:</label>
            <InputClass
              placeholder="Categoria"
              id="inputCategory"
              type="text"
              value={inputCategory}
              onChange={e => setInputCategory(e.target.value)}
              disabled={stateButton === 'loading' ? 'disabled' : ''}
            />
          </div>
        </section>

        <div className="containerImage">
          <InputClass
            placeholder="Imagem do produto"
            id="inputImage"
            type="url"
            value={inputImage}
            onChange={e => setInputImage(e.target.value)}
            disabled={stateButton === 'loading' ? 'disabled' : ''}
          />
        </div>

        <section className="sectionDescriptionProduct">
          <SelectProduct
            selectedProduct={selectedProduct}
            setSelectedProduct={setSelectedProduct}
            selectedCategory={selectedCategory}
          />
          <div className="containerAddProductName">
            <label htmlFor="inputProductName">Não encontrou?</label>
            <InputClass
              placeholder="Produto"
              id="inputProductName"
              type="text"
              value={inputProductName}
              onChange={e => setInputProductName(e.target.value)}
              disabled={stateButton === 'loading' ? 'disabled' : ''}
            />
          </div>
          <InputClass
            placeholder="Qntd"
            type="number"
            min={0}
            value={inputAmountroduct}
            onChange={e => setInputAmountroduct(e.target.value)}
            step={'0.00'}
            disabled={stateButton === 'loading' ? 'disabled' : ''}
            required
          />
        </section>

        <section className="sectionPrice">
          <InputClass
            placeholder="Valor"
            type="number"
            min={0}
            value={inputPriceProduct}
            onChange={e => setInputPriceProduct(e.target.value)}
            disabled={stateButton === 'loading' ? 'disabled' : ''}
            step=".01"
            required
          />

          <InputClass
            placeholder="Desconto (0-100)%"
            type="number"
            min={0}
            max={100}
            value={inputDiscountProduct}
            onChange={e => setInputDiscountProduct(e.target.value)}
            disabled={stateButton === 'loading' ? 'disabled' : ''}
            required
          />
        </section>

        <ButtonSubmit
          type="submit"
          backgroundcolor={
            stateButton === 'err'
              ? '#8a8893'
              : stateButton === 'loading'
              ? '#8a8893'
              : '#ffffff'
          }
        >
          {stateButton === 'err' ? (
            'Não foi possível cadastrar o produto'
          ) : stateButton === 'isCategoryRegistered' ? (
            'Categoria já cadastrada.'
          ) : stateButton === 'loading' ? (
            <Loading height={20} width={20} />
          ) : (
            'Casdastrar Produto'
          )}
        </ButtonSubmit>
      </form>
    </ContainerFormStyle>
  );
}

const ContainerFormStyle = styled.div`
  display: flex;
  justify-content: center;

  form {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 90%;
    max-width: 600px;
    color: white;
    font-size: 19px;
  }

  .sectionCategories {
    display: flex;
    justify-content: center;
    align-items: flex-end;
    justify-content: space-between;
    margin-bottom: 10px;
    width: 100%;

    input:last-child {
      width: 100%;
      border-radius: 5px 5px 0 0;
    }

    .containerAddCategory {
      display: flex;
      flex-direction: column;

      label {
        margin-left: 5px;
        margin-bottom: 4px;
        font-weight: 3 00;
        font-size: 15px;
        color: white;
      }
    }

    .containerAddCategory {
      width: 100%;
    }
  }

  .containerImage {
    margin-bottom: 10px;
  }

  .sectionDescriptionProduct {
    display: flex;
    justify-content: center;
    align-items: flex-end;
    justify-content: space-between;
    margin-bottom: 10px;
    width: 100%;

    .containerAddProductName {
      display: flex;
      flex-direction: column;
      width: 90%;
      margin-right: 10px;
      input {
        min-width: 100%;
      }

      label {
        margin-left: 5px;
        margin-bottom: 4px;
        font-weight: 400;
        font-size: 15px;
      }
    }

    input:last-child {
      width: 60px;
    }
  }

  .sectionPrice {
    display: flex;

    margin-bottom: 10px;

    input:first-child {
      margin-right: 10px;
      max-width: 140px;
    }
  }
`;

const InputClass = styled.input`
  font-size: 20px;
  width: 100%;
  height: 45px;
  background: #ffffff;
  border: 1px solid #d4d4d4;
  font-family: 'Jost', sans-serif;
  border-radius: 5px;
  padding-left: 10px;

  color: #000000;
  ::placeholder {
    color: #0004;
  }
`;
