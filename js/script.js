var main = document.querySelector('#main-content')


const states = [

    {
        src: 'images/states/california/california-daytime.jpg'
    },
    {
        src: 'images/states/texas/stafford.jpg'
    },
    {
        src: 'images/states/florida/myers-beach.jpg'
    },
    {
        src: 'images/states/new-york/city-sunrise.jpg'
    },
    {
        src: 'images/states/pennsylvania/schuylkill-river.jpg'
    },
    {
        src: 'images/states/illinois/chicago-nighttime.jpg'
    },
    {
        src: 'images/states/ohio/cincinnati.jpg'
    },
    {
        src: 'images/states/georgia/savannah.jpg'
    },
    {
        src: 'images/states/north-carolina/builtmore.jpg'
    },
    {
        src: 'images/states/michigan/city.jpg'
    },
    {
        src: 'images/states/new-jersey/jersey-city.jpg'
    },
    {
        src: 'images/states/virginia/beach.jpg'
    },
    {
        src: 'images/states/washington/capital.jpg'
    },
    {
        src: 'images/states/arizona/antelope.jpg'     
    },
    {
        src: 'images/states/massachusetts/boston.jpg'
    },
    {
        src: 'images/states/tennessee/urban.jpg'
    },
    {
        src: 'images/states/indiana/scottish.jpg'
    },
    {
        src: 'images/states/maryland/sun.jpg'
    },
    {
        src: 'images/states/missouri/street.jpg'     
    },
    {
        src: 'images/states/wisconsin/building.jpg'
    },
    {
        src: 'images/states/colorado/point.jpg'     
    },
    {
        src: 'images/states/minnesota/sunset.jpg'
    },
    {
        src: 'images/states/south-carolina/architecture.jpg'
    },
    {
        src: 'images/states/alabama/sunrise.jpg'
    },
    {
        src: 'images/states/louisiana/tropical.jpg'
    },
    {
        src: 'images/states/kentucky/bridge.jpg'     
    },
    {
        src: 'images/states/oregon/lake.jpg'
    },
    {
        src: 'images/states/oklahoma/sunset.jpg'
    },
    {
        src: 'images/states/connecticut/saville.jpg'
    },
    {
        src: 'images/states/utah/arch.jpg'
    }

];


const state = states[29];

main.innerHTML = `<div class="state-card"><img src='${state.src}'class="imagen"/> </div>`;



setInterval(() => {
    
  const randomIndex = Math.floor(Math.random() * states.length);
  const state = states[randomIndex];

  main.innerHTML = `<div class="state-card"><img src='${state.src}'class="imagen"/> </div>`;

}, 3000);

