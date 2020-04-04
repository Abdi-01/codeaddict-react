import React from 'react';
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import Educard from '../components/educard'
import Expcard from '../components/expcard'
import PDFview from '../components/pdfview'
import ScrollspyNav from 'react-scrollspy-nav'

class ProfilePage extends React.Component {
    state = {
    }
    render() {
        return (
            <div>
                <div id="profile">
                    <div className='landing'>
                        <div className='backlayer text-center' style={{ marginTop: -12 }}>
                            <img id="profile" alt="bg" src={require('../image/ProfilePageB.png')} width='100%'></img>
                        </div>
                        <div className='toplayer' style={{ verticalAlign: 'middle', height: '100%' }}>
                            <Navbar />
                        </div>
                    </div>
                </div>
                <div id="education" style={{ margin: "42.7vw 6vw 0 0", width: '100%' }}>
                    <div className='landing'>
                        <div className='backlayer text-center'>
                            <img alt="bg" src={require('../image/EducationPage.png')} width='100%'></img>
                        </div>
                        <div className='toplayer' style={{ verticalAlign: 'middle', height: '100%' }}>
                            <div style={{ width: '88%', margin: "0vw 6vw 0 6vw", paddingTop: '7vw' }}>
                                <Educard />
                            </div>
                        </div>
                    </div>
                </div>
                <div id="experience" style={{ margin: "3.5vw 6vw 0 0", width: '100%' }}>
                    <div className='landing'>
                        <div className='backlayer text-center'>
                            <img alt="bg" src={require('../image/ExperiencePage.png')} width='100%'></img>
                        </div>
                        <div className='toplayer' style={{ verticalAlign: 'middle', height: '100%' }}>
                            <div style={{ width: '88%', margin: "0vw 6vw 0 6vw", paddingTop: '7vw' }}>
                                <Expcard/>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="publication" style={{ margin: "3.5vw 6vw 0 0", width: '100%' }}>
                    <div className='landing'>
                        <div className='backlayer text-center' style={{ marginTop: -12 }}>
                            <img alt="bg" src={require('../image/PublicationPage.png')} width='100%'></img>
                        </div>
                        <div className='toplayer' style={{ verticalAlign: 'middle', height: '100%' }}>
                            <div style={{ width: '88%', margin: "0vw 6vw 0 6vw", paddingTop: '5vw' }}>
                                <PDFview/>
                            </div>
                            <ScrollspyNav
                                scrollTargetIds={["education", "profile", "experience", "publication"]}
                                offset={10}
                                scrollDuration="1000"
                                headerBackground="true"
                            >
                                <Footer edu="education" prof="profile" exp="experience" pub="publication" />
                            </ScrollspyNav>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProfilePage