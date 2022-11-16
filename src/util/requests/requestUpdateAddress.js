import axiosI from '../../services/axios';

async function requestUpdateAddress(sucess, setStateButton, idAddress) {
  axiosI
    .patch(`/users/address/${idAddress}`)
    .then(({ data }) => {
      sucess();
    })
    .catch(err => {
      console.error(err);
      setStateButton('err');
      setTimeout(() => {
        console.log('aqui');
        setStateButton(true);
      }, '3000');
    });
}

export default requestUpdateAddress;
