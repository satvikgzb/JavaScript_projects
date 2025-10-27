let arr = []
let arr2 = []

let input = () => {
    let num = prompt('enter a no')
    if (num.toLowerCase() == 'stop'){
        alert(`the no divisible by 10 are ${arr}`)
        alert(`the no not divisible by 10 are ${arr2}`)
    }
    else {
        num = Number.parseInt(num)
        if (!isNaN(num)){
            if (num%10==0) {
                arr.push(num)
            }
            else {
                arr2.push(num)
            }
        input()
        }
        else{
            alert('enter a valid no!')
            input()
        }
    }
}
input()