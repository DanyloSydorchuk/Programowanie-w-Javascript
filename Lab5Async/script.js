
const a = [1,2,3,4,5,6,7,8,9,10]
let sum=0



const asyncAdd = async (a,b) => {
    if (typeof a !== 'number' || typeof b !== 'number') {
      return Promise.reject('Argumenty muszą mieć typ number!')
    }
    return new Promise((resolve, reject) => {
      setTimeout(() =>{
        resolve(a+b)
      }, 100)
    })
  }

  function separator(tab){
    for(i=0;i<tab.length;i++){
      // asyncAdd(tab[i],tab[i]).then(b=>sum = b)




      if(i==0){
        sum=tab[i]
        console.log('1:'+sum)
      }
      else{
        asyncAdd(sum,tab[i]).then((data)=>{
          sum=data
          console.log(data)
        })
      }

    }
  }

  separator(a)