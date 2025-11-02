const form = document.querySelector('form')
const button = document.querySelector('button')


form.addEventListener('submit', (e) => {
    e.preventDefault();

    const weight = document.querySelector('#weight').value;
    const height = document.querySelector('#height').value;

    const result = weight / ((height / 100) ** 2);

    document.querySelector('#result').innerHTML = (result).toFixed(2);
})
