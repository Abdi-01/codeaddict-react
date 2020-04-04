import React, { Component } from "react";
import '../assets/card.css'
import { MDBCol, MDBRow} from "mdbreact";

class FlippingCardPage extends Component {
    state = {
        dataExp: [
            {
                title: 'Member Technology Development Dirgantara PENS',
                img: require('../image/logoDirgantaraPens.png'),
                desc: 'Mengembangkan teknologi untuk perangkat UAV, khususnya menjadi full-stack developer untuk pengembangan aplikasi mobile sebagai perangkat monitoring UAV.',
                date: '2017 - 2018'
            },
            {
                title: 'Internship, PUSTEKBANG Lapan ',
                img: 'https://upload.wikimedia.org/wikipedia/commons/f/f6/Logobaru_LAPAN.jpg',
                desc: 'Mengembangkan teknologi pendeteksi objek melalui IP-Camera yang ditampilkan pada web browser sebagai prototype untuk diterapkan pada pesawat UAV.',
                date: '2018'
            },
            {
                title: 'Ketua HMCE PENS',
                img: 'https://pbs.twimg.com/profile_images/1119485431437914112/xjEUZoiw.png',
                desc: 'Sebuah oraganisasi kampus yang menghimpun mahasiswa khususnya di program studi D4 Teknik Komputer.',
                date: '2017'
            }
        ],
        dataAward: [
            {
                title: '3rd Place Technology Development KRTI 2018, Lampung',
                img: 'https://www.pens.ac.id/wp-content/uploads/2018/11/PENS-Mendapat-Juara-3-Pada-Kontes-Robot-Terbang-Indonesia.jpg',
                desc: 'Mewakili Politeknik Elektronika Negeri Surabaya di ajang Kontes Robot Terbang Indonesia KEMENRISTEKDIKTI, dengan membawa aplikasi mobile untuk pemantauan perangkat UAV yang bernama PIGEON App. Menjadi full-stack developer untuk pengembangan aplikasi tersebut.',
                date: '5-9 November 2018'
            },
            {
                title: '3rd Place Technology Development KRTI 2017, Surabaya',
                img: require('../image/juaraKRTI2017.png'),
                desc: 'Mewakili Politeknik Elektronika Negeri Surabaya di ajang Kontes Robot Terbang Indonesia KEMENRISTEKDIKTI, dengan membawa hasil pengembangan flight-controller yang bernama EFALCON. Menjadi tim utama untuk menjadi pilot dan pengembangan mekanik serta hardware',
                date: '16-20 Oktober 2017'
            }
        ]
    }

    renderExperience = () => {
        const { dataExp } = this.state
        return dataExp.map((item, index) => {
            return (
                <MDBRow key={index}>
                    <div className=" mb-2" style={{ maxWidth: '60vw' }}>
                        <div className="row no-gutters">
                            <div className="col-md-4" >
                                <img src={item.img} style={{backgroundColor:'white',borderRadius:'1vw'}} width="100%" alt="..." />
                                <p style={{color:'#484848',fontWeight:'bold'}} className="card-text text-center">{item.date}</p>
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h6 style={{fontWeight:'bold'}} className="card-title">{item.title}</h6>
                                    <p className="card-text" style={{ textAlign: 'justify' }}>{item.desc}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </MDBRow>
            )
        })
    }
    renderAwards = () => {
        const { dataAward } = this.state
        return dataAward.map((item, index) => {
            return (
                <MDBRow key={index}>
                   <div className="mb-2" style={{ maxWidth: '60vw' }}>
                        <div className="row no-gutters">
                            <div className="col-md-4">
                            <img src={item.img} style={{backgroundColor:'white',borderRadius:'1vw'}} width="100%" alt="..." />
                                <p style={{color:'#B6B6B7',fontWeight:'bold'}} className="card-text text-center">{item.date}</p>
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h6 style={{color:'white',fontWeight:'bold'}} className="card-title">{item.title}</h6>
                                    <p className="card-text" style={{ textAlign: 'justify',color:'white' }}>{item.desc}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </MDBRow>
            )
        })
    }

    render() {
        return (
            <div>
                <MDBRow>
                    <MDBCol size="5">
                        {this.renderExperience()}
                    </MDBCol>
                    <MDBCol size="2" />
                    <MDBCol size="5">
                        {this.renderAwards()}
                    </MDBCol>
                </MDBRow>
            </div>
        );
    }
}

export default FlippingCardPage;