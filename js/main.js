let text = document.querySelector('.text')

text.innerHTML = text.innerText
  .split('')
  .map((char, i) => `<p style="transform:rotate(${i * 7.2}deg)">${char}</p>`)
  .join('')
