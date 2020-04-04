import React from 'react';
import Navbar from '../components/navbar'
import Gallery from 'react-grid-gallery';

class GalleryPage extends React.Component {
        state = {
                isOpen: false,
                photos: [
                        {
                                src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
                                thumbnail: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_n.jpg",
                                thumbnailWidth: 320,
                                thumbnailHeight: 212,
                                tags: [{ value: "Ocean", title: "Ocean" }, { value: "People", title: "People" }],
                                caption: "Boats (Jeshu John - designerspics.com)"
                        }
                        , {
                                src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
                                thumbnail: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_n.jpg",
                                thumbnailWidth: 320,
                                thumbnailHeight: 212,
                                tags: [{ value: "Ocean", title: "Ocean" }, { value: "People", title: "People" }],
                                caption: "Boats (Jeshu John - designerspics.com)"
                        }
                        , {
                                src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
                                thumbnail: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_n.jpg",
                                thumbnailWidth: 320,
                                thumbnailHeight: 212,
                                tags: [{ value: "Ocean", title: "Ocean" }, { value: "People", title: "People" }],
                                caption: "Boats (Jeshu John - designerspics.com)"
                        }
                ]
        };

        toggleCollapse = () => {
                this.setState({ isOpen: !this.state.isOpen });
        }
        render() {
                return (
                        <div className='landing'>
                                <div className='backlayer text-center' style={{ marginTop: -12 }}>
                                        <img alt="bg" src={require('../image/LandingPage2.png')} width='100%'></img>
                                </div>
                                <div className='toplayer' style={{ verticalAlign: 'middle', height: '100%' }}>
                                        <Navbar />
                                        <Gallery images={this.state.photos} />
                                </div>
                        </div>
                );
        }
}

export default GalleryPage