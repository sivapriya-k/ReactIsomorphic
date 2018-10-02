import React, {Component} from 'react';
import "isomorphic-fetch";

class Test extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data : props.data
        };
        this.handleClick = this.handleClick.bind(this);
    }

    render() {
        return (
            <div>
                <div>Testing server side rendering!</div>
                <div>{JSON.stringify(this.state.data)}</div>
                <button onClick={this.handleClick}>Click me!</button>
            </div>
        )
    }

    handleClick () {
        alert('div clicked!');
    }
}

export default Test;