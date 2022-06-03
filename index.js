let optional = {fizzbuzz:0, fizz:0, buzz:0}
for(let i = 0; i <= 100;i++){

    if (i % 3 === 0 && i % 5 === 0) {
        console.log('fizzbuzz');
        optional.fizzbuzz++;
    } else if (i % 3 === 0)  {
        console.log('fizz')
        optional.fizz++
    } else if (i % 5 === 0) {
        console.log("buzz")
        optional.buzz++
    } else {
        console.log(i)
    }
}
    console.log("1,2,3,4")