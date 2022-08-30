const text = "My name is Olawale Oke.\n I'm a design-minded, detail oriented Graphics/Brand Designer and Front-end Developer passionate about combining beautiful code with beautiful designs.";

let index = 0;


function writeText(){
    document.body.innerText = text.slice(0, index);
    index++;

    if (index > text.length - 1){
        index = 0
    }
}


setInterval(writeText, 100);


// function writeText(){
//     document.body.innerText = text.slice(0, index);
//     index++;

//     if (index == text.length){
//         index = 0
//     }
// }