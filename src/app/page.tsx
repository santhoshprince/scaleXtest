
import { Col, Divider, Row, Image } from 'antd';
import { Typography } from 'antd';

const { Title } = Typography;

const App: React.FC = () => (

  <div className="container">
    <Row>
      <Col lg={12} md={24} sm={24} xs={24} style={{ textAlign: "start" }}>
        <h1 className="title">Business Breakthrough Seminar</h1>
        <span style={{ color: "#FFC621", paddingRight: "8px", fontFamily: "Poppins-Light" }}>4 Hour</span><span style={{ color: "#ffff", fontFamily: "Poppins-Light" }}>Online</span>
        <h1>Learn The Right Strategies Of <span style={{ color: "#FFC621" }}>Growing Your Business</span> To Multiple Crores</h1>
        <p>End day to day firefighting in business</p>
      </Col>
      
      <Col lg={12} md={24} sm={24} xs={24}>
        <div style={{ textAlign: "center" }}>
          <div style={{ textAlign: "center" }}>
            <img src="./Rajiv.png" alt="" className="responsive" />
          </div>
          <div style={{ textAlign: "center" }}>
            <img src="./img1.png" className="responsive img-user"></img>


          </div>
          <img src="./Talreja.png" alt="" className="responsive" />
        </div>
        <div style={{ textAlign: "center" }}>
          <h2>Asia’s Leading Business Success Coach</h2>
          <h3 style={{ fontFamily: "Poppins-Light" }}>Trained Over 1,00,00 Business Owners in Last 16 Years</h3>
          <div className="star-cont">
            <img src="./star.svg" alt="" className="responsive" />
            <h3 style={{ fontFamily: "Poppins-Light" }}>70,000+ People Rated My Programs with 4.96 Stars</h3>
          </div>

        </div>
      </Col>


    </Row>
    <Row style={{ paddingTop: "50px" }}>
      <Col lg={24} md={24} sm={24} xs={24}>
        <div className="navigate-bar">
          <h3>JOIN NOW FOR $99</h3>

          <img className="navi-img" src="./navigate.png" alt="" />

        </div>
      </Col>
    </Row>
    <Row>
      <Col lg={24} md={24} sm={24} xs={24}>
        <h2 style={{ textAlign: "center", padding: "20px 20px" }}>Why attend this workshop?</h2>
        <div className="tick-main">
          <div className="tick-cont">
            <img src="tick.svg" alt="" className="tick-img" />
            <h2>You Unlock Secrets To Create Time & Wealth In Business</h2>

          </div>

          <div className="tick-cont">
            <img src="tick.svg" alt="" className="tick-img" />
            <h2>You Will Learn Strong Foundational Activities To Win in Your Business</h2>

          </div>

          <div className="tick-cont">
            <img src="tick.svg" alt="" className="tick-img" />
            <h2>Fastrack your Business Growth with Increased Revenue & Cashflow</h2>

          </div>

          <div className="tick-cont">
            <img src="tick.svg" alt="" className="tick-img" />
            <h2>More Profit, More Freedom, More Scale is Guaranteed if you follow the Exact Steps covered in the Seminar</h2>

          </div>


        </div>

      </Col>



    </Row>
    <Row style={{ paddingTop: "50px" }}>
      <Col lg={24} md={24} sm={24} xs={24}>
        <div style={{ textAlign: "center" }}>
          <h2>STARTS ON 13th April 2023 (9:30AM)</h2>
          <h3>Language - Basic English</h3>
          <h2>Register In Next 15:00 Mins</h2>

        </div>

        {/* <div className="days-bg">
          <div className="days-count">
            <h3>02</h3>
            <h5>Days</h5>
          </div>
          <div className="days-count">
            <h3>05</h3>
            <h5>Hours</h5>
          </div>
          <div className="days-count">
            <h3>09</h3>
            <h5>MINUTES</h5>
          </div>
          <div className="days-count">
            <h3>55</h3>
            <h5>SECONDS</h5>
          </div>


        </div> */}
          <Row gutter={[12, 12]} justify={"center"}>
          <Col lg={6} md={6} sm={6} xs={6}>
            <div className="days-count-last days-new">
              <h3>02</h3>
              <h5>Days</h5>
            </div>
          </Col>
          <Col lg={6} md={6} sm={6} xs={6}>
            <div className="days-count-last days-new">
              <h3>05</h3>
              <h5>Hours</h5>
            </div>
          </Col>
          <Col lg={6} md={6} sm={6} xs={6}>
            <div className="days-count-last days-new">
              <h3>09</h3>
              <h5>MINUTES</h5>
            </div>
          </Col>
          <Col lg={6} md={6} sm={6} xs={6}>
            <div className="days-count-last days-new">
              <h3>55</h3>
              <h5>SECONDS</h5>
            </div>
          </Col>

        </Row>

        <div style={{ textAlign: "center", paddingTop: "20px" }}>
          <h4 style={{ fontWeight: "400" }}>To Unlock Bonuses Worth    <span style={{ color: "#00ab00", fontWeight: 500 }}>₹6,487</span></h4>
        </div>

      </Col>
    </Row>

    <Row className="news-cont">
      <Col lg={24} md={24} sm={24} xs={24}>
        <h3 className="feanews">Featured In</h3>
        <div className='news-logo'>
          <img src="./news2.png" alt="" width={100} className="responsive" />
          <img src="./news1.png" alt="" width={100} className="responsive" />
          <img src="./news3.png" alt="" width={100} className="responsive" />
        </div>
      </Col>

      {/* <Col lg={8}>
          <img src="./news1.png" alt="" />

        </Col>
        <Col lg={8}>
          <img src="./news2.png" alt="" />

        </Col>
        <Col lg={8}>
          <img src="./news3.png" alt="" />

        </Col> */}
    </Row>
    <Row>
      <Col lg={24} md={24} sm={24} xs={24} style={{ textAlign: "center" }}>
        <h1>What Wil Change In Your Business</h1>
        <img src="./triangle.png" alt="" className="responsive" />
        <div className="tick-main-one">
          <div className="tick-cont">
            <img src="tick.svg" alt="" className="tick-img" />
            <h2>You Unlock Secrets To Create Time & Wealth In Business</h2>

          </div>

          <div className="tick-cont">
            <img src="tick.svg" alt="" className="tick-img" />
            <h2>You Will Learn Strong Foundational Activities To Win in Your Business</h2>

          </div>

          <div className="tick-cont">
            <img src="tick.svg" alt="" className="tick-img" />
            <h2>Fastrack your Business Growth with Increased Revenue & Cashflow</h2>

          </div>

          <div className="tick-cont">
            <img src="tick.svg" alt="" className="tick-img" />
            <h2>More Profit, More Freedom, More Scale is Guaranteed if you follow the Exact Steps covered in the Seminar</h2>

          </div>


        </div>
        <div className="navigate-bar">
          <h3>JOIN NOW FOR $99</h3>

          <img className="navi-img" src="./navigate.png" alt="" />

        </div>

      </Col>
    </Row>
    <Row>
      <Col lg={24} md={24} sm={24} xs={24}>
        <h1>Listen from Real Business Owners to find out their breakthrough after attending this seminar</h1>
      </Col>

    </Row>
    <Row gutter={[12, 12]}>
      <Col lg={12} md={24} sm={24} xs={24} style={{ textAlign: "center" }}>

        <img src="./user1.png" alt="" className="responsive" />
      </Col>
      <Col lg={12} md={24} sm={24} xs={24} style={{ textAlign: "center" }}>
        <img src="./user2.png" alt="" className="responsive" />
      </Col>
    </Row>
    <Row>
      <Col lg={24}>
        <h1 style={{ textAlign: "center", padding: "20px 20px" }}>Why attend this workshop?</h1>
        <h2 style={{ textAlign: "center" }}>Any Business Owner (Any Type Of Business)</h2>
        <div className="tick-main">
          <div className="tick-cont">
            <img src="tick.svg" alt="" className="tick-img" />
            <h2>Who This Seminar Will Help The Best?</h2>


          </div>

          <div className="tick-cont">
            <img src="tick.svg" alt="" className="tick-img" />
            <h2>Directors, Partners, Sole Proprietor Of Companies, LLPs, Partnerships etc</h2>

          </div>

          <div className="tick-cont">
            <img src="tick.svg" alt="" className="tick-img" />
            <h2>Consultants & Professionals Like Architects, Doctors, Lawyers</h2>

          </div>

          <div className="tick-cont">
            <img src="tick.svg" alt="" className="tick-img" />
            <h2>Business & Startup Founders, Entrepreneurs, CEOs, CMOs, CXOs etc</h2>

          </div>
          <div className="tick-cont">
            <img src="tick.svg" alt="" className="tick-img" />
            <h2>Owners of Service Based Businesses & Agencies  etc</h2>

          </div>
          <div className="tick-cont">
            <img src="tick.svg" alt="" className="tick-img" />
            <h2>Retailer, Manufacturers, Distributors, Wholesalers, Franchise Owners etc</h2>

          </div>
          <div className="tick-cont">
            <img src="tick.svg" alt="" className="tick-img" />
            <h2>SME, MSMEs (Small, Micro, Medium Unit Owners)</h2>

          </div>



        </div>

      </Col>



    </Row>
    <Row>
      <Col lg={24} md={24} sm={24} xs={24}>
        <h1 style={{ textAlign: "center", padding: "20px 20px" }}>Don’t Join If</h1>

        <div className="tick-main">
          <div className="tick-cont">
            <img src="false.png" alt="" className="false-img" />
            <h2>Who This Seminar Will Help The Best?</h2>


          </div>

          <div className="tick-cont">
            <img src="false.png" alt="" className="false-img" />
            <h2>Directors, Partners, Sole Proprietor Of Companies, LLPs, Partnerships etc</h2>

          </div>

          <div className="tick-cont">
            <img src="false.png" alt="" className="false-img" />
            <h2>Consultants & Professionals Like Architects, Doctors, Lawyers</h2>

          </div>

          <div className="navigate-bar">
            <h3>JOIN NOW FOR $99</h3>

            <img className="navi-img" src="./navigate.png" alt="" />

          </div>
        </div>


      </Col>



    </Row>
    <Row>
      <Col lg={24} md={24} sm={24} xs={24}>
        <div style={{ textAlign: "center", paddingTop: "30px" }}>
          <h1>What You Will Learn In 4 Hours?</h1>
          <h3>Here’s What You’ll Learn in Just 4 Hours</h3>
        </div>

        <div className="number-cont">
          <h1>01</h1>
          <h3>7 Foundational Activities used by successful entrepreneurs which you can COPY to build a Stable and scalable business.</h3>
        </div>
        <div className="number-cont">
          <h1>02</h1>
          <h3>3 ingredients you need to focus on to build a business that can grow without you.</h3>
        </div>
        <div className="number-cont">
          <h1>03</h1>
          <h3>How To Build Your Front-Line Leaders: Understand the step-by-step process of building your second line of leaders that you can implement immediately</h3>
        </div>
        <div className="number-cont">
          <h1>04</h1>
          <h3>How to retain employees: strategies and systems that you can implement to make sure you create an environment for employees to work longer so that you can focus on strategic business growth.</h3>
        </div>
        <div className="navigate-bar" style={{ marginTop: "30px" }}>
          <h3>JOIN NOW FOR $99</h3>

          <img className="navi-img" src="./navigate.png" alt="" />

        </div>
      </Col>
    </Row>
    <Row style={{ paddingTop: "50px" }}>
      <Col lg={24} md={24} sm={24} xs={24} className="last-footer">
        <div style={{ textAlign: "center" }}>
          <h2>Bonuses If You Register Before Timer Hits 0</h2>
          <h2>15:00 Mins</h2>

        </div>

        {/* <div className="days-bg">
            <div className="days-count-last">
              <h3>02</h3>
              <h5>Days</h5>
            </div>
            <div className="days-count-last">
              <h3>05</h3>
              <h5>Hours</h5>
            </div>
            <div className="days-count-last">
              <h3>09</h3>
              <h5>MINUTES</h5>
            </div>
            <div className="days-count-last">
              <h3>55</h3>
              <h5>SECONDS</h5>
            </div>


          </div> */}
        <Row gutter={[12, 12]} justify={"center"}>
          <Col lg={6} md={6} sm={6} xs={6}>
            <div className="days-count-last">
              <h3>02</h3>
              <h5>Days</h5>
            </div>
          </Col>
          <Col lg={6} md={6} sm={6} xs={6}>
            <div className="days-count-last">
              <h3>02</h3>
              <h5>Days</h5>
            </div>
          </Col>
          <Col lg={6} md={6} sm={6} xs={6}>
            <div className="days-count-last">
              <h3>02</h3>
              <h5>Days</h5>
            </div>
          </Col>
          <Col lg={6} md={6} sm={6} xs={6}>
            <div className="days-count-last">
              <h3>02</h3>
              <h5>Days</h5>
            </div>
          </Col>

        </Row>

      </Col>
    </Row>

  </div>
);
export default App;



