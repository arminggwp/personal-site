const texts = ['Shopify Developer', 'Support Developer', 'Front-End Developer'];
var textIndex = 0;

function typewriter() {
  if (textIndex !== 3) {
    var positionField = document.querySelector('.introduction h2');
    var i = positionField.innerText.length;
    const deleteLetters = setInterval(() => {
      if (i > 0) {
        positionField.innerText = positionField.innerText.slice(0, -1);
        i--;
      } else {
        clearInterval(deleteLetters);
        var textToWrite = texts[textIndex];
        var letterIndex = 0;
        const typeLetters = setInterval(() => {
          if (positionField.innerText.length !== textToWrite.length) {
            positionField.innerHTML += textToWrite.charAt(letterIndex);
            letterIndex++;
          } else {
            clearInterval(typeLetters);
            textIndex++;
            typewriter();
          }
        }, 100);
      }
    }, 75);
  }
  else if (textIndex === 3) {
    textIndex = 0;
    setTimeout(() => {
      typewriter();
    }, 20000);
  }
}

setTimeout(() => {
  typewriter();
}, 2500);

(function toggleColors() {
  var toggle = document.querySelector('.color-toggle input');
  toggle.addEventListener('change', function() {
    document.body.classList.toggle('dark');
  })
})();