// let allphone =[]
const url =`https://openapi.programming-hero.com/api/phones?search=apple`
fetch(url)
.then(res => res.json())
.then(data =>{
  allphone=data.data
  console.log(allphone);
  displaydata(allphone,6)
})

const displaydata = (phones,number)=>{
  let displayphones =phones
  const seeall =document.getElementById("see-all")
  if(number){
    displayphones =phones.slice(0,number)
    seeall.classList.remove("d-none")
  }
  else{
    seeall.classList.add("d-none")
  }
    const phonescontener= document.getElementById('contener');
    phonescontener.innerHTML="";
    displayphones.forEach(phone => {
         const phonesDiv= document.createElement("div");
         phonesDiv.classList.add("col");
         phonesDiv.innerHTML =`
         <div class="card p-5">
                  <img src="${phone.image}" class="card-img-top" alt="...">
                  <div class="card-body">
                    <h5 class="card-title">${phone.phone_name}</h5>
                    <p class="card-text">${phone.slug}</p>
              </div>
         `
         phonescontener.appendChild(phonesDiv);
      })
  }
  document.getElementById("see-all").addEventListener("click",function(){
    displaydata(allphone)
  })
