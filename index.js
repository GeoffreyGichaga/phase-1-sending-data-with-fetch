// Add your code here


function submitData(name,email)
{
    fetch('http://localhost:3000/users', {
        method:'POST',
        headers: {
            'Content-Type':'application/json',
            Accept:'application/json',
        },
        body:JSON.stringify({name,email}),

    })
    .then(res=>res.json())

    .then((data)=>{

        const h2 = document.querySelector('#name')
        h2.innerHTML = data.id


    })
   .catch((error)=>{
    const par = document.querySelector('#message')
    par.innerHTML = error
   })
}

