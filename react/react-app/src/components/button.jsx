import React from "react";

// Class component with lifecycle methods
class Button extends React.Component {
  componentDidMount() {
    console.log("Button component mounted");
  }

  componentDidUpdate(prevProps) {
    console.log("Button component updated");
    console.log("Previous props: ", prevProps);
  }

  componentWillUnmount() {
    console.log("Button component will unmount");
  }

  render() {
    return (
      <button
        type="button"
        className="cursor-pointer rounded border border-gray-400 bg-gray-100 px-4 py-1.5 text-base transition-all duration-300 hover:bg-gray-200 hover:font-extrabold"
        onClick={this.props.onClick}
      >
        {this.props.buttonText}
      </button>
    );
  }
}

export default Button;
