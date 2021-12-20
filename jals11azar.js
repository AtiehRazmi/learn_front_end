const squer ={
    width: 12,
    height: 20,
    area(){
       return   this.height*this.width
    },
    center(){
      return  `${this.height/2} , ${this.width/2}`
    }
}
console.log(squer.area())
console.log(squer.center())
//
const test=Object.freeze({
  info : symbol('message info'),
  err : symbol('message err')
})
function log (type , message){
  switch (type) {
    case info:
      console.log('info:' +message)
      break;
  
    default:
      break;
  }
}
//
function nprime(np){
  
}