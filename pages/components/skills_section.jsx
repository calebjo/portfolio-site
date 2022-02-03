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

import agile from "../../assets/images/process-agile.png"
import waterfall from "../../assets/images/process-waterfall.png"
import tdd from "../../assets/images/process-tdd.png"
import bem from "../../assets/images/process-bem.png"

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
                                        alt="Tech Icon"
                                        loading="eager"
                                        onLoadingComplete={this.props.increaseLoadedImages}
                                        src={react}
                                    />
                                </div>
                                <div className="skills__list-item">
                                    <Image
                                        alt="Tech Icon"
                                        loading="eager"
                                        onLoadingComplete={this.props.increaseLoadedImages}
                                        src={redux}
                                    />
                                </div>
                                <div className="skills__list-item">
                                    <Image
                                        alt="Tech Icon"
                                        loading="eager"
                                        onLoadingComplete={this.props.increaseLoadedImages}
                                        src={ruby}
                                    />
                                </div>
                                <div className="skills__list-item">
                                    <Image
                                        alt="Tech Icon"
                                        loading="eager"
                                        onLoadingComplete={this.props.increaseLoadedImages}
                                        src={rails}
                                    />
                                </div>
                                <div className="skills__list-item">
                                    <Image
                                        alt="Tech Icon"
                                        loading="eager"
                                        onLoadingComplete={this.props.increaseLoadedImages}
                                        src={psql}
                                    />
                                </div>
                                <div className="skills__list-item">
                                    <Image
                                        alt="Tech Icon"
                                        loading="eager"
                                        onLoadingComplete={this.props.increaseLoadedImages}
                                        src={mongo}
                                    />
                                </div>
                                <div className="skills__list-item">
                                    <Image
                                        alt="Tech Icon"
                                        loading="eager"
                                        onLoadingComplete={this.props.increaseLoadedImages}
                                        src={node}
                                    />
                                </div>
                                <div className="skills__list-item">
                                    <Image
                                        alt="Tech Icon"
                                        loading="eager"
                                        onLoadingComplete={this.props.increaseLoadedImages}
                                        src={aws}
                                    />
                                </div>
                                <div className="skills__list-item">
                                    <Image
                                        alt="Tech Icon"
                                        loading="eager"
                                        onLoadingComplete={this.props.increaseLoadedImages}
                                        src={express}
                                    />
                                </div>
                                <div className="skills__list-item">
                                    <Image
                                        alt="Tech Icon"
                                        loading="eager"
                                        onLoadingComplete={this.props.increaseLoadedImages}
                                        src={html}
                                    />
                                </div>
                                <div className="skills__list-item">
                                    <Image
                                        alt="Tech Icon"
                                        loading="eager"
                                        onLoadingComplete={this.props.increaseLoadedImages}
                                        src={css}
                                    />
                                </div>
                                <div className="skills__list-item">
                                    <Image
                                        alt="Tech Icon"
                                        loading="eager"
                                        onLoadingComplete={this.props.increaseLoadedImages}
                                        src={git}
                                    />
                                </div>
                                <div className="skills__list-item">
                                    <Image
                                        alt="Tech Icon"
                                        loading="eager"
                                        onLoadingComplete={this.props.increaseLoadedImages}
                                        src={github}
                                    />
                                </div>
                                <div className="skills__list-item">
                                    <Image
                                        alt="Tech Icon"
                                        loading="eager"
                                        onLoadingComplete={this.props.increaseLoadedImages}
                                        src={socket}
                                    />
                                </div>
                                <div className="skills__list-item">
                                    <Image
                                        alt="Tech Icon"
                                        loading="eager"
                                        onLoadingComplete={this.props.increaseLoadedImages}
                                        src={maps}
                                    />
                                </div>
                            </div>
                            <div className="skills__list-header">
                                <p>Technologies/Tools</p>
                            </div>
                        </div>
                        <div className="skills__line-box" />
                    </div>
                    <div className="skills__right">
                        <div className="skills__list processes">
                            <div className="skills__list-grid process-grid">
                                <div className="skills__list-item">
                                    <Image
                                        alt="Process Icon"
                                        loading="eager"
                                        onLoadingComplete={this.props.increaseLoadedImages}
                                        src={agile}
                                    />
                                </div>
                                <div className="skills__list-item">
                                    <Image
                                        alt="Process Icon"
                                        loading="eager"
                                        onLoadingComplete={this.props.increaseLoadedImages}
                                        src={waterfall}
                                    />
                                </div>
                                <div className="skills__list-item">
                                    <Image
                                        alt="Process Icon"
                                        loading="eager"
                                        onLoadingComplete={this.props.increaseLoadedImages}
                                        src={tdd}
                                    />
                                </div>
                                <div className="skills__list-item">
                                    <Image
                                        alt="Process Icon"
                                        loading="eager"
                                        onLoadingComplete={this.props.increaseLoadedImages}
                                        src={bem}
                                    />
                                </div>
                            </div>
                            <div className="skills__list-header">
                                <p>Methodologies/Processes</p>
                            </div>
                        </div>
                        <div className="skills__line-box" />
                    </div>
                </div>
            </div>
        )
    }
}