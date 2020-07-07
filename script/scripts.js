var blocks = [
    document.getElementById("bgTextItem").id.toString(),
    document.getElementById("bgTextItem2").id.toString(),
    document.getElementById("bgTextItem3").id.toString()
]



   function rngRange(min,max)
   {
       return Math.floor(Math.random() * max) + min; // returns a random integer from 1 to 100 
   }   

   function setRandomWidth(idName, min, max)
   {
       var rngW =  rngRange(min,max);

       document.getElementById(idName.toString()).style.width = rngW.toString() +"px";
   }

   function setRandomHeight(idName, min, max)
   {
       var rngH =  rngRange(min,max);

       document.getElementById(idName.toString()).style.height = rngH.toString() +"px";
   }

   function setRandomTop(idName, min, max)
   {
       var rngTop = rngRange(min, max);

       document.getElementById(idName.toString()).style.top = rngTop.toString() + "px";
   }

   function setRandomLeft(idName, min, max)
   {
        var rngLeft = rngRange(min,max);

        document.getElementById(idName.toString()).style.left = rngLeft.toString() + "px";
   }
   
    
    setRandomWidth(blocks[0],50,100);
    setRandomHeight(blocks[0],40,200);

    setRandomWidth(blocks[1],30,250);
    setRandomHeight(blocks[1],45,90);

    setRandomWidth(blocks[2],50,100);
    setRandomHeight(blocks[2],40,200);

    setRandomTop(blocks[0],60,400);
    setRandomTop(blocks[1],80,600);
    setRandomTop(blocks[2],80,600);

    setRandomLeft(blocks[0],50,750);
    setRandomLeft(blocks[1],50,750);
    setRandomLeft(blocks[2],50,750);


    


