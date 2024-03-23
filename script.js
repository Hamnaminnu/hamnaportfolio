  function openNav() {
    console.log(document.getElementById("myLinks").style.width);
    document.getElementById("myLinks").style.width = "250px";
    console.log("here");
  }
  
  function closeNav() {
    document.getElementById("myLinks").style.width = "0";
  }
  // skrollr.init();

  // const rows = document.querySelectorAll(".row1");
  // window.addEventListener('scroll', checkbox);

  // checkbox();

  // function checkbox(){
  //   console.log("here")
    // const bottom = window.innerHeight / 5 * 4;
//     const bottom = 4;
//     const count = 3;
//     rows.forEach(row1 =>{
//       const rowtop =row1.getBoundingClientRect().top;
//       console.log(rowtop);
//       if(count<bottom){
//         row1.classList.add('show');
//         console.log("here1")
//       }
//       else{
//         row1.classList.remove('show');
//         console.log("here2")
//       }
//   });
// }
