import Image from "next/image"
import React from "react"

import aws from "../../assets/images/aws.png"
import css from "../../assets/images/css.png"
import express from "../../assets/images/express.png"
import git from "../../assets/images/git.png"
import github from "../../assets/images/github.png"
import html from "../../assets/images/html.png"
import maps from "../../assets/images/maps.png"
import mongo from "../../assets/images/mongo.png"
import node from "../../assets/images/node.png"
import psql from "../../assets/images/psql.png"
import rails from "../../assets/images/rails.png"
import react from "../../assets/images/react.png"
import redux from "../../assets/images/redux.png"
import ruby from "../../assets/images/ruby.png"
import socket from "../../assets/images/socket.png"

export default class SkillsSection extends React.Component {
    constructor(props) {
        super(props)
    }
    
    render() {
        return(
            <div className="skills__container">
                <div className="skills__panel">
                    <div className="skills__left">
                        <div className="skills__list technologies">
                            <div className="skills__list-grid tech-grid">
                                <div className="skills__list-item">
                                    <Image
                                        src={react}
                                    />
                                </div>
                                <div className="skills__list-item">
                                    <Image
                                        src={redux}
                                    />
                                </div>
                                <div className="skills__list-item">
                                    <Image
                                        src={ruby}
                                    />
                                </div>
                                <div className="skills__list-item">
                                    <Image
                                        src={rails}
                                    />
                                </div>
                                <div className="skills__list-item">
                                    <Image
                                        src={psql}
                                    />
                                </div>
                                <div className="skills__list-item">
                                    <Image
                                        src={mongo}
                                    />
                                </div>
                                <div className="skills__list-item">
                                    <Image
                                        src={node}
                                    />
                                </div>
                                <div className="skills__list-item">
                                    <Image
                                        src={aws}
                                    />
                                </div>
                                <div className="skills__list-item">
                                    <Image
                                        src={express}
                                    />
                                </div>
                                <div className="skills__list-item">
                                    <Image
                                        src={html}
                                    />
                                </div>
                                <div className="skills__list-item">
                                    <Image
                                        src={css}
                                    />
                                </div>
                                <div className="skills__list-item">
                                    <Image
                                        src={git}
                                    />
                                </div>
                                <div className="skills__list-item">
                                    <Image
                                        src={github}
                                    />
                                </div>
                                <div className="skills__list-item">
                                    <Image
                                        src={socket}
                                    />
                                </div>
                                <div className="skills__list-item">
                                    <Image
                                        src={maps}
                                    />
                                </div>
                            </div>
                            <div className="skills__list-header">
                                <p>Technologies/Tools</p>
                            </div>
                        </div>
                        <div className="skills__line-box">

                        </div>
                    </div>
                    <div className="skills__right">
                        <div className="skills__list processes">
                            <div className="skills__list-grid process-grid">
                                <div className="skills__list-item">
                                    
                                </div>
                                <div className="skills__list-item">
                                    
                                </div>
                                <div className="skills__list-item">
                                    
                                </div>
                                <div className="skills__list-item">
                                    
                                </div>
                            </div>
                            <div className="skills__list-header">
                                <p>Methodologies/Processes</p>
                            </div>
                        </div>
                        <div className="skills__line-box">
                            
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}