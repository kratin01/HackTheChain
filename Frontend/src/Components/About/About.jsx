import React from "react"
import Card from "./card.jsx"
import ajayimg from "../../assest/aboutPhotos/Ajay.jpg"
import amitimg from "../../assest/aboutPhotos/Amit.jpg"
import anandimg from "../../assest/aboutPhotos/Anand.jpg"
import prernaimg from "../../assest/aboutPhotos/Prerna.jpg"
import iconimg from "../../assest/aboutPhotos/user.png"

const About = () => {
  return (
    <div >
      <h1 className="text-3xl font-bold text-center">About</h1>
      <div className="flex justify-around my-24">
        <Card name="Dr. Anand" details="Warden Block A Boys Hostel" img={anandimg} number="9549655278" email="anand.ece@iiitkota.ac.in"/>
        <Card name="Dr. Amit" details="Warden Block B Boys Hostel" img={amitimg} number="9872345670" email="amit@iiitkota.ac.in"/>
        <Card name="Dr. Ajay" details="Warden Block C Boys Hostel" img={ajayimg} number="9549652321" email="ajay.cse@iiitkota.ac.in"/>
        <Card name="Dr. Prerna" details="Warder Girls Hostel" img={prernaimg} number="9929782899" email="prerna@iiitkota.ac.in"/>
      </div>
      <div className="flex justify-around my-24">
        <Card name="Mr. Dharmendra" details="Caretaker Boys Hostel" img={iconimg} number="9872345670" email="iiitkota.ac.in"/>
        <Card name="Mr. Trilok" details="Caretaker Boys Hostel" img={iconimg} number="9872345670" email="iiitkota.ac.in"/>
        <Card name="Mr. Ankit" details="Caretaker Boys Hostel" img={iconimg} number="9872345670" email="iiitkota.ac.in"/>
        <Card name="Mr. 4" details="Caretaker Boys Hostel" img={iconimg} number="9872345670" email="iiitkota.ac.in"/>
      </div>
    </div>
  )
}

export default About