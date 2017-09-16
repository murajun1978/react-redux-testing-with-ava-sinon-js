import test from 'ava';
import React from 'react';
import {shallow} from 'enzyme';

import App from '.';

test('Display heading title', t => {
  const wrapper = shallow(<App />);
  t.true(wrapper.contains(<h1>Hello VAV + Sinon.js</h1>));
});
