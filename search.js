const linearSearch = (array,element) => {
    for (let i = 0; i < array.length; i++){
        if(array[i] === element) return i
    }
    return -1
}

const linearSearchRecursive = (array,element,index  = 0)=> {
    if (index > array.length) return -1
    else if(element === array[index]) return index
    return linearSearch(array,element,index += 1)
}

const binarySearch = (array,element) => {
    let low = 0
    let high = array.length-1
    let sortedArray = array.sort((a,b) => a-b)

    while(low <= high){
        let mid = Math.floor((high+low)/2)

        if(sortedArray[mid] === element) return mid

        if(element > array[mid]) low = mid + 1
        
        else high = mid -1

    }

    return -1
}

const binarySearchRecursive = (array,val,high = array.length,low = 0) =>{
    sortedArray = array.sort((a,b) => a-b)
    
    let mid = Math.floor((high+low)/2)
  
    if(sortedArray[mid] === val) return mid
    
    if(low >= high) return -1
    
    if(val > array[mid]) low = mid + 1
    
    else{
        high = mid -1
    }
    
    return binarySearchRecursive(array,val,low, high)
    
  }


  binarySearchRecursive([1, 2, 3, 4], 4)