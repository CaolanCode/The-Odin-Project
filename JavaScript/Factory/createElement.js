function createElement(type, text, color){
  const el = document.createElement(type)
  el.innerText = text
  el.style.color = color
  document.body.appendChild(el)
  return{
    el,
    setInnerText(text){
      el.innerText = text
    },
    setColor(color){
      el.style.color = color
    }
  }
}

const div = createElement(div, "Hello, World!", red)