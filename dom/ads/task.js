const rotator = Array.from(document.getElementsByClassName('rotator'));
let i = 0;

rotator.forEach((item) => {    
    const rotatorCase = Array.from(item.children);
    
   setInterval(() => {
    if (i !== 5) {    
      rotatorCase[i].classList.remove('rotator__case_active');
      rotatorCase[i + 1].classList.add('rotator__case_active');
      console.log('i + 1 = ' + (i + 1) + ' ' + rotatorCase[i + 1].textContent);
      i++;
    } else {
      rotatorCase[i].classList.remove('rotator__case_active');
      i = 0;
      rotatorCase[i].classList.add('rotator__case_active');
    }
   }, 1000)
})