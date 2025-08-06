var main = document.querySelector('#main')
var button = document.querySelector('#button')
var search = document.querySelector('#search')


const states = [

    {
        city:'California',
        src: 'images/main/california.jpg',
        href: 'states/california.html'
    },
    {
        city:'Texas',
        src:'images/main/texas.jpg',
        href: 'states/texas.html'
    },
    {
        city:'Florida',
        src:'images/main/florida.jpg',
        href: 'states/florida.html'
    },
    {
        city:'Pennsylvania',
        src: 'images/main/pennsylvania.jpg',
        href: 'states/pennsylvania.html'
    },
    {
        city:'New York',
        src: 'images/main/newyork.jpg',
        href: 'states/new-york.html'
    },
    {
        city:'Illinois',
        src: 'images/main/illinois.jpg',
        href: 'states/illinois.html'
    },
    {
        city:'Ohio',
        src: 'images/main/ohio.jpg',
        href: 'states/ohio.html'
    },
    {
        city:'Georgia',
        src: 'images/main/georgia.jpg',
        href: 'states/georgia.html'
    },
    {
        city:'North Carolina',
        src: 'images/main/northcarolina.jpg',
        href: 'states/north-carolina.html'
    },
    {
        city:'Michigan',
        src: 'images/main/michigan.jpg',
        href: 'states/michigan.html'
    },
    {
        city:'New Jersey',
        src: 'images/main/newjersey.jpg',
        href: 'states/new-jersey.html'
    },
    {
        city:'Virginia',
        src: 'images/main/virginia.jpg',
        href: 'states/virginia.html'
    },
    {
        city:'Washington',
        src: 'images/main/washington.jpg',
        href: 'states/washington.html'
    },
    {
        city:'Arizona',
        src: 'images/main/arizona.jpg',
        href: 'states/arizona.html'
    },
    {
        city:'Massachusetts',
        src: 'images/main/massachusetts.jpg',
        href: 'states/massachusetts.html'
    },
    {
        city:'Tennessee',
        src: 'images/main/tennessee.jpg',
        href: 'states/tennessee.html'
    },
    {
        city:'Indiana',
        src: 'images/main/indiana.jpg',
        href: 'states/indiana.html'
    },
    {
        city:'Maryland',
        src: 'images/main/maryland.jpg',
        href: 'states/maryland.html'
    },
    {
        city:'Missouri',
        src: 'images/main/missouri.jpg',
        href: 'states/missouri.html'
    },
    {
        city:'Wisconsin',
        src: 'images/main/wisconsin.jpg',
        href: 'states/wisconsin.html'
    },
    {
        city:'Colorado',
        src: 'images/main/colorado.jpg',
        href: 'states/colorado.html'
    },
    {
        city:'Minnesota',
        src: 'images/main/minnesota.jpg',
        href: 'states/minnesota.html'
    },
    {
        city:'South Carolina',
        src: 'images/main/southcarolina.jpg',
        href: 'states/south-carolina.html'
    },
    {
        city:'Alabama',
        src:'images/main/alabama.jpg',
        href: 'states/alabama.html'
    },
    {
        city:'Louisiana',
        src:'images/main/louisiana.jpg',
        href: 'states/louisiana.html'
    },
    {
        city:'Kentucky',
        src:'images/main/kentucky.jpg',
        href: 'states/kentucky.html'
    },
    {
        city:'Oregon',
        src:'images/main/oregon.jpg',
        href: 'states/oregon.html'
    },
    {
        city:'Oklahoma',
        src:'images/main/oklahoma.jpg',
        href: 'states/oklahoma.html'
    },
    {
        city:'Connecticut',
        src:'images/main/connecticut.jpg',
        href: 'states/connecticut.html'
    },
    {
        city:'Utah',
        src:'images/main/utah.jpg',
        href: 'states/utah.html'
    }

];

main.innerHTML = states.map(state=>
    

    `<div class="state-card"><a href='${state.href}'><img src='${state.src}'class="imagen"/><h2>${state.city}</h2> </a></div>` 
).join('')



search.addEventListener('keydown', (event)=>{
    
    if(event.key === 'Enter'){
        
        generateStates();  

    }

})


search.addEventListener('input', () => {


    const filtlar = states.filter(state => state.city.toLowerCase().includes(search.value.toLowerCase()))


    main.innerHTML = filtlar.map(esto=>
    
    
        `<div class="state-card"><a href='${esto.href}'><img src='${esto.src}'class="imagen"/><h2>${esto.city}</h2> </a></div>` 
    ).join('')
    
    
})


function generateStates(){

    
    for(var esto of states){
        
    
        if(search.value === esto.city) {
            
            console.log("Numbr on!")
            alert('NY!')
            const real = states.filter(state =>
                
                state.city == search.value,

            )

            main.innerHTML = "",

            main.innerHTML = real.map(esto=>
                `<div class="state-card"><img src='${esto.src}'class="imagen"/><h2>${esto.city}</h2> </div>` 
            ).join('')
            

        } else if(search.value === esto.city.toLowerCase()) {
            

            const real = states.filter(state =>
                
                state.city.toLowerCase() == search.value,

            )

            main.innerHTML = "",

            main.innerHTML = real.map(esto=>
                `<div class="state-card"><img src='${esto.src}'class="imagen"/><h2>${esto.city}</h2> </div>` 
            ).join('')
        }


    }
    
}








