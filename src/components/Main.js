require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import { connect } from 'react-redux'
import Synthesizer from './Synthesizer/Synthesizer';

let AppComponent = () => {
  return (
    <div className="index">
      <Synthesizer />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    appName: state.appName
  };
}

AppComponent = connect(mapStateToProps)(AppComponent)

export default AppComponent;
