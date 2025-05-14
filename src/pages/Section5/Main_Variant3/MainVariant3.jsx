/* eslint-disable react/prop-types */
import Variants from "../All_Variants/Variants";

const MainVariant3 = ({ currentVariant }) => {
    const variants = [
        <Variants.Variant5 key={7} text="TRUTH&nbsp;LIES" />,
        <Variants.Variant2
            key={2}
            delaying={[0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8]}
            fadingOut={1700}
            restart={3700}
            text="Nothing&nbsp;stays"
            value={2}
            staggerValue={0.05}
        />,
        <Variants.Variant6 key={8} text1="Infinity" text2="doesn't exist" text3="in the world" text4="in the world" text5="in the world" rangeOFscramble={[35, 50]} />,
        <Variants.Variant4 key={5} text="The&nbsp;Parallax" duration={0.45} />,
        <Variants.Variant7 key={9} mainText="Into&nbsp;the&nbsp;Void" rangeOFscramble={[33, 47]} animReset={1400} />,
        <Variants.Variant1 key={1} text="Alternatives..." />,
        <Variants.Variant4 key={6} text="See&nbsp;the&nbsp;unseen" duration={0.3} />,
        <Variants.Variant2
            key={3}
            delaying={[0.1, 0.3, 0.5, 0.7, 0.9, 1.1, 1.3, 1.5, 1.7, 1.9]}
            fadingOut={2000}
            restart={5600}
            text="Don't&nbsp;fall&nbsp;into&nbsp;the&nbsp;loop"
            value={3}
            staggerValue={0.01}
        />,
        <Variants.Variant3 key={4} text="Shadow&nbsp;of&nbsp;Fade" />,
        <Variants.Variant6 key={8} text1="Misunderstanding" text2="Misbehave" text3="Misconception" text4="Misinform" text5="Misadventure" rangeOFscramble={[35, 50]} />,
        <Variants.Variant5 key={7} text="The&nbsp;Paradox" />,
        <Variants.Variant4 key={5} text="Be&nbsp;you" duration={0.45} />,
        <Variants.Variant2
            key={3}
            delaying={[0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1]}
            fadingOut={1800}
            restart={5000}
            text="Let&nbsp;them&nbsp;adjust"
            value={3}
            staggerValue={0.05}
        />,
        <Variants.Variant7 key={9} mainText="Escaping&nbsp;reality" rangeOFscramble={[33, 47]} animReset={1500} />,
        <Variants.Variant3 key={4} text="Break&nbsp;the&nbsp;system" />,

    ];
    return (
        <>
            {variants[currentVariant - 1] || null}
        </>
    )
}

export default MainVariant3
