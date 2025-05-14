/* eslint-disable react/prop-types */
import Variants from "../All_Variants/Variants";

const MainVariant5 = ({ currentVariant }) => {
    const variants = [
        <Variants.Variant4 key={6} text="Infinity&nbsp;doesn't exist" duration={0.3} />,
        <Variants.Variant3 key={4} text="in&nbsp;the&nbsp;world" />,
        <Variants.Variant4 key={5} text="Anonymous___" duration={0.45} />,
        <Variants.Variant7 key={9} mainText="Beyond&nbsp;this&nbsp;dimension" rangeOFscramble={[35, 35]} animReset={2500} />,
        <Variants.Variant2
            key={2}
            delaying={[0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8]}
            fadingOut={1700}
            restart={3700}
            text="Good&nbsp;People"
            value={2}
            staggerValue={0.05}
        />,
        <Variants.Variant5 key={7} text="BE&nbsp;YOU" />,
        <Variants.Variant6 key={8} text1="Escaping&nbsp;reality" text2="Escaping&nbsp;reality" text3="Escaping&nbsp;reality" text4="Escaping&nbsp;reality" text5="Escaping&nbsp;reality" rangeOFscramble={[35, 50]} />,
        <Variants.Variant1 key={1} text="Perfection&nbsp;is&nbsp;a&nbsp;trap" />,
        <Variants.Variant2
            key={3}
            delaying={[0.1, 0.3, 0.5, 0.7, 0.9, 1.1, 1.3, 1.5, 1.7, 1.9]}
            fadingOut={2000}
            restart={5600}
            text="We&nbsp;see&nbsp;more&nbsp;in&nbsp;darkness"
            value={3}
            staggerValue={0.01}
        />,
        <Variants.Variant1 key={1} text="Anonymous___" />,
        <Variants.Variant5 key={7} text="Less&nbsp;interaction" />,
        <Variants.Variant7 key={9} mainText="The&nbsp;Paradox" rangeOFscramble={[33, 47]} animReset={1200} />,
        <Variants.Variant2
            key={3}
            delaying={[0.5, 0.9, 1.3, 1.7, 2.1]}
            fadingOut={2500}
            restart={5500}
            text="Memories"
            value={3}
            staggerValue={0.04}
        />,
        <Variants.Variant1 key={1} text="Alternatives..." />,
        <Variants.Variant4 key={5} text="Good&nbsp;Times" duration={0.2} />,
    ];
    return (
        <>
            {variants[currentVariant - 1] || null}
        </>
    )
}

export default MainVariant5