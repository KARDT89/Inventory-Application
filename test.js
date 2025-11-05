class MaxAndMinOfAnArray {
    MinMax(arr){
        let min = null
        let max = null
        for(let i = 0; i < arr.length - 2 ; i++){
           if(arr[i] < min){
                min = arr[i]
           } else if (arr[i+1] < min) {
                min = arr[i]
           } else if (arr[i] > max){
                max = arr[i]
           } else if(arr[i + 1] > max){
                max = arr[i]
           }
        }
        return [min, max]
    }
}