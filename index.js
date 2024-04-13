let mm = gsap.matchMedia();
mm.add('(max-width: 768px)', () => {
    gsap.from(
        '.autoType' , {
            textStroke : '1px #959595',
            color : '#0F0F0F',
            delay : 1,
            stagger : 0.1,
            repeat : -1,
            yoyo : true
        }
    )
})
mm.add('(min-width: 767px)', () => {
    gsap.from(
        '.autoType' , {
            textStroke : '1px #0F0F0F',
            color : '#959595',
            delay : 1,
            stagger : 0.1,
            repeat : -1,
            yoyo : true
        }
    )
})


gsap.from(
    '.firstLine, .thirdLine, .fourthLine', {
        opacity : 0,
        stagger : 0.8
    }
)
gsap.from(
    '.firstLine' , {
        transform : 'translateX(-50rem)',
        duration : 2
    }
)
gsap.from(
    '.thirdLine h5' , {
        transform : 'translateY(14rem)',
        duration : 2,
    }
)
gsap.from(     
    '.fourthLine' , {
        transform : 'translateX(-20rem)',
        duration : 2,
    }
)
gsap.from(
    '.div2Child' , {
        opacity : 0,
        duration : 5
    }
)