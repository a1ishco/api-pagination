const tab = document.querySelector('#tab');


fetch("https://restcountries.com/v3.1/all")
.then(res=>res.json())
.then(fd=>{
    let tb  = "";
    let i=1;
    fd.map(item=>{
        tb+=`<tr class="align-middle">
        <td>${i++}</td>
        <td>${item.name.official}</td>
        <td>${item.capital}</td>
        <td><img src="${item.flags.png}" class="card-img-top" alt="...">
        </td>
</tr>

    `
    })
    tab.innerHTML = tb;
})

