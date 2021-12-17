import React from 'react'

export const IncrementCountHOC = (WrappedComp) => {
    
    class EnhancedComp extends React.Component {
        constructor(props){
            super();
            this.state = {
                count: 0
            }
        }
        incrementCounter = () => {
            this.setState({count: this.state.count+1})
        }
        render() {
            return (
                <WrappedComp count={this.state.count} incrementCounter={this.incrementCounter} {...this.props}/>
            )
        }
    }

    return EnhancedComp;
}