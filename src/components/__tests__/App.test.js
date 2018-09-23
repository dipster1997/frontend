import Adapter from 'enzyme-adapter-react-16';
import Enzyme from 'enzyme';
import React from 'react';
import ReactDOM from 'react-dom'
import App from '../App'
import {shallow} from 'enzyme';
import Signup from '../Signup'

Enzyme.configure({ adapter: new Adapter() });

it('has signup component',()=>{
    const wrapped = shallow(<App />);
    expect(wrapped.find(Signup).length).toEqual(1);
});
