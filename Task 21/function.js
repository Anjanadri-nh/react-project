// //  function if_even(num){
// //      if(num %1==0){
// //         return true
// //      }
// //      else{
// //         return false
// //      }
// //  }

// //  let num=6;
// //   console.log(if_even(num))


// //   function  area(r){
// //    pi=3.14
// //     let area=(pi*r**2)
// //     return area
// //   }

// //   let  r=5;
// //    let area_result=area(r);
// //    console.log(area_result)

// // function distance(x1,x2,y1,y2){ //parameters
// //    let distance=((x2-x1)+(y2-y1))**0.5// formula of distance 
// //     return distance
// // }
// //  let x1=4.0,x2=9.0,y1=9,y2=5    //calling a function 
// //  let distance_result=distance(x1,x2,y1,y2) // adding parameters storing in a diffrent variabless
// // console.log(distance_result) // print statement 
// //    // area of rectangle in function
// // function rectangle(l,b){// radding parameter
// //    let area=(l*b);  // area  of rectangle formula
// //    return area //  return statement
// // }
// //  let l=2 , b=7; // calling a function 
// //  let area_res=rectangle(l,b); // adding values of parameter
// //  console.log(area_res);   //printing the values that stored in area_res

//  // if else statement
 
//  function odd_n(num){
//          if(1% 3==0){
//             return true// 
//          }
//          else {         // if statement not true hence the console print false 
//             return  false
//          }
//     }
//     let num=3;
//     let odd_res=odd_n(num)
//     console.log(odd_res)



//     let x=12;
//     if(x<11){
//         console.log("true")
//     }else{
//         console.log("false")
//     }

    
//     let pi=3.14;
//     let area_r=(a*pi**2)
// console.log(area_r)

// let a_s=4;
// let area_res=area_r(a)
// console.log(area_res)
// loop 
// for(i=5;i<=10000;i++){
// console.log("apna college")
// }



// console.log("loop has ended")


// call back function
function calculate(a,b, c){
    sum=a+b;
    c(sum)
}

function result(r) {
    console.log(r); //120
  }