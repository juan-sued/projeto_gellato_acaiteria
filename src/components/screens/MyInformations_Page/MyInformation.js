import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useAuth } from '../../../hooks/useAuth';
import requestMyInformations from '../../../util/requests/requestMyInformations';
import Loading from '../../shared/Loading';
import Main from '../../shared/Main';
import TitlePage from '../../shared/TitlePage';
import CardAddress from './components/CardAddress';
import CardIdentify from './components/CardIdentify';

export default function MyInformationPage() {
  const { userInfo } = useAuth();
  const [userAndAddressesInfo, setUserAndAddressesInfo] = useState({});

  useEffect(() => {
    requestMyInformations(userAndAddressesInfo, setUserAndAddressesInfo, userInfo);
    return () => {
      setUserAndAddressesInfo({});
    };
  }, []);

  return (
    <>
      <TitlePage title={'Minha informações'} to={'/'} />
      <Main>
        <ContainerCard>
          {userAndAddressesInfo.user !== undefined ? (
            <CardIdentify userAndAddressesInfo={userAndAddressesInfo} />
          ) : (
            <Loading />
          )}
          {userAndAddressesInfo.addresses !== undefined ? (
            userAndAddressesInfo.addresses.map((address, index) => (
              <CardAddress
                key={index}
                street={address.street}
                number={address.number}
                city={address.city}
                neighborhood={address.neighborhood}
                state={address.state}
                cep={address.cep}
                createdAt={address.createdAt}
                updatedAt={address.updatedAt}
              />
            ))
          ) : (
            <Loading />
          )}
        </ContainerCard>
      </Main>
    </>
  );
}

const ContainerCard = styled.div`
  padding: 15px;
  background-color: purple;
  width: 90%;
  height: 100%;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
`;
