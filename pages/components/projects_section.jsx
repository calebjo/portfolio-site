import React from "react"

export default class ProjectsSection extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <div className="projects__container">
                <div className="projects__header">
                    Projects
                </div>
                <div className="project__wrapper">
                    <div className="project__media">
                        <div className="project__links">
                            <a href="https://github.com/calebjo/quizard">GitHub</a>
                            <a href="https://quizard-aa.herokuapp.com/#/">Live</a>
                        </div>
                        <video autoPlay loop 
                            style={{width: '100%', height: '100%'}}
                            src={require('../../assets/videos/quizard-demo.mp4')}>
                        </video>
                    </div>
                    <div className="project__info">
                        <div className="project__title">
                            Quizard
                        </div>
                        <div className="project__title-separator" />
                        <div className="project__subtitle">
                            A full stack quiz application where users can make their own quiz sets and play online with their friends! Features full multiplayer with live chat. 
                        </div>
                        <div className="project__languages">
                            MongoDB, Express, React/Redux, Node.js, Socket.io
                        </div>
                    </div>
                </div>
                <div className="project__wrapper">
                    <div className="project__media">
                        <div className="project__links">
                            <a href="https://github.com/calebjo/willow">GitHub</a>
                            <a href="https://willow-aa.herokuapp.com/#/">Live</a>
                        </div>
                        <video autoPlay loop 
                            style={{width: '100%', height: '100%'}}
                            src={require('../../assets/videos/willow-demo.mp4')}>
                        </video>
                    </div>
                    <div className="project__info">
                        <div className="project__title">
                            Willow
                        </div>
                        <div className="project__title-separator" />
                        <div className="project__subtitle">
                            A full stack clone of Zillow. Users can explore a map of properties, save those they like to their profile, or even upload their own with real geocoded addresses.
                        </div>
                        <div className="project__languages">
                            React/Redux, Ruby on Rails, AWS, Google APIs
                        </div>
                    </div>
                </div>
                <div className="project__wrapper">
                    <div className="project__media">
                        <div className="project__links">
                            <a href="https://github.com/calebjo/arcanopoly">GitHub</a>
                            <a href="https://calebjo.github.io/arcanopoly/">Live</a>
                        </div>
                        <video autoPlay loop 
                            style={{width: '100%', height: '100%'}}
                            src={require('../../assets/videos/arcanopoly-demo.mp4')}>
                        </video>
                    </div>
                    <div className="project__info">
                        <div className="project__title">
                            Arcanopoly
                        </div>
                        <div className="project__title-separator" />
                        <div className="project__subtitle">
                            A unique "roguelike" spin on the classic board game made with pure JavaScript in 6 days. Uses minimal libraries and features fully custom card assets designed from scratch.
                        </div>
                        <div className="project__languages">
                            JavaScript, HTML5, CSS3
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}