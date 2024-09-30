function generateRandomColor() {
    // Generate random values for red, green, and blue
    const r = Math.floor(Math.random() * 256);
    console.log("vaue of r",r);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    // Create the color string in RGB format
    const randomColor = `rgb(${r}, ${g}, ${b})`;
    console.log("value of rgb", randomColor);

    // Change the background color of the body
    document.body.style.backgroundColor = randomColor;
    
}
generateRandomColor()