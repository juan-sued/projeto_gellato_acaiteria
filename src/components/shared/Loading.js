import styled from 'styled-components';

import { TailSpin } from 'react-loader-spinner';

export default function Loading({ height, width, marginLeft, marginTop }) {
  return (
    <ContainerLoading marginLeft={marginLeft} marginTop={marginTop}>
      <TailSpin color="#892182" height={height} width={width} />
    </ContainerLoading>
  );
}
const ContainerLoading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;

  margin-left: ${props => props.marginLeft};
  margin-top: ${props => props.marginTop};
`;
