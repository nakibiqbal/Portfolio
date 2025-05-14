/* eslint-disable react/prop-types */
import Variants from "../All_Variants/Variants";

const MainVariant6 = ({ currentVariant }) => {
    const variants = [
        <Variants.Variant6 key={8} text1="Be&nbsp;the&nbsp;best" text2="Be&nbsp;the&nbsp;best" text3="Be&nbsp;the&nbsp;best" text4="Be&nbsp;the&nbsp;best" text5="Be&nbsp;the&nbsp;best" rangeOFscramble={[35, 50]} />,
        <Variants.Variant3 key={4} text="Nothing&nbsp;stays" />,
        <Variants.Variant5 key={7} text="Lets&nbsp;Start" />,
        <Variants.Variant1 key={1} text="Into&nbsp;the&nbsp;Void" />,
        <Variants.Variant2
            key={3}
            delaying={[0.1, 0.3, 0.5, 0.7, 0.9, 1.1]}
            fadingOut={2000}
            restart={5600}
            text="Dark&nbsp;days....."
            value={3}
            staggerValue={0.01}
        />,
        <Variants.Variant4 key={6} text="Standing&nbsp;still&nbsp;is&nbsp;moving" duration={0.3} />,
        <Variants.Variant1 key={1} text="The&nbsp;Matrix" />,
        <Variants.Variant7 key={9} mainText="See&nbsp;the&nbsp;unseen" rangeOFscramble={[35, 38]} animReset={1500} />,
        <Variants.Variant2
            key={2}
            delaying={[0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8]}
            fadingOut={1700}
            restart={3700}
            text="Beyond&nbsp;this&nbsp;dimension"
            value={2}
            staggerValue={0.05}
        />,
        <Variants.Variant4 key={5} text="No&nbsp;coincidences" duration={0.45} />,
        <Variants.Variant7 key={9} mainText="The&nbsp;Paradox" rangeOFscramble={[33, 47]} animReset={1500} />,
        <Variants.Variant4 key={5} text="Good&nbsp;Times" duration={0.2} />,
        <Variants.Variant5 key={7} text="Memories" />,
        <Variants.Variant1 key={1} text="Anonymous___" />,
        <Variants.Variant2
            key={3}
            delaying={[0.5, 0.9, 1.3, 1.7, 2.1]}
            fadingOut={3000}
            restart={5500}
            text="Artificial&nbsp;Intelligence"
            value={3}
            staggerValue={0.04}
        />,
    ];
    return (
        <>
            {variants[currentVariant - 1] || null}
        </>
    )
}

export default MainVariant6
