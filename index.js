async function getdata(value) {
  let x = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${value}`)


  let data = await x.json()


   
      return data
    
  
}

async function Drop(id) {
  let y = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
  let data = await y.json()
  return data
}

document.addEventListener("click", function() {
  const mymod=document.getElementById("modaldiv")
  mymod.innerHTML=''
  });
  


async function  handle(){

  const text=document.getElementById('text')
  console.log(text.value);
  val=text.value



let data = await getdata(val)




console.log(data);



const search_meal = document.getElementById('search_meal')
search_meal.innerHTML=''


  data.meals.forEach(e => {

 

    const div = document.createElement('div')

    div.classList.add('box');


    
    div.innerHTML =



      `

    <div class="card" style="20rem">
  <img class="img card-img-top" src="${e.strMealThumb}"  alt="...">
  <div class="card-body">
    <h5 class="card-title"><b>${e.strTags}</b></h5>
    
  
    <p>Category:${e.strCategory}</p>
    <button type="submit" class="btn btn-primary " onclick="Dro(${e.idMeal})">Details</button>
  
  </div>
</div> 
    
    
    
  `
 

  search_meal.appendChild(div)


  
 




  

})

  // }

}



  



 

 






const Dro = async (id) => {

  let e = await Drop(id)
  document.getElementById("modaldiv").scrollIntoView({ behavior: "smooth" });

  console.log(id);
  const myModal=document.getElementById('modaldiv')

  myModal.innerHTML=" "
  
  const f=e.meals[0]
  

  console.log(f)



  

  
  

 
  



  

  const modiv=document.createElement('div')




  
  
  modiv.innerHTML =

  `
  
         
   
    
  <div class="ccc card" style="15rem">
  <img src="${f.strMealThumb}" class="im card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title"><b>${f.strTags}</b></h5>
    
  
    <p>Category:${f.strCategory}</p>

    <p>instruction:${f.strInstructions}</p>
    <button class="btn btn-warning"> close</button>
  
  </div>
</div> 
    
 

  
  `
myModal.appendChild(modiv)






const modal=new bootstrap.Modal(document.getElementById("myModal"))

modal.show()





}



// main()

