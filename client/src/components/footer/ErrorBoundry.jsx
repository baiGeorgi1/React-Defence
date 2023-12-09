import { Component } from "react";

export default class ErrorBoundary extends Component {
  constructor() {
    super();
    this.state = {
      hasError: false,
    };
  }
  //static method
  static getDerivedStateFromError(err) {
    return {
      hasError: true,
    };
  }
  //live-cycle method

  componentDidCatch(error, errorInfo) {}
  render() {
    if (this.state.hasError) {
      return <h1>404 Error</h1>;
    }
    return this.props.children;
  }
}
