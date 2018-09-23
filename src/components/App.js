import React, { Component } from 'react';
import { Nav } from '../common/Nav';
import { Home } from './Home';
import { Login } from './Login';
import { connect } from 'react-redux';
import SignUp from "./Signup";
import { Route } from 'react-router-dom'
import '../App.css';


export default ()=>{
    return (
        <div>
            <SignUp />
        </div>
    );
  }

