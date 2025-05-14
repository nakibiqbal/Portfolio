/* eslint-disable react/prop-types */
import Variants from "../All_Variants/Variants";

const MainVariant4 = ({ currentVariant }) => {
    const variants = [
        <Variants.Variant7 key={9} mainText="Back&nbsp;without&nbsp;Front" rangeOFscramble={[60, 100]} animReset={2200} />,
        <Variants.Variant3 key={4} text="Shadow&nbsp;of&nbsp;Fade" />,
        <Variants.Variant4 key={5} text="Truth&nbsp;lies" duration={0.45} />,
        <Variants.Variant2
            key={3}
            delaying={[0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1]}
            fadingOut={2000}
            restart={5600}
            text="We&nbsp;see&nbsp;more&nbsp;in&nbsp;darkness."
            value={3}
            staggerValue={0.04}
        />,
        <Variants.Variant2
            key={2}
            delaying={[0.1, 0.2, 0.5, 0.6, 0.8]}
            fadingOut={1700}
            restart={3700}
            text="Standing&nbsp;still&nbsp;is&nbsp;moving"
            value={2}
            staggerValue={0.03}
        />,
        <Variants.Variant1 key={1} text="Dark&nbsp;days....." />,
        <Variants.Variant5 key={7} text="The&nbsp;System" />,
        <Variants.Variant6 key={8} text1="True" text2="False" text3="True" text4="False" text5="True" rangeOFscramble={[35, 50]} />,
        <Variants.Variant7 key={9} mainText="Artificial&nbsp;Intelligence" rangeOFscramble={[65, 125]} animReset={2800} />,
        <Variants.Variant4 key={6} text="Anonymous" duration={0.15} />,
        <Variants.Variant1 key={1} text="" />,
        <Variants.Variant3 key={4} text="Good&nbsp;Times" />,
        <Variants.Variant2
            key={2}
            delaying={[0.1, 0.2, 0.5, 0.6, 0.8]}
            fadingOut={1700}
            restart={3700}
            text="Perfection&nbsp;is&nbsp;a&nbsp;trap"
            value={2}
            staggerValue={0.03}
        />,
        <Variants.Variant6 key={8} text1="Alternatives..." text2="Alternatives..." text3="Alternatives..." text4="Alternatives..." text5="Alternatives..." rangeOFscramble={[35, 50]} />,
        <Variants.Variant5 key={7} text="The&nbsp;Paradox" />,

    ];
    return (
        <>
            {variants[currentVariant - 1] || null}
        </>
    )
}

export default MainVariant4
