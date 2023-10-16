
new Glide('.glide', {
    type: 'carousel',
    startAt: 0,
    perView: 3,
    gap: 30,
    breakpoints: {
        991: {
            preView: 2
        },
        768: {
            preView: 1
        }
    }
}).mount()