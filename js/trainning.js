const scriptUL = 'https://script.google.com/macros/s/AKfycbyqHJh6AabpkbOXURzn9HAumxrrUzN922UVhbVQMC3JuuiyIMMOYzBbkOd2s2-cCUPy/exec'
const frm = document.forms['submit-to-google-sheet2']
const mg =document.getElementById("mssg");

frm.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptUL, { method: 'POST', body: new FormData(frm) })
        .then(response => {
            mg.innerHTML = "Message Save Successfully"
            setTimeout(function(){
                mg.innerHTML =""
            },5000)
            frm.reset()
        })
        .catch(error => console.error('Error!', error.message))
})