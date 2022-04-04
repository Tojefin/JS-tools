//https://github.com/Tojefin/JS-tools

function notifySend(p) {
  let content = p.content ?? 'Use {content: "text"} to set content';
  let className = p.className ?? 'notify';
  let container = document.querySelector('body')
  let element = document.createElement('div');
  element.classList = className+' '+className+'--in'
  if (p.type) {
    element.classList = element.classList+' '+className+'--'+p.type
  }
  element.innerHTML = content
  if (p.closeOnClick) {
    element.addEventListener('click', () => {
      element.classList = element.classList+' '+className+'--out'
      setTimeout(() => {container.removeChild(element)}, p.fadeout ?? 100);
    })
  }
  container.append(element)
  setTimeout(() => {element.classList.remove(className+'--in')}, p.fadein ?? 100);
  setTimeout(() => {element.classList = element.classList+' '+className+'--out'}, p.duration-p.fadeout ?? 100 ?? 2900);
  setTimeout(() => {container.removeChild(element)}, p.duration ?? 3000);
}
