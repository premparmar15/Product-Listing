import React, { Component } from 'react'
import { IncrementCountHOC } from '../HOCs/IncrementCounterHOC'

class FirstComp extends Component {
   
    render() {
        const {count, incrementCounter, name} = this.props
        return (
            <div>
                <h2 onMouseOver={incrementCounter}>First Component count is {count}. Name: {name}</h2>
            </div>
        )
    }
}

export default IncrementCountHOC(FirstComp)
