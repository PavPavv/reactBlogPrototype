import React, { Component } from 'react';

const withDataFetching = props => WrappedComponent => {
  class WithDataFetching extends Component {
    constructor() {
      super();
      this.state = {
        results: [],
        loading: true,
        error: '',
      }
    }

    async fetchData() {
      try {
        this.setState({
          loading: true,
        })
        const data = await fetch(props.dataSource);
        const json = await data.json();

        if (json) {
          this.setState({
            results: json,
            loading: false,
          });
        }
      } catch (err) {
        this.setState({
          loading: false,
          error: err.message,
        });
      }
    }

    async componentDidMount() {
      this.fetchData();
    }

    render() {
      const { results, loading, error } = this.state;


      return (
        <WrappedComponent
          results={results}
          loading={loading}
          error={error}
          {...this.props}
        />
      );
    }
  }

  WithDataFetching.displayName = `WithDataFetching(${WrappedComponent.name})`;

  return WithDataFetching;
}

// экспорт функции, которая вызывает функцию, которая возвращает класс, 
// который возвращает переданный аргументом второй функции компонент
export default withDataFetching;