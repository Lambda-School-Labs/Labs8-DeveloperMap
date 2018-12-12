import React from 'react';
import firebase from '../../firebase/firebase';
import Favorite from './Favorite';
import styled from 'styled-components';
import { ModalContainer, ModalMain } from '../../styles/ModalGlobalStyle';
import axios from 'axios';
import { Loading } from '../../reducer';

class SeekerFavorites extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      favorites: [],
      loading: true,
    };
  }

  componentDidMount() {
    let uid = this.props.match.params.seekerId;
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        uid = user.uid;
      }
    });
    axios
      .get(
        `https://intense-stream-29923.herokuapp.com/api/database/favorites/${uid}`
        //`http://localhost:9000/api/database/favorites/${uid}`
      )
      .then(response => {
        console.log(response.data);
        response.data.forEach(job => console.log(job));
        this.setState({ favorites: response.data, loading: false });
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <>
        {this.state.loading ? (
          <Loading />
        ) : (
          <ModalContainer data-type="modal-container">
            <ModalMain
              className="modal"
              style={{ maxWidth: '725px', padding: '1%', borderRadius: '25px' }}
            >
              <h1 style={{ textAlign: 'center' }}>Favorite Jobs</h1>
              <Fav>
                {this.state.favorites.length < 1 && <h1>No Favorites</h1>}
                {this.state.favorites.map((favorite, i) => (
                  <Favorite key={i} {...this.props} favorite={favorite} />
                ))}
              </Fav>
            </ModalMain>
          </ModalContainer>
        )}
      </>
    );
  }
}

const Fav = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  max-width: 725px;
  width: 100%;
`;

export default SeekerFavorites;
