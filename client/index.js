import React,{Component} from "react";
import ReactDOM from 'react-dom';
import MainRoute from './routes/routes';
import {Provider} from 'react-redux';
import store from '../store';

ReactDOM.render(<Provider store={store}><MainRoute/> </Provider>,document.getElementById('root'));
