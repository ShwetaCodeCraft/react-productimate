import styled from 'styled-components';

const Button = styled.button`
  padding: 10px 20px;
  font-size: 1rem;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  background-color: ${props => props.primary ? '#007bff' : '#ccc'};
  color: ${props => props.primary ? 'white' : 'black'};
`;

export default Button;
