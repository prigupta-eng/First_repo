let counter = 0;

const getData = () => {
  console.log("Fetching data...", counter++);
}   

const debounce = function(func, delay){
    let timer = 0;  
    return function (){
        const args = arguments;
        clearTimeout(timer);
        timer = setTimeout(() => {
            func.apply(this, args);
        }, delay);
    }
}

const betterFunction = debounce(getData, 1000);