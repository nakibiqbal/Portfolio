import Image from "next/image";
import "./Section7.css";

export default function Section7() {
  return (
    <section id="section7">
      <div className="profilePic">
        <Image
          src="https://ik.imagekit.io/nakibKit/My%20Images/edit2.jpg?tr=f-auto,q-auto&updatedAt=1748281091838"
          alt="Picture of Nakib"
          fill
        />
      </div>
    </section>
  );
}
