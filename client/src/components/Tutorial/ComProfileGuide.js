import React from 'react';
import company from '../../images/markerlogo4.png';
import jobs from '../../images/jobs.PNG';
import fav from '../../images/favicon.PNG';

import { TutorialStyle, Next } from './TutorialStyle';

class ComProfileGuide extends React.Component {
  switchPage = () => {
    this.props.history.push('/tutorial/editsettings');
  };
  render() {
    return (
      <TutorialStyle>
        <h1>Employer Profile</h1>
        <p>
          By clicking on a{' '}
          <span>
            <img src={company} alt="" style={{ width: '50px' }} />
          </span>{' '}
          marker on the map, you will be brought to that companies profile. You
          will see some general contact information for that company, as well as
          any jobs they have posted. By clicking the heart affiliated with each
          job.
        </p>
        <img src={jobs} alt="" />
        <p>
          To find jobs that have been favorited by you, click on the favorites
          icon on the Nav bar at the top of the screen.
        </p>
        <img src={fav} alt="" className="fav" />
        <Next onClick={this.switchPage}>Next</Next>
      </TutorialStyle>
    );
  }
}

export default ComProfileGuide;
