$('#more').hide();

$('#read').click(() =>{
  $('#more').toggle('');
})



/*const read = () => {
  let dots = document.getElementById('dots');
  let moreText = document.getElementById('more');
  let btnText = document.getElementById('read');
  let feat = document.getElementById('features');
  

  if(dots.style.display === 'none'){
    dots.style.display = 'inline';
    btnText.innerHTML = 'Read more';
    moreText.style.display = 'none';
  }
  else{
    dots.style.display = 'none';
    btnText.innerHTML = 'Read less';
    moreText.style.display = 'inline';
  }

}*/