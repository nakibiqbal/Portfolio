/* eslint-disable react/prop-types */
import Variants from "../All_Variants/Variants";

const MainVariant2 = ({ currentVariant }) => {
    const variants = [
        <Variants.Variant2
            key={3}
            delaying={[0.5, 0.8, 1.1, 1.4, 1.7]}
            fadingOut={3000}
            restart={5500}
            text="Perfection&nbsp;is&nbsp;a&nbsp;trap"
            value={2}
            staggerValue={0.02}
        />,
        <Variants.Variant4 key={5} text="Stoicism" duration={0.5} />,
        <Variants.Variant7 key={9} mainText="The&nbsp;Matrix&nbsp;Lies" rangeOFscramble={[37, 35]} animReset={1700} />,
        <Variants.Variant5 key={7} text="FOCUS" />,
        <Variants.Variant2
            key={2}
            delaying={[0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8]}
            fadingOut={1700}
            restart={3700}
            text="Infinity&nbsp;doesn't&nbsp;exist"
            value={2}
            staggerValue={0.05}
        />,
        <Variants.Variant3 key={4} text="No&nbsp;coincidences" />,
        <Variants.Variant1 key={1} text="Lets&nbsp;Start" />,
        <Variants.Variant6 key={8} text1="Hallucinations" text2="Illusion" text3="Apparition" text4="Phantasm" text5="Delusion" rangeOFscramble={[35, 50]} />,
        <Variants.Variant4 key={6} text="See&nbsp;the&nbsp;unseen" duration={0.2} />,

        <Variants.Variant3 key={4} text="I&nbsp;know&nbsp;nothing" />,
        <Variants.Variant1 key={1} text="Behind&nbsp;you" />,
        <Variants.Variant7 key={9} mainText="Don't&nbsp;fall&nbsp;into&nbsp;the&nbsp;loop" rangeOFscramble={[35, 50]} animReset={2500} />,
        <Variants.Variant2
            key={3}
            delaying={[0.5, 0.8, 1.1, 1.4, 1.7]}
            fadingOut={3000}
            restart={5500}
            text="Nothing&nbsp;stays"
            value={2}
            staggerValue={0.02}
        />,
        <Variants.Variant5 key={7} text="Good&nbsp;People" />,
        <Variants.Variant4 key={5} text="Anonymous___" duration={0.5} />,
    ];
    return (
        <>
            {variants[currentVariant - 1] || null}
        </>
    )
}

export default MainVariant2
