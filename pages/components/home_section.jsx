import Image from "next/image"
import React from "react"

import profile from "../../assets/images/profile.png"

export default class HomeSection extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <div className="home__container">
                {/* <div className="guide__container">
                    <div className="guide__ball" />
                    <div className="guide__line" />
                </div> */}
                <div className="home__main-panel">
                    <div className="home__upper">
                        <div className="home__profile">
                            <div className="home__profile-intro">
                                <p>Hi! I'm <br /><span>Caleb Jones.</span></p>
                            </div>
                            <div className="home__profile-image">
                                <Image
                                    src={profile}
                                    objectFit="contain"
                                    priority="true"
                                />
                            </div>
                        </div>
                        <div className="home__blurbs">
                            <div className="home__upper-blurb">
                                <p>I am a full stack<br /><span>Software Engineer.</span></p>
                            </div>
                            <div className="home__lower-blurb">
                                <p>I build great <span>products</span> to create even better <span>experiences.</span></p>
                            </div>
                        </div>
                    </div>
                    <div className="home__lower">
                        <div className="home__lower-copy">
                            <div className="home__copy-left">
                                Multifaceted background in business, management, art, and computer science.
                            </div>
                            <div className="home__copy-right">
                                Deep knowledge of JavaScript, React, Redux, HTML5, CSS3, and more.
                            </div>
                        </div>
                        <div className="home__continue">
                            <p>Let's get started.</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}