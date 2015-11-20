import React from 'react';
import { render } from 'react-dom';
import $$ from 'dom7';

require('../public/lib/framework7/dist/css/framework7.material.min.css');
require('../public/lib/framework7/dist/css/framework7.material.colors.min.css');
// require('../public/lib/framework7/dist/js/framework7.min.js');

import Root from './containers/Root';
import configureStore from './store/configureStore';
import NewPage from './containers/NewPage';

const store = configureStore();

$$(document).on('pageBeforeInit', (e) => {
  let page = e.detail.page;
  switch (page.name) {
    case 'new':
      render(
        <NewPage store={store}/>,
        document.getElementById('new')
      );
  }
});

render(
  <Root store={store} />,
  document.getElementById('root')
);
