import React, { useState, useEffect } from 'react'
import './About.scss';
import { motion } from 'framer-motion';
import { images } from '../../constants';
import { urlFor, client } from '../../client'
import { AppWrap } from '../../wrapper'

const About = () => {

  /*const abouts = [
    { title: "Passionate", description: "I am passionate about creating products to benefit people", imgUrl: images.about01},
    { title: "Open-minded", description: "I am coachable and open to learn new technologies in the industry", imgUrl: images.about02},
    { title: "High Achiever", description: "I go above and beyond to complete a task", imgUrl: images.about03},
    { title: "Resourceful", description: "I seek out opportunities to help my teammates in a working environment", imgUrl: images.about04}
  ]*/
  const [abouts, setAbouts] = useState([]);
  useEffect(() => {
    const query = '*[_type == "abouts"]'
    client.fetch(query)
      .then((data) => setAbouts(data))}, [])
  return (
    <>
      {/*<h2 className="head-text">
        I Know That <span>Adequate Practice</span> <br /> makes <span>Interviews Simpler</span>
  </h2> */ }
       <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            wileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: 'tween' }}
            className="app__profile-item"
            key={about.title.index}
          >
            <img src={urlFor(about.imgUrl)} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>{about.title}</h2>
            <p className="p-text" style={{ marginTop: 10 }}>{about.description}</p> 
          </motion.div>
        ))}
        </div>
    </>
  )
}

export default AppWrap(About, 'about');