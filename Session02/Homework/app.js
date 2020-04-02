// const number = Number(prompt("Input number:"));
//  if (number < 0)
//  {
//      console.log('Invalid number');
//  }
//  else {
//         let gt = 1;
//         for (let i = 1; i <= number; i++){
//         gt = gt * i;}  
//         console.log(gt);
//  }


// const name = prompt("Input name:");
// const age = Number(prompt("Input age:"));
// if (age < 18)
// {
//     console.log(name + " " + "khong du tuoi");
// }
// else{
//     const yesno = prompt(name + " " + "co muon dang nhap vao trang khong? (yes/no)");
//     if (yesno === 'yes')
//     {
//         console.log(name + " " + "da vao trang web thanh cong");
//     }
//     else if (yesno === 'no')
//     {
//         console.log(name + " " + "da thoat khoi trang web");
//     }
// }

// var username2 = 'son';
// var password2 = '123';
// const username = prompt("Nhap ten user:");
// const password = prompt("Nhap password:");
// if (username === username2 && password === password2)
// {
//     console.log('Dang nhap thanh cong')
// }
// else if (username === username2 && password !==password2)
// {
//     console.log('Password sai')
// }
// else if (username !== username2 && password === password2)
// {
//     console.log('Username sai')
// }

// const month = Number(prompt("Nhap vao thang sinh:"));
// const name = prompt("Nhap ten:");
// switch (month){
//     case 1:
//         console.log(name + " " + "sinh vao mua xuan");
//         break;
//     case 2:
//         console.log(name + " " + "sinh vao mua xuan");
//         break;
//     case 3:
//         console.log(name + " " + "sinh vao mua xuan");
//         break;
//     case 4:
//         console.log(name + " " + "sinh vao mua ha");
//         break;
//     case 5:
//         console.log(name + " " + "sinh vao mua ha");
//         break;
//     case 6:
//         console.log(name + " " + "sinh vao mua ha");
//         break;
//     case 7:
//         console.log(name + " " + "sinh vao mua thu");
//         break;
//     case 8:
//         console.log(name + " " + "sinh vao mua thu");
//         break;    
//     case 9:
//         console.log(name + " " + "sinh vao mua thu");
//         break;
//     case 10:
//         console.log(name + " " + "sinh vao mua dong");
//         break;
//     case 11:
//         console.log(name + " " + "sinh vao mua dong");
//         break;
//     case 12:
//         console.log(name + " " + "sinh vao mua dong");
//         break;
//     default:
//         console.log("input khong hop le");
//     }  

// var logic = false;
// while (!logic)
// {
// const a = prompt("Nhap tham so a");
// const b = prompt("Nhap tham so b");
// const c = prompt("Nhap tham so c");
// var x1 = (-b + Math.sqrt(b*b-4*a*c))/(2*a);
// var x2 = (-b - Math.sqrt(b*b-4*a*c))/(2*a);
// console.log(x1);
// console.log(x2);
// const yesno = prompt("co muon su dung chuong trinh tiep khong? (yes/no)");
//     if (yesno === 'yes')
//     {
//         logic = false;
//     }
//     else
//         logic = true;
// }

// var logic = false;
// while (!logic)
// {
// const chuoi = prompt("Nhap mot chuoi bat ky");
// for (let i =  chuoi.length - 1; i >= 0; i--)
// {
//     console.log(chuoi[i]);
// }
// const yesno = prompt("co muon su dung chuong trinh tiep khong? (yes/no)");
//     if (yesno === 'yes')
//      {
//          logic = false;
//      }
//      else
//          logic = true;
// }