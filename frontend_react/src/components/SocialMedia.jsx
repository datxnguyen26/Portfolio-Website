import React from 'react'
import { BsTwitter, BsInstagram } from 'react-icons/bs'
import { FaFacebookF, FaLinkedin } from 'react-icons/fa';
const SocialMedia = () => {
    return (
        <div className="app__social">
            <div>
                <a href="https://www.linkedin.com/in/dat-nguyen-13358b193/" target='_blank'><FaLinkedin /></a>
            </div>
            <div>
                <a href="https://www.facebook.com/profile.php?id=100002475527570" target="_blank"><FaFacebookF /></a>
            </div>
            <div>
                <a href="https://www.instagram.com/fatdatsensei/" target="_blank"><BsInstagram /></a>
            </div>
        </div>
    )
}

export default SocialMedia
