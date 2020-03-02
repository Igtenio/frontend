import React, { Component } from 'react';

export default class Footer extends Component {
  render() {
    return (
      <footer className="footer mt-auto py-2 page-footer text-right border-top">
        <small>
          Copyright &copy; {new Date().getFullYear()} mixnjuice.com. Recipes are
          property of their respective creators.
        </small>
      </footer>
    );
  }
}
