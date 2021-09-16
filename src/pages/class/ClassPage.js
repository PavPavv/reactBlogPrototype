import React, { Component } from 'react';

import PageTitle from '../../components/ui/PageTitle/PageTitle';
import ClassHocTest from '../../utils/HOC/testsComponents/classHocTest';
import FuncHocTest from '../../utils/HOC/testsComponents/funcHocTest';
import Clock from '../../components/class/Clock/Clock';

// import styles from './ClassPage.module.scss';

class ClassPage extends Component {
  constructor() {
    super();
    //console.log('constructor!')
  }

  // static getDerivedStateFromProps() {
  //   console.log('getDerivedStateFromProps')
  // }

  shouldComponentUpdate() {
    //console.log('shouldComponentUpdate');
  }

  componentDidMount() {
    //console.log('component did mount')
  }

  shouldComponentUpdate() {
    //console.log('shouldComponentUpdate')
  }

  getSnapshotBeforeUpdate() {
    //console.log('getSnapshotBeforeUpdate')
  }

  componentDidUpdate() {
    //console.log('componentDidUpdate');
  }

  componentWillUnmount() {
    //console.log('componentWillUnmount')
  }


  render() {
    //console.log('render')
    return (
      <>
        <PageTitle title="Класс" />
        <ClassHocTest />
        <FuncHocTest />
        <Clock />
      </>
    );
  }
}

export default ClassPage;
