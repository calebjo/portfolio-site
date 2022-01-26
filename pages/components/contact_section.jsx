import React from "react"

export default class ContactSection extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return(
            <div className="contact__container">
                <div className="contact__form-header">
                    Get in touch
                </div>
                <div className="contact__form">
                    <div className="contact__form-info">
                        {/* <div className="contact__name">

                        </div>
                        <div className="contact__email">
                            
                        </div>
                        <div className="contact__message">
                            
                        </div> */}
                    </div>
                    <div className="contact__form-socials">
                        <a href="https://www.linkedin.com/in/caleb-jones-928521126/">LinkedIn</a>
                        <a href="https://github.com/calebjo">GitHub</a>
                        <a href="https://angel.co/u/caleb-jones-15">AngelList</a>
                    </div>
                </div>
            </div>
        )
    }
}