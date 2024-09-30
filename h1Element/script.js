const heading = document.createElement("h1")
heading.innerHTML ="i am h1 tag"
console.log(heading);

const headingTwo=document.createElement("h2")
headingTwo.innerHTML="i am h2 tag"

// document.body.appendChild(heading)
// document.body.appendChild(headingTwo)


const body = document.getElementsByTagName('body')[0]
// console.log(body);
body.appendChild(heading)
body.appendChild(headingTwo)
