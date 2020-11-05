const APP_KEY ="b56eb522df6357c0975a76e12223758e";
const APP_ID ="112a5752";

const serachText = document.getElementById('search-text');
const serachForm = document.getElementById('search-form');
const contData = document.getElementById('cont-data');
const loader = document.getElementById('loader');

serachForm.addEventListener('submit',function(e){
e.preventDefault();

let val = serachText.value;
const app_url=`https://api.edamam.com/search?q=${val}&app_id=${APP_ID}&app_key=${APP_KEY}`;
 contData.innerHTML=''
$.ajax({

    type:"GET",
    url:app_url,
    beforeSend:function(){
        loader.classList.remove('d-none');
    },
    success:function(data){
   const allData = data.hits;
   allData.map((item)=>{
    contData.innerHTML+=`
    <div class="col-sm-4">
    <div class="card my-3">
        <img src="${item.recipe.image}"alt ="" class="cardImage w-100"/>
        <div class="card-body">
            <h4 class="card-title">${item.recipe.label}</h4>
            <p class="card-text">
            calories :
               ${item.recipe.calories.toFixed(2)}

            </p>
        </div>
    </div>

</div>
    `
   })
   loader.classList.add('d-none');

    // console.log(data.hits[0].recipe.label);
    // console.log(data.hits[0].recipe.calories);
    // console.log(data.hits[0].recipe.image);

    },
    error:function(error)
    {
    console.log(error);
    }



})

})