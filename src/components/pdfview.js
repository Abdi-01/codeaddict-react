import React from 'react';
// import myPdf from '../image/publication/bachtiar2019.pdf'
import { MDBCol, MDBRow, MDBTypography, MDBBox } from "mdbreact";
// import { Document, Page, pdfjs } from 'react-pdf';
// pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
// const pdf = myPdf
class Pdfview extends React.Component {
    state = {

    }
    render() {
        return (
            <div style={{marginTop:'5vw'}}>
                <MDBRow>
                    <MDBCol size="5">
                        <MDBTypography blockquote bqColor='primary'>
                            <MDBBox tag='p' mb={0} className='bq-title'>
                                Pengembangan Mobile App untuk Monitoring Perangkat Unmanned Aerial Vehicle (UAV)
                            </MDBBox>
                            <p style={{ color: 'white', textAlign: 'justify' }}>
                                Penelitian yang dilakukan kurang lebih selama 5 bulan dengan menggunakan <abbr title='attribute' style={{ color: '#00CCFF' }}>Android Studio</abbr> , dimana aplikasi dikomunikasikan dengan perangkat UAV melalui radio telemetry.
                                Fitur yang dikembangkan adalah monitoring gerak roll, pitch, yaw, altitude, daya baterai dan lokasi perangkat UAV yang datanya didapat dari sensor-sensor yang telah terkonfigurasi.
                            </p>
                            <a href="https://ieeexplore.ieee.org/document/8901596">Check Publication : IEEE Xplore</a>
                        </MDBTypography>
                    </MDBCol>
                    <MDBCol size="2" />
                    <MDBCol size="5">
                        {/* <div style={{ marginTop: "-4vw" }}> */}
                            <div className="embed-responsive embed-responsive-16by9" style={{marginTop:'3vw'}}>
                                <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/FVAKGbsDop8" allowfullscreen></iframe>
                            </div>
                            {/* <img alt="bg" src={require('../image/publication/jurnal2019_Page1.png')} width='88%'></img> */}
                            {/* <Document file={pdf}
                            >
                                <Page width={500} pageNumber={1} />
                            </Document> */}
                        {/* </div> */}
                    </MDBCol>
                </MDBRow>
            </div >
        );
    }
}

export default Pdfview;