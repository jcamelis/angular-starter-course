var prism = {
    l: 5,
    w: 8,
    color: "#F00",
    
}

function rectPrismArea({l, w, h = 10}) {
    return l * w * h;
}

console.log(rectPrismArea(prism));
