import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import './styles.css';

import { loadAppData, getSubscriptions } from '../../Redux/Actions/appActions';

const App = ({ top, subscriptions, loadData, gesUserSubscriptions }) => {
  useEffect(() => {
    /*const interval = setInterval(() => {
      loadData();
    }, 2000);
    return () => clearInterval(interval);*/
    //loadData();

    gesUserSubscriptions();
  });

  return (
    <main>
      <h1>First 20 items of data</h1>
      {/*<div className="top-game-wrap">*/}
      {/*  {data.map((item) => (*/}
      {/*    <div className="top-game" key={item.id}>*/}
      {/*      <a href={`https://www.twitch.tv/directory/game/${item.name}`}>*/}
      {/*        <h2 className="top-game__name">{item.name}</h2>*/}
      {/*        <img className="top-game__image" src={item.box_art_url.replace('{width}x{height}', '200x300')} alt={item.name} />*/}
      {/*      </a>*/}
      {/*    </div>*/}
      {/*  ))}*/}
      {/*</div>*/}
    </main>
  );
};

App.propTypes = {
  top: PropTypes.arrayOf(PropTypes.any),
  subscriptions: PropTypes.arrayOf(PropTypes.any),
  loadData: PropTypes.func.isRequired,
  gesUserSubscriptions: PropTypes.func.isRequired,
};

App.defaultProps = {
  top: [],
  subscriptions: [],
};

const mapStateToProps = (state) => ({ top: state.top, subscriptions: state.subscriptions });
const mapDispatchToProps = (dispatch) => ({
  loadData: () => dispatch(loadAppData()),
  gesUserSubscriptions: () => dispatch(getSubscriptions()),
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
