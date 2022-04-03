
function getSum(...Args)
{
    let arrayvalue = Args;
    let total = arrayvalue.reduce((currentTotal, Value)=>{
        return currentTotal + Value;
    })
}

getSum(10,20,30)

/* let arrayvalue = [10,20,30];
    let total = arrayvalue.reduce((currentTotal, Value)=>{
        return currentTotal + Value;
    })
    console.log("test",total); */