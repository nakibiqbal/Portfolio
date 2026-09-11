import Image from "next/image";
import "./Section7.css";
import myImg from "@/src/assets/MyPhotos/edit2.webp";

export default function Section7() {
  return (
    <section id="section7">
      <div className="profilePic">
        <Image src={myImg} alt="Picture of Nakib" fill placeholder="blur" />
      </div>
    </section>
  );
}
