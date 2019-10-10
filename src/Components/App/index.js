import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import './styles.css';

import loadAppData from '../../Redux/Actions/appActions';

const App = ({ data, loadData }) => {
  useEffect(() => {
    loadData();
  }, [data]);

  return (
    <div className="App">
      <h1>First 20 items of data</h1>
      {data.map((item) => <div key={item.id}>{item.id}</div>)}
    </div>
  );
};


App.propTypes = {
  data: PropTypes.arrayOf(PropTypes.any),
  loadData: PropTypes.func.isRequired,
};

App.defaultProps = {
  data: [],
};

const mapStateToProps = (state) => ({ data: state.data });
const mapDispatchToProps = (dispatch) => ({
  loadData: () => dispatch(loadAppData()),
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
