let resultstatus = []
let counter = 0
let offset = 1;

function apiCall(){
return 1;
}

function callapi(){
 
            if(resultstatus.length == 100)
     {
         return false;
     }
     
     if(offset>9 && resultstatus.length)
     {
     
       for(j=1;j<=10;j++)
       {
           
          let status = apiCall();
          resultstatus.push(status)
          console.log("test",status);
          if(j==10)
          {
              callapi();
          }
       }
       offset = 0;
      }
       offset++
    }
    callapi();
    console.log("result",resultstatus.length)