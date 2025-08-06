var main = document.querySelector('#main')
var button = document.querySelector('#button')
var search = document.querySelector('#search')


const states = [

    {
        city:'Nevada',
        src: 'images/other-places/nevada.jpg',
        href: 'other-states/nevada.html'
    },
    {
        city:'Hawaii',
        src:'images/other-places/hawaii.jpg',
        href: 'other-states/hawaii.html'
    },
    {
        city:'Alaska',
        src:'images/other-places/alaska.jpg',
        href: 'other-states/alaska.html'
    },
    {
        city:'New Mexico',
        src: 'images/other-places/newmexico.jpg',
        href: 'other-states/new-mexico.html'
    },
    {
        city:'Kansas',
        src: 'images/other-places/kansas.jpg',
        href: 'other-states/kansas.html'
    },
    {
        city:'Nebraska',
        src: 'images/other-places/nebraska.jpg',
        href: 'other-states/nebraska.html'
    },
    {
        city:'Mississippi',
        src: 'images/other-places/mississippi.jpg',
        href: 'other-states/mississippi.html'
    },
    {
        city:'Arkansas',
        src: 'images/other-places/arkansas.jpg',
        href: 'other-states/arkansas.html'
    },
    {
        city:'Rhode Island',
        src: 'images/other-places/rhodeisland.jpg',
        href: 'other-states/rhode-island.html'
    },
    {
        city:'Montana',
        src: 'images/other-places/montana.jpg',
        href: 'other-states/montana.html'
    },
    {
        city:'Delaware',
        src: 'images/other-places/delaware.jpg',
        href: 'other-states/delaware.html'
    },
    {
        city:'Vermont',
        src: 'images/other-places/vermont.jpg',
        href: 'other-states/vermont.html'
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
            
    
    console.log(filtlar)


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