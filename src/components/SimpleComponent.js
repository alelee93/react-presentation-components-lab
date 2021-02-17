// Code SimpleComponent Here

import React from 'react'

export default class SimpleComponent extends React.Component {
    state = {
        mood: "happy"
    }


    handleClick = () => {
        //debugger
        this.setState({
            mood: this.state.mood == 'sad' ? 'happy' : 'sad'
        })
    }

    render(){
        return(
            <div onClick={this.handleClick}>
                {this.state.mood}
            </div>
        )
    }
}