// Write your solution here!
const cats = ["Milo","Otis", "Garfield"];
function destructivelyAppendCat(name){
    cats.push("Ralph");
    }
    function destructivelyPrependCat(name){
        cats.unshift("Bob")
    }
    function  destructivelyRemoveLastCat(){
        cats.pop("Ralph")
    }
    function destructivelyRemoveFirstCat(){
        cats.shift("Bob");
    }
    function appendCat(name){
        
        return [...cats, name];
    
       }
       function prependCat(name){
        return[name, ...cats];

       }
    function removeLastCat(){
        return cats.slice(0, -1)
    }
    function removeFirstCat(){
        return cats.slice(1)
    }

 beforeEach(function () {
     cats.length = 0;
     
     cats.push("Milo", "Otis", "Garfield");
  });
  
