import Adapter from 'enzyme-adapter-react-16';
import Enzyme from 'enzyme';
import React from 'react';
import ReactDOM from 'react-dom'
import {unmount, mount} from 'enzyme';
import Signup from '../Signup'

Enzyme.configure({ adapter: new Adapter() });

let wrapped;

beforeEach(()=>{
    wrapped = mount(<Signup />);
});

afterEach(()=>{
    wrapped.unmount();
});

it('has at least two inputs', ()=>{
  expect(wrapped.find('input').length).toBeGreaterThanOrEqual(2);
});

