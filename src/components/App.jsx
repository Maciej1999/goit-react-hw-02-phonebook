import React, { Component } from 'react';
import { Phonebook } from './Phonebook/Phonebook';

export class App extends Component {
  render() {
    return (
      <div className="app">
        <Phonebook />
      </div>
    );
  }
}
