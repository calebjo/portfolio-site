
export default class Hamburger extends React.Component {
    constructor(props){
        super(props)
        this.state = { toggled: false }
    }

    toggleDropdown(event){
        console.log("In toggleDropdown()")
        event.currentTarget.classList.toggle(styles.toggled)
        this.state.toggled = true
    }
    
    hoverDropdown(event){
        console.log("In hoverDropdown()")
        event.currentTarget.classList.toggle(styles.hovered)
    }

    render(){
        return (
            <div 
                className={styles.hamburger} 
                onClick={this.toggleDropdown} 
                onMouseEnter={this.hoverDropdown}
                onMouseLeave={this.hoverDropdown}
            >
                <div className={styles.bar1}></div>
                <div className={styles.bar2}></div>
                <div className={styles.bar3}></div>
            </div>
        )
    }
}