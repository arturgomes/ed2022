function quickSortAux(number,first,last){
  let i, j, pivot, temp;

  if(first<last){
     pivot=number[first];
     i=first;
     j=last;

     while(i<j){
        while(number[i]<=number[pivot] && i<last)
           i++;
        while(number[j]>number[pivot])
           j--;
        if(i<j){
           temp=number[i];
           number[i]=number[j];
           number[j]=temp;
        }
     }

     temp=number[pivot];
     number[pivot]=number[j];
     number[j]=temp;
     quickSortAux(number,first,j-1);
     quickSortAux(number,j+1,last);

  }
  return number
}
function quickSort(vetor) {
 return quickSortAux(vetor,0,vetor.length-1)
}

console.log(quickSort([5,4,3,2,1]))