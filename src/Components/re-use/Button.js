import * as React from "react";

class Button extends React.Component{
  constructor(props) {
    super(props);
  }


  handleButtonClick = (e) => {

    this.props.handleButtonClick(e.target.value);
    // this.props.handleButtonClick(e.target.name);
  };

  render() {
    const btnIcon = this.props.val;
    const btnId = this.props.key;
    return (
      <div className="btn-component">
        <input type="button" onClick={this.handleButtonClick} key={btnId} value={btnIcon} />
      </div>

    );
  }
};
export default Button;