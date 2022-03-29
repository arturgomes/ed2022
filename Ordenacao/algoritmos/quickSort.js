
const quickSort = (a,p,r) => {
  if(p<r){
    const q = partition(a,p,r)
    quickSort(a,p,q-1)
    quickSort(a,q+1,r)
  }
  return a;
}

const partition = (a,p,r) => {
  let rand = Math.floor(Math.random() * (r-p))
  let x = a[rand]
  let i = p - 1
  for(let j = p; j<=r-1; j++){
    if(a[j] <= x){
      i++
      let tmp = a[i]
      a[i] = a[j]
      a[j] = tmp
    }
  }
  let tmp = a[i+1]
  a[i+1] = a[r]
  a[r] = tmp

  return i+1
}


export default quickSort;