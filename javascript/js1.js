
let score=20,secretnumber,x;
function again() {
   
    document.querySelector('.j3').value="";
    document.querySelector('.j2').textContent="Enter Number";
    
    score = 20;
    secretnumber = Math.trunc(Math.random() * 20) + 1;
    document.getElementById('j6').value=score;

    console.log(secretnumber);
    
    }
   
    document.querySelector('.j4').addEventListener("click",check);
   function check()
{
    
    if(document.querySelector('.j3').value==secretnumber)
    { 
          
        document.querySelector('.j2').textContent="correct";
        document.getElementById('j7').textContent=score;
        document.getElementById('j6').textContent=20
         
    }
    else
    {   
        compare();
       score--;
     document.getElementById('j6').textContent=score;
    

    }
}
function compare()
{
    if(document.querySelector('.j3').value<secretnumber)
    {
        document.querySelector('.j2').textContent="very low";
    }
    else if((document.querySelector('.j3').value)>secretnumber)
    {
        document.querySelector('.j2').textContent="very high";
    }
}
  