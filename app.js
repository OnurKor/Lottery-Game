sans = document.getElementById("sans");

let input = document.getElementById("num");
let btn = document.getElementById("btn");


btn.addEventListener("click", ()=>{

    document.querySelector('ul').innerHTML = ""
    


    if (input.value < 9 && input.value > 0 ) {

        for (let i = 0; i < input.value; i++) {


            const arr = new Array();

            while(arr.length < 6){
            const r = Math.floor(Math.random() * 90) + 1 ;
           
            if(arr.indexOf(r) === -1) arr.push(r);
            
            }

            const m = Math.floor(Math.random() * 90) + 1;

            const arr2 = new Array()
            if(arr.indexOf(m) === -1) arr2.push(m);

            // console.log(arr2);


            sentence = arr.sort(function(a,b){ return a-b}).join("-") + "  |  " + arr2 + "  |  " + (Math.floor(Math.random() * 90) + 1) 


            let newListItem = document.createElement('li');
            newListItem.textContent +=  sentence;
            document.querySelector('ul').appendChild(newListItem);
    
        }

    } else {

        alert("Please enter number between 1 to 8")
        
    }


});




 











