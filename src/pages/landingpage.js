import React from 'react';
import Navbar from '../components/navbar'
import '../assets/sidebar.css'
import { MDBModal, MDBModalBody } from "mdbreact";

class LandingPage extends React.Component {

    state = {
        isOpen: false
    }

    toggleModal = () => {
        this.setState({ isOpen: !this.state.isOpen });
    }

    renderAbout = () => {
        return (
            <div>
                <MDBModal isOpen={this.state.isOpen} toggle={this.toggleModal} size="lg">
                    <MDBModalBody className="text-justify">
                        <p >Orang yang berusaha untuk menghasilkan sesuatu secara maksimal,
                        berfikir untuk menghasilkan produk yang memudahkan pengguna, orang yang menghargai sebuah proses,
                        mencoba mempelajari banyak hal baru dan berlatar belakang Sarjana Teknik Komputer.
                        Memiliki minat dalam pengembangan teknologi aplikasi mobile (React Native), website (ReactJs) dan IoT.
                        Mampu bekerjasama dalam team.
                        </p>
                        <p>•	Mampu menggunakan Bahasa premrogaman <abbr title='attribute' style={{ color: '#00CCFF' }}>Javascript</abbr>, <abbr title='attribute' style={{ color: '#00CCFF' }}>HTML</abbr>, <abbr title='attribute' style={{ color: '#00CCFF' }}>CSS</abbr> dan pernah mempelajari <abbr title='attribute' style={{ color: '#00CCFF' }}> C++</abbr>, <abbr title='attribute' style={{ color: '#00CCFF' }}>Java</abbr> serta <abbr title='attribute' style={{ color: '#00CCFF' }}>Python</abbr>.</p>
                        <p>•	Memiliki penguasaan Framework pembuatan aplikasi menggunakan <abbr title='attribute' style={{ color: '#00CCFF' }}>ReactJS</abbr> dan <abbr title='attribute' style={{ color: '#00CCFF' }}>React Native</abbr>.</p>
                        <p>•	Memiliki pengalaman dalam pengembangan aplikasi native mobile yang tekoneksi pada hardware.</p>
                        <p>•	Bertanggung jawab, semangat untuk belajar, senang mengkesplorasi dan berfikir secara logic serta kreatif.</p>
                        <p>•	Seseorang yang aktif dan mampu berkoordinasi.</p>
                    </MDBModalBody>
                    <a href='../file/CVabdi.pdf' className="bt-download-cv" style={{ textAlign: 'center', color: 'white' }} download>Download Curriculum Vitae</a>
                </MDBModal>
            </div>
        )
    }

    render() {
        return (
            <div className='landing'>
                <div className='backlayer text-center' style={{ marginTop: -12, height: "101.7vh", width: "100vw" }}>
                    <img alt="bg" src={require('../image/LandingPage2B.png')} width='100%' height="100%"></img>
                </div>
                <div className='toplayer' style={{ verticalAlign: 'middle', height: '100%' }}>
                    <Navbar />
                    <button className="bt-about" onClick={this.toggleModal}>
                        About Me
                            </button>
                    {this.renderAbout()}
                    <div style={{ marginTop: '2.9vw', height: '23vw', marginLeft: '3.5vw' }}>
                        <p style={{ color: 'white', fontSize: '4vw' }}>Hello, I am</p>
                        <img alt="bg" src={require('../image/name.png')} width='50%' />
                        <br />
                        <p className style={{ color: 'white', display: 'inline', fontSize: '2vw' }}>A young <div style={{ color: '#00CCFF', width: 10, display: 'inline', fontWeight: 'bold' }}>Coder</div> who passionately explores technology </p>
                        <p style={{ fontSize: '2vw', color: 'white', marginBottom: '0.1vw' }}>Find Me on</p>
                        <a target="_blank" rel="noopener noreferrer" href="https://id.linkedin.com/in/abdi-alghi-40575518b">
                            <img className="icon" alt="linkedin" style={{ cursor: 'pointer', padding: '0.3vw' }} src={require('../image/linkedin.png')} />
                        </a>
                        <a target="_blank" rel="noopener noreferrer" href="https://github.com/Abdi-01">
                            <img className="icon" alt="git" style={{ cursor: 'pointer', padding: '0.3vw' }} src={require('../image/github.png')} />
                        </a>
                        <a target="_blank" rel="noopener noreferrer" href="https://instagram.com/abdi.alghifar?igshid=sdz55fg3bgv7">
                            <img className="icon" alt="ins" style={{ cursor: 'pointer', padding: '0.3vw' }} src={require('../image/instagram.png')} />
                        </a>
                    </div>
                    <a target="_blank" rel="noopener noreferrer" href="mailto:abdialghi@gmail.com" className="bt-hiring">Hire Me</a>
                </div>
            </div>
        );
    }
}

export default LandingPage