import axiosI from '../../services/axios';

async function requestUpdateAddress(
  updateDataAddress,
  setUpdateDataAddress,
  sucess,
  setStateButton
) {
  axiosI
    .patch(`/users/address`)
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
