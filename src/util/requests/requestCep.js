import { axiosBasic } from '../../services/axios';

async function requestCep(createDataAddress, setCreateDataAddress, setStateButton) {
  axiosBasic
    .get(`viacep.com.br/ws/${createDataAddress.cep}/json/`)
    .then(({ data }) => {
      setCreateDataAddress({
        street: data.logradouro,
        neighborhood: data.bairro,
        number: '',
        state: data.uf,
        city: data.localidade,
        cep: data.cep,
        addressDetail: data.complemento
      });
    })
    .catch(err => {
      console.log(err);
      setCreateDataAddress({
        street: '',
        neighborhood: '',
        number: '',
        state: '',
        city: '',
        cep: '',
        addressDetail: ''
      });
    });
}

export default requestCep;
