var main = document.querySelector('#main');

const states = [

    {
         src: '../images/states/wisconsin/urban.jpg'     
    },
    {
        src: '../images/states/wisconsin/building.jpg'
    },
    {
        src: '../images/states/wisconsin/background.jpg'
    },
    {
        src: '../images/states/wisconsin/milwaukee.jpg'
    },
    {
        src: '../images/states/wisconsin/downtown.jpg'
    },
    {
        src: '../images/states/wisconsin/fall.jpg'
    },
    {
        src: '../images/states/wisconsin/horicon.jpg'
    },
    {
        src: '../images/states/wisconsin/muir.jpg'
    },
    {
        src: '../images/states/wisconsin/apostle.jpg'
    },
    {
        src: '../images/states/wisconsin/brule.jpg'
    },
    {
        src: '../images/states/wisconsin/merrill.jpg'
    },
    {
        src: '../images/states/wisconsin/river.jpg'
    }

];


main.innerHTML = states.map(state=>
    
    `<div class="state-card"><img src='${state.src}'class="imagen" loading="lazy"></div>` 

).join('') 


const cajas = document.querySelectorAll(".state-card");

var imagenMostrada = null;


cajas.forEach((elemento, index)=>{


    var fullest = index;

    elemento.addEventListener('click', ()=>{


            var full = document.createElement('div');

            full.style.position = 'fixed';
            full.style.width = '100%';
            full.style.height = '100%';
            full.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';

            full.style.alignItems = 'center';
            full.style.top = 0;
            full.style.left = 0;
            full.style.overflow = 'hidden';
            full.style.justifyContent = "center";
            full.style.zIndex = "9999";
        

            const copia = elemento.cloneNode(true);
            copia.style.width = '100%';
            copia.style.height = '100%';
            copia.style.alignItems = 'center';
            copia.style.backgroundColor = 'lightblue';
            copia.style.objectFit = "cover";
            document.body.style.overflow = "hidden";
            
            imagenMostrada = copia;

            full.appendChild(imagenMostrada);

            var next = document.createElement('img');
            next.src = 'https://cdn-icons-png.flaticon.com/128/8213/8213522.png';

            next.style.position = 'fixed';
            next.style.width = '5%';
            next.style.height = '9%';
            next.style.top = '82%';
            next.style.cursor = 'pointer';
            next.style.left = '91%';
            next.style.left = '91.8%';
            next.style.zIndex = "9999999";

            full.appendChild(next);

            var prev = document.createElement('img');
            prev.src = 'https://cdn-icons-png.flaticon.com/128/8213/8213500.png';

            prev.style.position = 'fixed';
            prev.style.width = '4.7%';
            prev.style.height = '8.9%';
            prev.style.top = '82.1%';
            prev.style.left = '3.9%';
            prev.style.left = '3%';
            prev.style.cursor = 'pointer';
            prev.style.zIndex = "9999999";

            full.appendChild(prev);

            var close = document.createElement('img');
            close.src = 'https://cdn-icons-png.flaticon.com/128/6583/6583137.png';

            close.style.position = 'fixed';
            close.style.width = '4.6%';
            close.style.height = '7.8%';
            close.style.alignItems = 'center';
            close.style.left = '95.7%';
            close.style.background = '#ffffff';
            close.style.cursor = 'pointer';
            close.style.top = '0%';
            close.style.zIndex = "9999999";

            full.appendChild(close);

            main.appendChild(full);

            var i = fullest;

            
            next.addEventListener('click', ()=>{
                
                i = (i+1) % cajas.length;

                const copiaCajas = cajas[i].cloneNode(true);

                full.removeChild(imagenMostrada);  

                copiaCajas.style.width = '100%';
                copiaCajas.style.width = '100%';
                copiaCajas.style.height = '100%';
                copiaCajas.style.alignItems = 'center';
                copiaCajas.style.objectFit = "cover";
                copiaCajas.style.zIndex = "9999999";

                imagenMostrada = copiaCajas;

                full.appendChild(imagenMostrada);

            })

            prev.addEventListener('click', ()=>{
                
                i = (i-1 + cajas.length) % cajas.length;

                const copiaCajas = cajas[i].cloneNode(true);

                full.removeChild(imagenMostrada);  

                copiaCajas.style.width = '100%';
                copiaCajas.style.height = '100%';
                copiaCajas.style.alignItems = 'center';
                copiaCajas.style.objectFit = "cover";
                copiaCajas.style.zIndex = "9999999";

                imagenMostrada = copiaCajas

                full.appendChild(imagenMostrada);

            })

            close.addEventListener('click', ()=>{

                full.removeChild(next);
                full.removeChild(prev);
                full.removeChild(close);
                full.removeChild(imagenMostrada)
                main.removeChild(full)

                document.body.style.overflow = "scroll";
  
            })        

            
    })
    
    
})  



