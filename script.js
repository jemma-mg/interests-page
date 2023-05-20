const colors=['purple','blue','green','yellow','orange','silver','gold'];

function createSquare(){
    const section = document.querySelector('section');
    const square = document.createElement('span');

    var size = Math.random() * 10;

    square.style.width = size+"px";
    square.style.height = size+"px";

    
    square.style.top = Math.random() * 0.6*innerHeight + 'px';
    square.style.left = Math.random() * innerWidth + 'px';

    const bg = colors[Math.floor(Math.random() * colors.length)];
    square.style.background=bg;
    
    section.appendChild(square);

    setTimeout(() =>{
        square.remove()
    }, 5000);
}
setInterval(createSquare, 20);