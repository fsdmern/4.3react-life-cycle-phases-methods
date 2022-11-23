import React from 'react';
class HeaderUpdating extends React.Component {
  constructor(props) {
    super(props);
    this.state = {favouritecolor: 'red'};
    console.log('I am inside constructor: ' + this.state.favouritecolor);
  }

  //   static getDerivedStateFromProps(props, state) {
  //     console.log('Inside getDerivedStateFromProps :' + props.favcol);
  //     return {favouritecolor: props.favcol};
  //   }

  componentDidMount(props) {
    setTimeout(() => {
      this.setState({favouritecolor: 'blue'});
    }, 2000);
    console.log('I am inside componentDidMount' + this.state.favouritecolor);
  }

  getSnapshotBeforeUpdate(prevProps,prevState) {
    document.getElementById('div1').innerHTML =
      'The before update favourite color is: ' + prevState.favouritecolor;
  }

  componentDidUpdate() {
    document.getElementById('div2').innerHTML =
      'After update favourite color is: ' + this.state.favouritecolor;
  }
  //   shouldComponentUpdate() {
  //     return false
  //   }

  changeColor = () => {
    this.setState({favouritecolor: 'yellow'});
  };

  render() {
    return (
      <div>
        <h2>I am inside Header</h2>
        <h3>My Favourite Color is {this.state.favouritecolor}</h3>
        <div id="div1"></div>
        <div id="div2"></div>
        <button type="button" onClick={this.changeColor}>
          Change Color
        </button>
      </div>
    );
  }
}

export default HeaderUpdating;
