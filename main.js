
const convertbtn = document.querySelector('.m-5')
const hexfinal = document.querySelector('.finalnumbertext')
const text = document.querySelector('text')
convertbtn.addEventListener("click", function (event) {
  //console.log(event.target);
  if (event.target.matches('#addBtn')) {
    let r = Number(document.querySelector("#red").value)
    let g = Number(document.querySelector("#green").value)
    let b = Number(document.querySelector("#blue").value)
    //檢查r g b的值是否落在0~255，如果是，更改HTML中的色塊並顯示色碼；如果否，顯示警告視窗
    if (-1 < r && r < 256 && -1 < g && g < 256 && -1 < b && b < 256) {
      hexfinal.innerHTML = fullColorHex(r, g, b)
      //更改html中色塊的顏色
      let redpart = document.querySelector('.redpart');
      redpart.style['background-color'] = '#' + fullColorHex(r, 0, 0)
      let greenpart = document.querySelector('.greenpart');
      greenpart.style['background-color'] = '#' + fullColorHex(0, g, 0)
      let bluepart = document.querySelector('.bluepart');
      bluepart.style['background-color'] = '#' + fullColorHex(0, 0, b)
      let finalpart = document.querySelector('.finalpart');
      finalpart.style['background-color'] = '#' + fullColorHex(r, g, b)
      return hexfinal.innerHTML
    } else {
      alert('請輸入0~255的數字')
    }
    //hexfinal.innerHTML = fullColorHex(r, g, b)    
  }

})

function fullColorHex(r, g, b) {
  let red = rgbToHex(r)
  let green = rgbToHex(g)
  let blue = rgbToHex(b)
  if (rgbToHex(r) !== "00" || rgbToHex(g) !== "00" || rgbToHex(b) !== "00") {
    return red + green + blue
  } else if (rgbToHex(r) === "00" || rgbToHex(g) === "00" || rgbToHex(b) === "00") {
    alert('數值不可為空白')
    return rgbToHex(rgb)
  }

};

function rgbToHex(rgb) {
  let hex = Number(rgb).toString(16);
  if (hex.length < 2) {
    hex = "0" + hex
  }
  return hex;
}


