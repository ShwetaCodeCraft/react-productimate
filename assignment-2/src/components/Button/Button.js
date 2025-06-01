import styled from 'styled-components';

const Button = styled.button`
  background-color: ${props => (props.primary ? '#3498db' : '#ccc')};
  color: ${props => (props.primary ? 'white' : 'black')};
  padding: 10px 20px;
  margin: 5px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

export default Button;
