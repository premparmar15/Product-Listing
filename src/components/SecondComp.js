import React, { Component } from 'react'
import { IncrementCountHOC } from '../HOCs/IncrementCounterHOC'

class SecondComp extends Component {
    
    render() {
        const {count, incrementCounter, name} = this.props
        return (
            <div>
                <h2 onMouseOver={incrementCounter}>Second Component Count is {count}. Name: {name}</h2>
            </div>
        )
    }
}

export default IncrementCountHOC(SecondComp)
