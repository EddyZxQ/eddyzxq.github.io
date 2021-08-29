const tween = KUTE.fromTo(
    '#blob1b',
    {path: '#blob1b'},
    {path: '#blob2b'},
    {repeat: 999, duration: 3000, yoyo:true}

)

tween.start();