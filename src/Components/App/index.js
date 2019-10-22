import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import './styles.css';

import { loadTopGamesData, getSubscriptions, userAuthAction } from '../../Redux/Actions/appActions';

const App = ({ isAutorized, top, subscriptions, loadTopGames, gesUserSubscriptions, userAuth }) => {
  useEffect(() => {
    loadTopGames();

    if (isAutorized) getSubscriptions();
  });

  return (
    <main>
      <header>
        <h1>Twitch App</h1>
      </header>
      {isAutorized
        ? <a href={`https://id.twitch.tv/oauth2/authorize?client_id=${process.env.REACT_APP_TWITCH_API_CLIENT_ID}&redirect_uri=http://localhost:5000/api/auth&response_type=code&scope=channel:read:subscriptions`} onClick={() => userAuth(true)}>Authorize</a>
        : (
          <section className="twitch-app-content">
            <div className="text-content">TEXT</div>
            <div className="subscriptions">
              {subscriptions.map((item) => (
                <div className="top-game" key={item.id}>
                  <a href={`https://www.twitch.tv/directory/game/${item.name}`} target="_blank" rel="noopener noreferrer">
                    <h2 className="top-game__name">{item.name}</h2>
                    <img className="top-game__image" src={item.box_art_url.replace('{width}x{height}', '200x300')} alt={item.name} />
                  </a>
                </div>
              ))}
            </div>
            <div className="top-game-widget">
              <h2>TOP 10</h2>
              <div className="top-game-wrap">
                {top.map((item) => (
                  <div className="top-game" key={item.id}>
                    <a href={`https://www.twitch.tv/directory/game/${item.name}`} target="_blank" rel="noopener noreferrer">
                      <h3 className="top-game__name">{item.name}</h3>
                      <img className="top-game__image" src={item.box_art_url.replace('{width}x{height}', '200x300')} alt={item.name} />
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )
      }
    </main>
  );
};

App.propTypes = {
  top: PropTypes.arrayOf(PropTypes.any),
  subscriptions: PropTypes.arrayOf(PropTypes.any),
  isAutorized: PropTypes.bool.isRequired,
  loadTopGames: PropTypes.func.isRequired,
  gesUserSubscriptions: PropTypes.func.isRequired,
  userAuth: PropTypes.func.isRequired,
};

App.defaultProps = {
  top: [],
  subscriptions: [],
};

const mapStateToProps = (state) => ({
  top: state.top,
  subscriptions: state.subscriptions,
  isAutorized: state.isAutorized,
});

const mapDispatchToProps = (dispatch) => ({
  userAuth: (isAuth) => dispatch(userAuthAction(isAuth)),
  loadTopGames: () => dispatch(loadTopGamesData()),
  gesUserSubscriptions: () => dispatch(getSubscriptions()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
