/* eslint-disable react/prop-types */
import Variants from "../All_Variants/Variants";
const MainVariant1 = ({ currentVariant }) => {
    const variants = [
        <Variants.Variant1 key={1} text="Good&nbsp;Times" />,
        <Variants.Variant2
            key={2}
            delaying={[0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8]}
            fadingOut={1700}
            restart={3700}
            text="Good&nbsp;People"
            value={2}
            staggerValue={0.05}
        />,
        <Variants.Variant2
            key={3}
            delaying={[0.5, 0.9, 1.3, 1.7, 2.1]}
            fadingOut={2500}
            restart={5500}
            text="Memories"
            value={3}
            staggerValue={0.04}
        />,
        <Variants.Variant3 key={4} text="Be&nbsp;the&nbsp;best" />,
        <Variants.Variant4 key={5} text="Less,&nbsp;but&nbsp;deeper" duration={0.5} />,
        <Variants.Variant4 key={6} text="Believe" duration={0.2} />,
        <Variants.Variant5 key={7} text="GAIN" />,
        <Variants.Variant6 key={8} text1="Infinity" text2="doesn't exist" text3="in the world" text4="in the world" text5="in the world" rangeOFscramble={[35, 50]} />,
        <Variants.Variant7 key={9} mainText="Break&nbsp;the&nbsp;system" rangeOFscramble={[35, 40]} animReset={1700} />,
        <Variants.Variant3 key={4} text="No&nbsp;coincidences" />,
        <Variants.Variant2
            key={3}
            delaying={[0.5, 0.7, 0.9, 1.1, 1.3]}
            fadingOut={1800}
            restart={4000}
            text="Infinity&nbsp;doesn't&nbsp;exist"
            value={2}
            staggerValue={0.03}
        />,
        <Variants.Variant1 key={1} text="in&nbsp;the&nbsp;world..." />,
        <Variants.Variant6 key={8} text1="True" text2="False" text3="True" text4="False" text5="True" rangeOFscramble={[35, 50]} />,
        <Variants.Variant4 key={5} text="Behind&nbsp;you" duration={0.4} />,
        <Variants.Variant7 key={9} mainText="The&nbsp;world&nbsp;is&nbsp;a&nbsp;mirror&nbsp;of&nbsp;lies" rangeOFscramble={[35, 35]} animReset={3000} />,
    ];
    return (
        <>
            {variants[currentVariant - 1] || null}
        </>
    )
}

export default MainVariant1
