import React, {Component} from 'react';

export function Content(props) {
    return (
        <div>
            <h1>Content</h1>
            {props.render({value: 1})}
        </div>
    );
}

export const withValue = (value) => (OriginalComponent) => (props) => (
    <OriginalComponent {...props} value={value} />
);

class App extends Component {
    componentDidMount() {
        this.props.onTest('123');
    }

    render() {
        return (
            <div>
                <h1>Testing</h1>
                <Content
                    render={(props) => (
                        <span>{props.value}</span>
                    )}
                />
            </div>
        );
    }
}

export default App;
