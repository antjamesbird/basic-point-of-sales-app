import styled from 'styled-components';

export const Button = styled.button`
  color: #545e75;
  font-size: 1em;
  margin: 0;
  padding: 1.5em;
  border: none;
  cursor: pointer;
  width: 33%;

  &:focus {
    outline:0;
  }

  &.icon-tick {
    font-size: 30px;
    color: green;
  }

  &.icon-cross {
    font-size: 30px;
    color: red;
  }
`;