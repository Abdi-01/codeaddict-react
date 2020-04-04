import React from 'react';
import Navbar from '../components/navbar'
import Gallery from 'react-grid-gallery';
import { MDBModal, MDBModalBody} from "mdbreact";

class PortfolioPage extends React.Component {
    state = {
        isOpen: false,
        selected: null,
        portfolio: [
            {
                img: require('../image/portfolio/internship03.png'),
                project: 'Sistem Deteksi Objek untuk Payload LAPAN Surveillance UAV (LSU)',
                date: 'Pusat Teknologi Penerbangan (PUSTEKBANG - LAPAN) 29 Januari 2018 - 20 April 2018 ',
                desc: 'Melakukan pengembangan prototype sistem pendeteksi object menggunakan metode Haar Cascade Classifier yang nantinya akan diterapkan pada LSU. Kamera yang digunakan adalah Logitech dan pengolahnya adalah miniPC Raspberry Pi. Beberapa benda yang coba dideteksi adalah bentuk bintang, cutter, penghapus dan spidol. Selain itu hasil deteksi object ditampilkan pada web browser dan kamera juga dapat dikendalikan. Bahasa yang digunakan adalah Python',
                file: '',
                tools: 'Raspberry Pi OS, notepad++',
                programming: 'Pyhton, HTML, CSS',
                photos: [
                    {
                        src: require('../image/portfolio/internship01.png'),
                        thumbnail: require('../image/portfolio/internship01.png'),
                        thumbnailWidth: 420,
                        thumbnailHeight: 212,
                        // tags: [{ value: "Ocean", title: "Ocean" }, { value: "People", title: "People" }],
                        caption: "Uji coba deteksi objek pada miniPC Raspberry Pi"
                    }
                    , {
                        src: require('../image/portfolio/internship02.png'),
                        thumbnail: require('../image/portfolio/internship02.png'),
                        thumbnailWidth: 320,
                        thumbnailHeight: 212,
                        // tags: [{ value: "Ocean", title: "Ocean" }, { value: "People", title: "People" }],
                        caption: "Uji coba deteksi objek dengan pemantauan pada web browser"
                    }
                    , {
                        src: require('../image/portfolio/internship03.png'),
                        thumbnail: require('../image/portfolio/internship03.png'),
                        thumbnailWidth: 320,
                        thumbnailHeight: 212,
                        // tags: [{ value: "Ocean", title: "Ocean" }, { value: "People", title: "People" }],
                        caption: "Uji coba deteksi objek dengan pemantauan pada web browser"
                    }
                ]
            }
            , {
                img: require('../image/portfolio/pigeon01.png'),
                project: 'PIGEON App (Ground Control Station for Unmanned Aerial Vehicle)',
                date: 'Politeknik Elektronika Negeri Surabaya July - Desember 2018 ',
                desc: 'Sebuah aplikasi yang digunakan untuk memantau kondisi dan sikap dari perangkat UAV. Aplikasi dan perangkat dikoneksikan secara serial menggunakan komunikasi radio telemetry. Mobile app ini juga dikembangkan menggunakan Android Studio dan menggunakan bahasa pemrogaman Java.',
                link: "https://github.com/Abdi-01/EfalconGCS",
                tools: 'Android Studio',
                programming: 'Java',
                photos: [
                    {
                        src: require('../image/portfolio/pigeon01.png'),
                        thumbnail: require('../image/portfolio/pigeon01.png'),
                        thumbnailWidth: 420,
                        thumbnailHeight: 212,
                        // tags: [{ value: "Ocean", title: "Ocean" }, { value: "People", title: "People" }],
                        caption: "Tampilan awal aplikasi"
                    }
                    , {
                        src: require('../image/portfolio/pigeon02.png'),
                        thumbnail: require('../image/portfolio/pigeon02.png'),
                        thumbnailWidth: 320,
                        thumbnailHeight: 212,
                        // tags: [{ value: "Ocean", title: "Ocean" }, { value: "People", title: "People" }],
                        caption: "Penentuan posisi koordinat UAV"
                    }
                    , {
                        src: require('../image/portfolio/pigeon03.png'),
                        thumbnail: require('../image/portfolio/pigeon03.png'),
                        thumbnailWidth: 320,
                        thumbnailHeight: 212,
                        // tags: [{ value: "Ocean", title: "Ocean" }, { value: "People", title: "People" }],
                        caption: "Pemantauan pergerkan UAV"
                    }
                ]
            }
            , {
                img: require('../image/portfolio/proto01.png'),
                project: 'Lead Project E-Commerce',
                date: 'Purwadhika Startup and Coding School Oktober 2019 - Maret 2020',
                desc: 'E-commerce yang dikhususkan untuk usaha konveksi lokal. Web ini merupakan hasil kolaborasi antara saya dengan salah satu usaha konveksi di Kabupaten Lamongan. Web dikembangkan dengan React JS sebagai front-end dan Node JS sebagai back-end serta mySQL untuk database.',
                link: "https://github.com/Abdi-01/lead-react",
                tools: 'Visual Studio Code, MySQL Workbench, Photoshop, Corel Draw',
                programming: ' ReactJS, Javascript, HTML, CSS, SQL Script, nodeJS',
                photos: [
                    {
                        src: require('../image/portfolio/proto02.png'),
                        thumbnail: require('../image/portfolio/proto02.png'),
                        thumbnailWidth: 420,
                        thumbnailHeight: 212,
                        // tags: [{ value: "Ocean", title: "Ocean" }, { value: "People", title: "People" }],
                        caption: "Antar muka koleksi produk"
                    }
                    , {
                        src: require('../image/portfolio/proto03.png'),
                        thumbnail: require('../image/portfolio/proto03.png'),
                        thumbnailWidth: 320,
                        thumbnailHeight: 212,
                        // tags: [{ value: "Ocean", title: "Ocean" }, { value: "People", title: "People" }],
                        caption: "Antar muka detail produk"
                    }
                    , {
                        src: require('../image/portfolio/proto04.png'),
                        thumbnail: require('../image/portfolio/proto04.png'),
                        thumbnailWidth: 320,
                        thumbnailHeight: 212,
                        // tags: [{ value: "Ocean", title: "Ocean" }, { value: "People", title: "People" }],
                        caption: "Antar muka transaksi pembayaran"
                    }
                ]
            }
        ]
    }
    renderPortfolio = () => {
        return this.state.portfolio.map((item, index) => {
            return (
                <div key={index} className="col-lg-5 portfolio-card shadow-lg rounded" onClick={() => this.toggleModal(index)} style={{ padding: 0 }}>
                    <img className="objectFit" width='100%' height="80%" src={item.img} alt="..." />
                    <h5 style={{ fontSize: '1vw', backgroundColor: "#5F5D5D", margin: 0, color: 'white' }} className="mt-0 font-weight-bold text-center">{item.project}</h5>
                    <p className="text-center" style={{ bottom: 0, margin: 0, backgroundColor: "#5F5D5D", color: 'white' }}><small>{item.date}</small></p>
                    <p className="text-center" style={{ bottom: 0, margin: 0 }}><small class="text-muted">Detail</small></p>
                </div>
            )
        })
    }

    toggleModal = (index) => {
        this.setState({ isOpen: !this.state.isOpen, selected: index });
    }

    renderPortfolioDetail = () => {
        return this.state.portfolio.map((item, index) => {
            if (this.state.selected === index) {
                return (
                    <div>
                        <MDBModal isOpen={this.state.isOpen} toggle={this.toggleModal} size="lg">
                            {/* <MDBModalHeader toggle={this.toggle(4)}>MDBModal title</MDBModalHeader> */}
                            <MDBModalBody>
                                <div className="row">
                                    <div className="col-5">
                                        <Gallery images={item.photos} />
                                    </div>
                                    <div className="col" >
                                        <p className="text-justify">{item.desc}</p>
                                        <p style={{ fontWeight: 'bold', margin: 0 }}>Tools : {item.tools}</p>
                                        <p style={{ fontWeight: 'bold', margin: 0 }}>Framework / Programming Language : {item.programming}</p>
                                        {item.link?<a target="_blank" rel="noopener noreferrer" style={{ color: 'blue' }} href={item.link}>View Repository</a>:null}
                                    </div>
                                </div>
                            </MDBModalBody>
                        </MDBModal>
                    </div>
                )
            }else{return null}
        })
    }
    render() {
        return (
            <div className='landing' style={{ position: 'relative' }}>
                <div className='backlayer text-center' style={{ marginTop: -12, height: "101.7vh", width: "100%" }}>
                    <img alt="bg" src={require('../image/LandingPage2.png')} width='100%' height="100%"></img>
                </div>
                <div className='toplayer' style={{ verticalAlign: 'middle', height: '100%' }}>
                    <Navbar />
                    <div>
                        <div className="row" style={{ width: "100%" }}>
                            {this.renderPortfolio()}
                            {this.renderPortfolioDetail()}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default PortfolioPage