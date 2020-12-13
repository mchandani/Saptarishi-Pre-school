import './Home.css'
import NavBar from '../NavBar/NavBar'
import rightArrow from '../web_assets/right-arrow.png'
import Hero from '../web_assets/hero.png'
import Kids from '../web_assets/kids.jpg'
import Teacher1 from '../web_assets/teacher-1.jpg'
import { Row, Col } from 'reactstrap'
import Footer from '../Footer/Footer'
import Carousel_gallery from '../Carousel_gallery/Carousel_gallery'

function scroll() {

    window.scrollBy(0, 4850);
}

function Home() {
    return (
        <div >
            <div className='top_container'>
                <NavBar />
                <section id='home' >
                    <div className='container hero-container'>
                        <div className='hero-detail-box'>
                            <h3>
                                Welcome to
                            </h3>
                            <h1 style={{ color: "#fec913", fontWeight: "bold", fontSize: "50px", textTransform: "uppercase" }}>saptarishi <br />preschool</h1>
                            <p style={{ marginTop: "20px", marginBottom: "35px" }}>
                                There are many variations of passages of Lorem Ipsum available, but  the majority have suffered alteration in some form, by injected humour, or randomised
                            </p>
                            <button className='call-btn'>Contact <img alt='rightarrow' style={{ marginLeft: "10px", width: "18px" }} src={rightArrow} /></button>
                        </div>
                        <div className='hero-img-container'>
                            <img className='img_fluid' src={Hero} />
                        </div>
                    </div>
                </section>
            </div>
            {/* {--------------------------------------------about----------------------------------------------------------------} */}

            <section id='about' className='about_section layout_padding'>
                <div className='container'>
                    <h2 className='main-heading'>About School</h2>
                    <p className='text-center'>
                        There are many variations of passages of Lorem Ipsum available, but the majority hThere are many variations of passages of Lorem Ipsum available, but the majority h
                    </p>
                    <div className='about-img-box'>
                        <img alt='kids' className='img_fluid' src={Kids} />
                    </div>
                    <div className='align-items-center d-flex justify-cont-center'><a href='https://www.google.com' className='call-btn'>Read more</a></div>
                </div>
            </section>
            {/* {--------------------------------------------teachers-------------------------------------------------------------} */}
            <section id='teachers' className='teachers_section layout_padding'>
                <div className='container'>
                    <h2 className='main-heading'>Our Teachers</h2>

                    <p className='text-center'>
                        Ipsum available, but the majority h
                    </p>

                    <div className='teachers_container'>
                        <div className='card_deck d-flex'>
                            <div className='card'>
                                <img className='img_fluid' src={Teacher1} />
                                <div className='card_body'>
                                    <h5 className='card_title'>Name label</h5>
                                </div>
                            </div>

                            <div className='card'>
                                <img className='img_fluid' src={Teacher1} />
                                <div className='card_body'>
                                    <h5 className='card_title'>Name label</h5>
                                </div>
                            </div>

                            <div className='card'>
                                <img className='img_fluid' src={Teacher1} />
                                <div className='card_body'>
                                    <h5 className='card_title'>Name label</h5>
                                </div>
                            </div>

                            <div className='card'>
                                <img className='img_fluid' src={Teacher1} />
                                <div className='card_body'>
                                    <h5 className='card_title'>Name label</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* {-----------------------------------------------vehicle section---------------------------------------------------} */}
            <section id='vehicle' className='layout_padding'>
                <div className='container'>
                    <h2 className='main-heading'>
                        Vehicles Facility
                    </h2>

                    <p className='text-center'>
                        Ipsum available, but the majority h
                    </p>
                    <Carousel_gallery />
                </div>
            </section>
            <Footer />
        </div>
    );
}

export default Home;