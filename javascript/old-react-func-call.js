class OldComponent extends React.Component {
  constructor() {
    super();
    this.state = { count: 0 };
  }

  handleClick() {
    console.log(this); // undefined!
  }

  render() {
    return <button onClick={this.handleClick}>Click</button>;
  }
}

// Solution
class OldComponent extends React.Component {
  constructor() {
    super();
    this.state = { count: 0 };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    console.log(this); // undefined!
  }

  render() {
    return <button onClick={this.handleClick}>Click</button>;
  }
}
