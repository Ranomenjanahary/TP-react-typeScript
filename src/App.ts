const compter = document.querySelector('compter') 
    let i = 0;

const increment = (e: Event) => {
    e.preventDefault();
    i++;
    
    const span = compter?.querySelector('span')

    if( span ){
        span.innerText = span.toString()
    }
}

compter?.addEventListener('click', increment)
