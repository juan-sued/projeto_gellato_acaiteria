import styled from 'styled-components';
import Main from '../../shared/Main';
import TitlePage from '../../shared/TitlePage';

import { useState } from 'react';
import SearchBar from '../../shared/SearchBar';
import ListCard from './ListCard';
import { useEffect } from 'react';
import requestGetProducts from '../../../util/requests/requestGetProducts';
import ButtonAdd from '../../shared/ButtonAdd';
import Modal from '../../shared/Modal';
import InputsRegisterProduct from './inputsRegister/InputsRegisterProduct';

export default function StockPage() {
  const [responseProducts, setResponseProducts] = useState([]);

  const [searchProduct, setSearchProduct] = useState({
    searchBar: ''
  });

  const handleChangeText = e => {
    setSearchProduct({ ...searchProduct, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    requestGetProducts(searchProduct, setResponseProducts);

    return () => {
      requestGetProducts([]);
    };
  }, [searchProduct.searchBar]);

  const [toggleModal, setToggleModal] = useState(false);
  function closeModal() {
    setToggleModal(!toggleModal);
  }
  return (
    <>
      {toggleModal ? (
        <Modal functionToggle={closeModal}>
          <InputsRegisterProduct />
        </Modal>
      ) : (
        ''
      )}

      <TitlePage title={'Estoque'} to={'/'} />

      <SearchBar
        searchBar={searchProduct.searchBar}
        onChange={handleChangeText}
        sendSearch={requestGetProducts}
      />

      <Main margin_top={'80'}>
        <ListCard responseProducts={responseProducts} />
      </Main>

      <ButtonAdd functionToggle={closeModal} />
    </>
  );
}
