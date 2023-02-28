let startNum;
let endNum;
let btn=document.querySelectorAll("#page button");
btn.forEach(x => {
    x.addEventListener("click",function(){
        console.log(x.getAttribute("start"))
        console.log(x.getAttribute("end"))
        startNum = x.getAttribute("start");
        endNum = x.getAttribute("end");


const row = document.querySelector(".row");
fetch("https://mocki.io/v1/d57fce1d-27a9-4881-8229-4336e30d14ae")
  .then((res) => res.json())
  .then((products) => {
    let col = "";

        products.splice(startNum,endNum).map((item) => {
      col += `<div class="col-12 col-sm-6 col-md-4">
        <div class="card" >
  <img height="auto" src="${item.photo}" class="card-img-top" alt="...">
  <div class="card-body text-center">
    <h5 class="card-title">${item.title}</h5>
    <p class="card-text"><b>Price: ${item.price}...</b></p>
    <a href="#" class="btn btn-primary">Add to card</a>
  </div>
        </div>
        </div>`;
    });
console.log(col);
    row.innerHTML = col;
  });




    })
})
