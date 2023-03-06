let myPromise=new Promise((resolve,reject)=>{
  let result=1;
  if(result===1){
    resolve('success');
  }
  else{
    reject('reject')
  }
});