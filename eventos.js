const container = document.querySelector('div');
const button = document.querySelector('button');

container.addEventListener("click", function() {
    alert('Hola! Soy el div')
});

button.addEventListener("click", (event) => {
    event.stopPropagation();
});