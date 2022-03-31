//https://github.com/Tojefin/JS-tools

function notifySend(content, className, duration, closeOnClick) {
  let container = document.querySelector('body')
  let element = document.createElement('div');
  element.className = className
  element.innerHTML = content
  if (closeOnClick) {
    element.addEventListener('click', () => {
      container.removeChild(element)
    })
  }
  container.append(element)
  setTimeout(() => {container.removeChild(element)}, duration ?? 3000);
}
