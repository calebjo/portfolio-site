import React from 'react'
import styles from '../../styles/Home.module.css'

export default class Hamburger extends React.Component {
    constructor(props){
        super(props)
        this.state = { 
            toggled: false,
            fade: false
        }
        this.toggleDropdown = this.toggleDropdown.bind(this)
    }

    toggleDropdown(event){
        if (this.state.toggled) {
            this.setState({
                fade: true
            })
            setTimeout(() => {
                this.setState({
                    fade: false,
                    toggled: false
                })
            }, 75)
        } else {
            this.setState({
                toggled: true
            })
        }
    }
    
    hoverDropdown(event){
        event.currentTarget.parentNode.classList.toggle("hovered")
    }

    render(){
        const navClasses = this.state.toggled ? (
            this.state.fade ? (
                'nav-dropdown toggled fade'
            ) : (
                'nav-dropdown toggled'
            )
        ) : (
            'nav-dropdown'
        )
        return (
            <div className={navClasses}>
                <div className="dropdown-container">
                    <a href="#home" onClick={this.toggleDropdown}><span>Home</span></a>
                    <div className="dropdown-link-separator" />
                    <a href="#skills" onClick={this.toggleDropdown}><span>Skills</span></a>
                    <div className="dropdown-link-separator" />
                    <a href="#projects" onClick={this.toggleDropdown}><span>Projects</span></a>
                    <div className="dropdown-link-separator" />
                    <a href="#contact" onClick={this.toggleDropdown}><span>Contact</span></a>
                    <div className="dropdown-link-separator" />
                </div>
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
            </div>
            
        )
    }
}