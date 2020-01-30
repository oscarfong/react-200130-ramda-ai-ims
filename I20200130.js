import React, { Component } from 'react';

import * as R from 'ramda';

import {Button,Table,}  from 'react-bootstrap';
//  InputGroup , FormControl

class I20200130 extends Component{
  constructor() {
    super();
  }

  getRes() {
    return ["SMT", "EBT", "NBT", "GVT",  ];
  }

  render() {
    
    // const xpwd2 = this.getXProdWithScore();

    return<div>
    {this.getRes()}
    <br/>
    i20200130  </div>

    
  }
  
}


export default I20200130 ;