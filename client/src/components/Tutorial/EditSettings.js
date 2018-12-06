import React from 'react';
import styled from 'styled-components';


class EditSettings extends React.Component{
    switchPage = () => {
        this.props.history.push('/');
    }
    render() {
    return (
        <SettingsGuide>
           <h1>Edit Settings</h1>
           <p>To edit your profile settings and change your information, click on the cog in the top 
               right of your screen.
           </p>
           <h1>Picture goes here</h1>
           <p>Then hit edit in the top right corner of the modal. Make sure you hit the save button before 
               closing, or your new settings will not be saved.
           </p>
           <h1>Picture goes here</h1>
           <Next onClick={this.switchPage}>Done</Next>
        </SettingsGuide>
    );
    }
}

const SettingsGuide = styled.div`
  padding: 5%;
`;

const Next = styled.button`
  width: 100px;
  border: none;
  border-radius: 25px;
  background-color: rgba(109, 7, 26, .95);
  cursor: pointer;
  outline: none;
  height: 30px;
  color: white;
  box-shadow: 0 4px 2px -2px gray;
  &:hover {
    background-color: rgba(109, 7, 26, .75);
  }
`;

export default EditSettings;