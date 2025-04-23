import React from 'react'
import './About.css'
import Header from '../components/Header'
import bg from '../assets/abtbg.png'
import abtlogo from '../assets/abt-logo.png'
import DirCard from '../components/DirCard'
import anshul from '../assets/anshul.png'
import prateek from '../assets/prateek.png'
import frank from '../assets/frank.png'
import img2 from '../assets/img2.png'
import pranjal from '../assets/pranjal.png'
import dennis from '../assets/dennis.png'
import freddy from '../assets/freddy.png'
import stbg from '../assets/Mirror.svg'
import Team from '../components/Team'
import Services from './Services'
import WhoCard from '../components/WhoCard'
import wholeft from '../assets/who-left.svg'
import whoright from '../assets/who-right.svg'
import whatWeDoImg from '../assets/Do.svg'
import DoCard from '../components/DoCard'
import Footer from '../components/Footer'
import Global from './Global'
import praxxi from '../assets/praxxi.png'



const About = () => {
  return (
    <>
        <img src={bg} alt="" id='abtbg' />
        <Header/>
        <div className="abt">
            <div className="abt-head">
            <h1>About Us</h1>
            </div>
            <div className="abt-subhead">
            <h1>Finding Inspiration in Every Turn</h1>
            </div>
            <img src={abtlogo} alt="" id='abtlgo' />
            <div className="abt-content">
            <p id='abt-para'>
            At FNP Global, we are more than just consultants, we are strategic partners in your business success. With a strong global presence and deep industry expertise, we specialize in empowering businesses with innovative solutions, insightful strategies, and sustainable growth models.
            </p>
            </div>
            <div className="story">
              <img src={stbg} alt="" id='stbg' />
              <h1 className="str-head">OUR STORY</h1>
              <div id="directors1">
                    <DirCard
                  image={frank}
                  name="Frank Parshu"
                  position="Founder & CEO"
                />
                <DirCard
                  image={img2}
                  name="Narendra M Nagalla"
                  position="Co-Founder"
                />
                <DirCard
                  image={prateek}
                  name="Prateek Varshney"
                  position="Founder & COO"
                />
              </div>
              <div id="directors2">
                    <DirCard
                  image={img2}
                  name="Elizabeth Mary"
                  position="Additional Director"
                />
                <DirCard
                  image={praxxi}
                  name="Pratiksha Varshney"
                  position="Additional Director"
                />
              </div>
              <div id="st-para">At FNP Global, we believe in turning challenges into opportunities and ideas into thriving businesses. Our journey began with a vision—to empower businesses worldwide with strategic solutions, expert guidance, and innovative thinking. <br />
Founded by a team of seasoned professionals with deep industry insights, we recognized a gap in the market: businesses needed more than just advice; they needed a partner who could walk with them through every step of their journey. That’s where we come in. <br />
From startups taking their first leap to established enterprises seeking expansion, we provide tailored consultancy services that drive growth, efficiency, and success. With a global network and a commitment to excellence, we don’t just consult—we create transformation. <br />
At FNP Global Business Consultancy, your success is our mission. Let’s build the future, together.</div>
            </div>
            <div className="team">
              <h1 id='tm-head'>MEET THE TEAM</h1>
              <div id="tm-list">
                <div id='tm1'>
                  <Team 
                image={freddy}
                name="FREDDY PARSHU"
                position="Manager"
                dep="(Sales)"
              />
              <Team 
                image={anshul}
                name="ANSHUL GUPTA"
                position="Team Lead"
                dep="(Sales)"
              /></div>
              <div id='tm1'>
                <Team 
                image={pranjal}
                name="PRANJAL PUJARI"
                position="Team Lead"
                dep="(Backend)"
              /><Team 
                image={dennis}
                name="STANLEY VICTOR"
                position="Vice-President"
                dep="(Marketing)"
              />
              </div>
              </div>
            </div>
            <WhoCard
            title1="Who We Are"
            desc1="FNP Global is a leading business consultancy firm dedicated to transforming challenges into opportunities. Our team comprises seasoned professionals, industry experts, and visionary strategists who bring a wealth of experience across multiple sectors. We believe in fostering long-term partnerships with our clients by delivering tailor-made solutions that align with their unique business goals."
            image1={wholeft}
            title2="Our Mission"
            desc2="We are committed to driving business excellence by providing cutting-edge consulting services that enhance operational efficiency, optimize performance, and ensure sustainable growth. Our mission is to help businesses navigate the complexities of the global market with confidence and agility."
            image2={whoright}
          />

<DoCard
  heading="What We Do?"
  contentList={[
    'Business Strategy & Planning – Crafting data-driven strategies for long-term success.',
    'Market Expansion & Entry Strategies – Helping businesses tap into new markets with confidence.',
    'Financial & Investment Advisory – Providing expert financial insights for smarter decision-making.',
    'Corporate Restructuring & Risk Management – Enhancing business resilience in a dynamic world.',
    'Digital Transformation & Innovation – Leveraging technology to unlock new growth opportunities.'
  ]}
  image={whatWeDoImg}
/>

        </div>
           
        <Services showButton={false} />
        <Global/>
        <Footer/>
    </>
  )
}
import './About.css'
export default About
