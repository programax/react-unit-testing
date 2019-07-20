import React, {Component} from 'react';

class Root extends Component {
    componentDidMount() {
        this.props.onTest('123');
    }

    render() {
        return (
            <div>
                testing
            </div>
        );
    }
}

export default Root;
