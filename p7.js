function mean(a,b,c,d,e){
    m = ((a+b+c+d+e)/5)
    alert('the mean of '+ a + ','+ b + ',' + c + ','+ d + ',' + e + ' is ' + m)

}
function input(){
    n = Number.parseInt(prompt('enter a no'))
    return n
}
let a = input()
let b = input()
let c = input()
let d = input()
let e = input()

mean(a,b,c,d,e)