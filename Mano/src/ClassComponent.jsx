import React, { Component } from "react";

class ClassSample extends Component {
constructor(props) {
    super(props);

    this.state = {
    count: 0
    };
}

decrease = () => {
    this.setState({ count: this.state.count - 1 });
};

render() {
    return (
    <div>
        <h2>Hello {this.props.name}</h2>
        <h3>Count: {this.state.count}</h3>

        <button onClick={this.decrease}>
        DEcrease
        </button>
    </div>
    );
}
}

export default ClassSample;