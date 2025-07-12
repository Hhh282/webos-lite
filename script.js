function openWindow(id) {
  document.getElementById(id).style.display = 'block';
}

function closeWindow(id) {
  document.getElementById(id).style.display = 'none';
}

// Make windows draggable
document.querySelectorAll('.window').forEach(win => {
  let isDragging = false;
  let offset = { x: 0, y: 0 };

  const bar = win.querySelector('.title-bar');
  bar.addEventListener('mousedown', e => {
    isDragging = true;
    offset.x = e.clientX - win.offsetLeft;
    offset.y = e.clientY - win.offsetTop;
  });

  document.addEventListener('mousemove', e => {
    if (isDragging) {
      win.style.left = `${e.clientX - offset.x}px`;
      win.style.top = `${e.clientY - offset.y}px`;
    }
  });

  document.addEventListener('mouseup', () => isDragging = false);
});
