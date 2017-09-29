module.exports = function multiply(first, second) {
  let arr1,arr2,equal,i,j,acc,temp,k,counter;
  arr1=first.split('');
  arr2=second.split('');
  equal=[];
  acc=0;
  k=-1;
  for (i=arr1.length;i>0;i--){
    k++;
    counter=0;
    for (j=arr2.length;j>0||acc!=0;j--){
      let a,b;
      if(j>0){
      a=Number(arr1[i-1]);
      b=Number(arr2[j-1]);
      acc=a*b+acc;
      }
      if (equal[equal.length-k-counter-1]==undefined||i==arr1.length){
        if (acc>9){
          equal.unshift(acc%10);
          acc=acc/10 - (acc/10)%1;
        }
        else {
          equal.unshift(acc);
          acc=0;
        }
    }
    else{
      acc=acc+equal[equal.length-k-counter-1]
      if (acc>9){
        equal[equal.length-k-counter-1]=acc%10;
        acc=acc/10 - (acc/10)%1;
      }
      else {
        equal[equal.length-k-counter-1]=acc;
        acc=0;
      }
    }
    counter++;
  }
    acc=0;
  }
  return equal.join("");
}
