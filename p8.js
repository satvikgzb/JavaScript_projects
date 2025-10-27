let arr = []

let user = ()  =>{
     num = prompt("enter a no. Type 'stop' when you have typed all no.")

     if (num.toLowerCase() != 'stop'){
        no = Number.parseInt(num)
        if(!isNaN(no)){
            arr.push(no)
            user()
        }
        else{
            alert('type a valid no')
            user()
        }
     }

    else{
        alert(`the array is ${arr}`)
    }
    }
user()