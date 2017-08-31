import React, { Component } from 'react'

/*
函数式编程

function hello (props) {
    const { style, children } = props;
    return (
        <h1
            style = { style }
        >
            { children }
        </h1>
    );
}
 */

class hello extends Component {
    render (){
        const { children , style} = this.props;
        return (
            <h1 style = { style }>
                { children }
            </h1>
        )
    }
}

export default hello