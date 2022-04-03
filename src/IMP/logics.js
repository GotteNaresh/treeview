let data = "hello";
let outputData = "";

for (let i = data.length - 1; i >= 0; i--){
  outputData += data[i]
}

console.log("Output:", outputData)// olleh

=========================================

var a = [1,2,3,4,5]
var b = a.map (function (item) {
   return item / 2 == 0;
})
var c = a.filter (function (item) {
   return item / 2 == 0;
})

console.log(b)//[false,flase,false,false,]
console.log(c)//[]

========================================

var myObject = {
    foo: "bar",
    func: function() {
        var self = this;
        console.log("Output1 = " + this.foo);//bar
        console.log("Output2" + self.foo);//bar
        (function() {
            console.log("Output3" + this.foo);//undefined
            console.log("Output4" + self.foo);//bar
        }());
    }
};
myObject.func();

============================================