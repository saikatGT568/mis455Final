function connect() {

    var searchText = document.getElementById('search').value ; 
    var searchText1 = document.getElementById('search1').value ; 
   
   
   var url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
   
   
    fetch(url)
    .then(res => res.json() )
    .then(data => showData(data));
   
    document.getElementById('search').value = ""; 
   
   }
   
   function showData(data){
   
          console.log("data from showData Function", data);
   
          var oldContent = document.getElementById('container');
          var how_many = parseInt(document.getElementById('howMany').value);
          oldContent.textContent= "";
       // for(int i=0;i<how_many;i++){

      
          for (var i=0; i<data.meals.length; i++){
           console.log(data.meals[i]);
   
           var newDiv = document.createElement('div');
           newDiv.innerHTML = `<p>Meal Title: <span class="title-style">${data.meals[i].strMeal}  </span> </p>
                               <img class='img-style' src="${data.meals[i].strMealThumb}" >`;
                               newDiv.classList.add("meal-style");
   
                               oldContent.appendChild(newDiv);
        
   
          }
//    }
   
   }