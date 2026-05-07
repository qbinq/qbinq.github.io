const hoverArea = document.querySelector('.copy-to-clipboard');
// const dialogBox = document.getElementById('dialog-box');

// Show dialog on hover
hoverArea.addEventListener('mouseenter', () => {
  // dialogBox.style.display = 'block';
  hoverArea.innerText = '📋';
});

hoverArea.addEventListener('click',()=>{
    hoverArea.innerText = '✅ copied!';
})
// Hide dialog when mouse leaves
hoverArea.addEventListener('mouseleave', () => {
    hoverArea.innerHTML = '@';
  // dialogBox.style.display = 'none';
});


// Move dialog with the cursor
// hoverArea.addEventListener('mousemove', (e) => {
//   // Offset by 15px to avoid the box being directly under the cursor
//   dialogBox.style.left = (e.pageX + 15) + 'px';
//   dialogBox.style.top = (e.pageY - 25) + 'px';
// });
