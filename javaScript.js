 function color(z){
    var a=getComputedStyle(z);
    var b=a.backgroundColor;
    document.getElementsByTagName("body")[0].style.backgroundColor=b;
 }
 const buttons = document.querySelectorAll('.btn');
 const myText = document.getElementById('myText');
 
 buttons.forEach(button => {
   button.addEventListener('click', () => {
     const fontSize = button.dataset.size;
     myText.style.fontSize = `${fontSize}px`;
   });
 });
 
 function changeColor(elem) {
    document.body.style.backgroundColor = elem.style.backgroundColor;
  }
  
  
  buttons.forEach(button => {
    button.addEventListener('click', () => {
      buttons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');
      const size = button.dataset.size;
      document.documentElement.style.fontSize = `${size}px`;
    });
  });
  