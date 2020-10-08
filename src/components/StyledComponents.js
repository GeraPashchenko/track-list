import styled from 'styled-components';

export const MainPage = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const ListDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  
`;

export const TracksDiv = styled(ListDiv)`
  justify-content: flex-start;
`;

export const FormDiv = styled(ListDiv)`
  padding-top: 30px;
`;

export const FormInput = styled.input`
  margin: 10px;
`;