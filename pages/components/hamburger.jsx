import React from 'react'
import styles from '../../styles/Home.module.css'

export default class Hamburger extends React.Component {
    constructor(props){
        super(props)
        this.state = { toggled: false }
        this.toggleDropdown = this.toggleDropdown.bind(this)
    }

    toggleDropdown(event){
        event.currentTarget.parentNode.classList.toggle("toggled")
        this.setState({
            toggled: true
        })
    }
    
    hoverDropdown(event){
        event.currentTarget.parentNode.classList.toggle("hovered")
    }

    render(){
        return (
            <div className="nav-dropdown">
                <div 
                    className="hamburger"
                    onClick={this.toggleDropdown} 
                    onMouseEnter={this.hoverDropdown}
                    onMouseLeave={this.hoverDropdown}
                >
                    <div className="bar1"></div>
                    <div className="bar2"></div>
                    <div className="bar3"></div>
                </div>
                <div className="dropdown-container">
                    <a href="#home">Home</a>
                    <a href="#skills">Skills</a>
                    <a href="#projects">Projects</a>
                    <a href="#contact">Contact</a>
                </div>
            </div>
            
        )
    }
}