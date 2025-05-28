import { Link } from "react-router-dom";
import "./Section7.css";
export default function Section7() {
    return (
        <section id="section7">

            <div
                style={{
                    backgroundImage: "url(https://ik.imagekit.io/nakibKit/My%20Images/edit2.jpg?tr=f-auto,q-auto&updatedAt=1748281091838)",
                }}
                className="profilePic">
            </div>

            <Link to="/images" className="animated-button" >
                <svg viewBox="0 0 24 24" class="arr-2" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
                    ></path>
                </svg>
                <span class="text">More Images of me</span>
                <span class="circle"></span>
                <svg viewBox="0 0 24 24" class="arr-1" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
                    ></path>
                </svg>
            </Link>


        </section>
    )
}
