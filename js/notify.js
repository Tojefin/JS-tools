//https://github.com/Tojefin/JS-tools
document.head.insertAdjacentHTML("beforeend", `
  <style>
    @keyframes notifyAnimation {
      from {
        opacity: 0;
      }

      to {
        opacity: 1;
      }
    }
  </style>
`)

function notifySend(content, className) {
  let container = document.querySelector('body')
  let element = document.createElement('div');
  element.className = className
  element.style.cssText = `
    position: absolute;
    top: 5%;
    right: 5%;
    background: #03adfc;
    padding: 0 35px;
    border-radius: 5px;
    font-size: 10px;
    font-hight: 12px;
    opacity: 0;
    transform: translateX(105%);
    transition: all ease 0.5s;
  `
  element.innerHTML = content
  container.append(element)
  setTimeout(() => {element.style.transform = 'translateX(0)'}, 100);
  setTimeout(() => {element.style.opacity = '1'}, 100);
  setTimeout(() => {element.style.transform = 'translateX(105%)'}, 2000);
  setTimeout(() => {element.style.opacity = '0'}, 2000);
  setTimeout(() => {container.removeChild(element)}, 3000);
}
