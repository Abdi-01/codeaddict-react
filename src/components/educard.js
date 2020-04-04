import React, { Component } from "react";
import '../assets/card.css'
import { MDBCol, MDBRow, MDBCard, MDBCardImage} from "mdbreact";

class FlippingCardPage extends Component {
  state = {
    // flipped2: false
  }

  render() {
    return (
      <div>
        <MDBRow>
          <MDBCol size="5">
            <MDBCard>
              <MDBCardImage hover
                cascade
                src={require('../image/purwadhika.jpeg')}
                top
                alt="sample photo"
                height="370vw"
                className="objectFit" />
              <div className="year-tag">
                <h4>2019-2020</h4>
              </div>
              <MDBRow>
                <h4 className="text-center" style={{ width: '100%', marginTop: "1vw", fontWeight: 'bold' }}>Purwadhika Startup and Coding School</h4>
              </MDBRow>
              <MDBRow>
                <p className="text-center" style={{ width: '100%', paddingLeft: "2vw", paddingRight: "2vw" }}>
                  Belajar menjadi seorang full-stack web and mobile dengan menggunakan bahasa Javascript, HTML dan CSS yang diterapkan pada framework React JS dan React Native. Dan menghasilkan final project dengan membuat e-commerce untuk usaha konveksi.
                </p>
              </MDBRow>
            </MDBCard>
          </MDBCol>
          <MDBCol size="2" />
          <MDBCol size="5">
            <MDBCard>
              <MDBCardImage hover
                cascade
                src="https://www.pens.ac.id/wp-content/uploads/resized/7345463906e5727c6158b24cf5b15cd9/DSC_4856.jpg"
                top
                alt="sample photo"
                height="370vw"
                className="objectFit" />
              <div className="year-tag">
                <h4>2015-2019</h4>
              </div>
              <MDBRow>
                <h4 className="text-center" style={{ width: '100%', marginTop: "1vw", fontWeight: 'bold' }}>Politeknik Elektronika Negeri Surabaya</h4>
              </MDBRow>
              <MDBRow>
                <p className="text-center" style={{ width: '100%', paddingLeft: "2vw", paddingRight: "2vw" }}>
                  Mengambil jurusan D4 Teknik Komputer. Mempelajari rancang bangun software maupun hardware, beberapa bahasa pemrogaman, mempelajari dan mengembangkan teknologi IoT, robotik, pengolahan citra dan AI.
                            </p>
              </MDBRow>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </div>
    );
  }
}

export default FlippingCardPage;