const btns = document.querySelectorAll('.btn');
const selected = document.getElementById('select');
let preferenceSelected;


btns.forEach(btn => {
  btn.addEventListener('click', e => {
    btns.forEach(btn => {
      btn.classList.remove('active');
    })
    e.target.classList.add('active');
    preferenceSelected = removeSortBy(e.target.textContent);
    selected.value = preferenceSelected;
    
  })
})

selected.addEventListener('change', e => {
  preferenceSelected = e.target.value;
  console.log(preferenceSelected);
  
  btns.forEach(btn => {
    if(removeSortBy(btn.textContent) === preferenceSelected){
      btn.classList.add('active');
    } else {
      btn.classList.remove('active')
    }
  })
})


const removeSortBy = str => {
  return str.replace('Sort by ', '');
}