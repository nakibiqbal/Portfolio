import "./Section7.css";
import Button from "../../Button/Button";
export default function Section7() {
    return (
        <section id="section7">

            <div
                style={{
                    backgroundImage: "url(https://ik.imagekit.io/nakibKit/My%20Images/edit2.jpg?tr=f-auto,q-auto&updatedAt=1748281091838)",
                }}
                className="profilePic">
            </div>

            <Button page="/images" text="more images of me" />

        </section>
    )
}
