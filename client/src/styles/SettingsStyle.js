import styled from 'styled-components';
import { ModalMain } from './ModalGlobalStyle.js';

// Main Container
export const SettingsModalMain = styled(ModalMain)`
  position: relative;
  width: 50%;
  display: flex;
  justify-content: space-between;
  padding: 30px 5% 30px 5%;
  flex-direction: row;
  box-sizing: border-box;
  border-radius: 2px;
  flex-wrap: wrap;
  h3 {
    width: 100%;
  }
  form{
    width: 100%;
    max-width: 650px;
    h4{
      border-bottom: .5px solid lightgrey;
      color: rgb(184,15,10);
      padding-bottom: 3px;
    }
  .form-switch {
    width: 75px;
  }
  }
`;

// Input Fields
export const Label = styled.label`
  display: block;
  padding-bottom: 10px;
  width: ${props => props.width ? props.width : 'auto'};
`;

export const Input = styled.input`
  display: block;
  width: 100%;
  font-size: 16px;
  height: 20px;
  border-radius: 1px;
  border: 1px solid lightgrey;
  padding-left: 5px;
  &:disabled {
    border-color: white;
    background-color: whitesmoke;
  }
`;

export const Select = styled.select`
  display: block;
  width: 100%;
  font-size: 16px;
  height: 25px;
  border-radius: 1px;
  border: 1px solid lightgrey;
`;

export const TextArea = styled.textarea`
  display: block;
  width: 100%;
  min-width:100%;
  max-width:100%;
  height: 60px;
  border-radius: 1px;
  border: 1px solid lightgrey;
  &:disabled {
    border-color: white;
    background-color: whitesmoke;
  }
`;

export const CheckBox = styled.input`
`;

export const LeftColumn = styled.div`
  display: flex;
  width: 30%;
  flex-direction: column;
`;

export const RightColumn = styled.div`
  display: flex;
  width: 60%;
  flex-direction: column; 
  justify-content: space-between;
`;

export const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-wrap: wrap;
  img {
    width: 100%;
  }
  label {
    padding: 20px 0;
    input {
      margin: 10px 0;
      border: none;
      height: 24px;
    }
  }
  a {
    text-align: center;
    width: 100%;
    padding: 5px 0;
    background-color: whitesmoke;
  }
`;

export const Password = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const ContactInfo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const Location = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  .location-options {
    display: flex;
    width: 100%;
    justify-content: space-around;
  }
`;

export const Social = styled.div`
width: 100%;
`;

export const EditButtons = styled.button`
  height: 30px;
  padding: 0px 20px;
  background-color: rgb(184,15,10);
  color: white;
  border: none;
  border-radius: 2px;
  box-shadow: 0 4px 2px -2px gray;
  cursor: pointer;
  outline: none;
  &:hover {
    background-color: rgba(184,15,10,.8);
  }
  position: absolute;
  top: 20px;
  right: ${props => props.right}
`

