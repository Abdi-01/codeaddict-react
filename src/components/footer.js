import React, { Component } from 'react';
import '../assets/footer.css'
class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        const { edu, prof, exp, pub} = this.props
        return (
            <div style={{ position: 'fixed',top:'50vh', right:'-22.6vw', width: '51vw', height:'0vh',transform: "rotate(270deg)" }}>
                <div className="text-center" style={{ fontWeight:'bold' }}>
                    <a className="bt-nav" href={"#" + pub}> Publication </a>
                    <a className="bt-nav" href={"#" + exp}> Experiences and Awards </a>
                    <a className="bt-nav" href={"#" + edu}> Education</a>
                    <a className="bt-nav" href={"#" + prof}>Profile</a>
                </div>
            </div>
        );
    }
}

export default Footer;