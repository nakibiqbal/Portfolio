import { FaGithub, FaFacebook, FaLinkedin } from 'react-icons/fa';
import { motion } from "framer-motion"
import './Contact.css'; // Import the custom CSS file
import MagnetButton from './MagnetButton';
import bg5 from "../../assets/bg5.png"
import { customEase } from '../../Easings/customEase';

function Contact() {

    return (
        <motion.section
            initial={{ filter: "blur(20px)" }}
            whileInView={{ filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{
                duration: 1.5,
                ease: customEase,
            }}
            id="ContactSection">

            <div className="contactMe">
                <h1>Let&apos;s connect.</h1>

                <div className="openToWork">
                    <motion.span
                        initial={{ boxShadow: "0 0 0 0px green" }}
                        animate={{ boxShadow: "0 0 0 8px green" }}
                        transition={{ repeat: Infinity, repeatType: "reverse", duration: 1 }}
                    ></motion.span>
                    <p>OPEN TO WORK</p>
                </div>

                <div className="CLinks">


                    <div className="mail">
                        <a href="mailto:nakibiqbal.2006@gmail.com">nakibiqbal.2006@gmail.com</a>
                    </div>

                    <div className="contactIcons">
                        <MagnetButton>
                            <a href="https://www.facebook.com/nakib.iqbal.98" target='_blink' ><FaFacebook /></a>
                        </MagnetButton>
                        <MagnetButton>
                            <a href="https://www.linkedin.com/in/nakib-iqbal/" target='_blink'><FaLinkedin /></a>
                        </MagnetButton>
                        <MagnetButton>
                            <a href="https://github.com/nakibiqbal" target='_blink'><FaGithub /></a>
                        </MagnetButton>
                    </div>

                </div>
            </div>

            <div className="islamicQuote">
                <p><b>&ldquo;And whoever fears Allah – He will make for him a way out and provide for him from where he does not expect.&rdquo;</b></p>
                <i>[Surah Al-Mu&apos;min, 40:60]</i>
            </div>

            <div
                className="background"
                style={{
                    backgroundImage: `url(${bg5})`, // Import the background image
                }}
            />

        </motion.section>
    );
}


export default Contact;
