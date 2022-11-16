import axiosI from '../../services/axios';

async function requestUpdateUser(
  updateDataUser,
  setUpdateDataUser,
  sucess,
  setStateButton,
  id
) {
  axiosI
    .patch(`/users/${id}`)
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

export default requestUpdateUser;
