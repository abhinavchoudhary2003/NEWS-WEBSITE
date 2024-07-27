// here we fetch Api  using fetch() function
let key = "55ca43a29aa540949b2bd22ad5264b50";
let cardData = document.querySelector(".cardData"); //here we use Queryselector for class(cardData)
let SearchBtn = document.getElementById("searchBtn");//here we target searchbutton  
let inputData = document.getElementById("inputData");// same target inputdata
let searchType = document.getElementById("type");

const getData = async(input) =>{   // Async await shows response  otherwise without async await it will show pending
    let res = await fetch(`https://newsapi.org/v2/everything?q=${input}&apiKey=${key}`);
    let jsonData = await res.json();
    console.log(jsonData.articles);  

    searchType.innerText="Search : "+input; // here joh b humne search kraa hoga voh upr show ho jayega like "Search:india"

    inputData.value=""; // here after search anything in searchbar searchbar will become "Empty automatic"
    
    cardData.innerHTML=""; // here if we search first search pm modi it shows and then remove pm mode and search other thing it will show again & again

    jsonData.articles.forEach(function(article){ // use foreach loop to iterate every single articles related to that news
    console.log(article);
    let divs = document.createElement("div"); // here we create div 
    divs.classList.add("card") ;   // here we add class(name card) inside divs
    cardData.appendChild(divs);//append divs element

     // here we store the image, title,description, of news inside the divs
    divs.innerHTML=`   
     <img src="${article.urlToImage}" alt="">
     <h3>${article.title}</h3>
     <p>${article.description}</p>
    `   
    divs.addEventListener("click",function(){ // here we add if we click on any news article it shows that full news article on other website.
        window.open(article.url)
    })                                         
    })

   
            
}  

// Here jbh bhi hum website ko run krenge toh Bydefault it Shows "INDIA" related news
window.addEventListener("load" , function(){
getData("India");
})



// here we make search button responsive to search whole world news
SearchBtn.addEventListener("click",function(){
    let inputText = inputData.value; // here if we search india in searchbar it shows india related news like this and this ${input} we call in api.
    getData(inputText);                                                                    

})

// here if we click on navbar items it shows that items related news like if we click on politics it shows politics related news
function navClick(navName){
    if(navName == "politics"){
        document.getElementById("politics").style.color="rgb(0,140,255)";
        document.getElementById("sports").style.color="white";
        document.getElementById("technology").style.color="white";
    }
    if(navName == "sports"){
        document.getElementById("politics").style.color="white";
        document.getElementById("sports").style.color="rgb(0,140,255)";
        document.getElementById("technology").style.color="white";
    }
    if(navName == "technology"){
        document.getElementById("politics").style.color="white";
        document.getElementById("sports").style.color="white";
        document.getElementById("technology").style.color="rgb(0,140,255)";
    }
    getData(navName)
}


                                                                   




// Async await shows response  otherwise without async await it will show pending
// here we use Async await with the help of this jbh tk hume data nhi milta Api se hum ruke rehte hai data ke liye
 // agr hum async await ka use na kre toh yeh hume joh Api se data AA rha hai voh nhi milega voh hume pending state mai dhaal dega                                                
// Reason: java function is very fast aur Api se data AAne mai tym lgata hai that why we use Async await       