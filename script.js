const itemContainer = document.querySelector(".outercontainer");


itemContainer.addEventListener("click",(e)=>{

    let ansId = e.target.dataset.icon;
    // console.log(ansId)

    let ansElement = document.getElementById(ansId);
    // console.log(ansElement)


    if(ansElement){
        if(ansElement.style.display=="block"){
            ansElement.style.display ="none";
        }
        else{
            ansElement.style.display ="block";
        }
    }
})