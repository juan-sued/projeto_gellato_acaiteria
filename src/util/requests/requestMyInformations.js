import axiosI from '../../services/axios';

async function requestMyInformations(
  userAndAddressesInfo,
  setUserAndAddressesInfo,
  userInfo
) {
  if (userInfo) {
    console.log(userInfo);
    axiosI
      .get(`/users/${2}`)
      .then(({ data }) => {
        setUserAndAddressesInfo(data);
      })
      .catch(err => console.error(err));
  }
}

export default requestMyInformations;
