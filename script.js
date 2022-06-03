const button = document.querySelector('button');

const addLoading = () => {
const button = document.querySelector('button');
button.innerHTML = '<img src="./Loading2.png" class="loading">'

}
const removeLoading = () => {
    button.innerHTML = 'Enviar'
    
    }
const handleSumbmit = (event) => {
    event.preventDefault();
    addLoading();
    const name = document.querySelector('input[name=name]').value;
    const email = document.querySelector('input[name=email]').value;
   fetch('https://api.sheetmonkey.io/form/4voGm1ApLn6793UXyXiz9v',{

    method: 'post',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',

    },
    body: JSON.stringify({name,email}),

   }).then(() => alert('Dados Enviados')).then(() => removeLoading());
}

document.querySelector('form').addEventListener('submit',handleSumbmit);