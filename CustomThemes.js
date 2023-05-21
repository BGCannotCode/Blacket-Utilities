// ==UserScript==
// @name         Blacket Custom Themes (Deobf)
// @namespace    http://tampermonkey.net/
// @version      1.2
// @description  Among us.
// @author       BG
// @match        https://blacket.org/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=blacket.org
// @grant        GM_getValue
// @grant        GM_setValue
// ==/UserScript==

(async () => {
  const themes = [
    {
      name: 'Default',
      value: '',
    },
    {
      name: 'Red',
      value: '#ff4d4d',
    },
    {
      name: 'Orange',
      value: '#ffa64d',
    },
    {
      name: 'Yellow',
      value: '#ffff4d',
    },
    {
      name: 'Green',
      value: '#66ff66',
    },
    {
      name: 'BLOOKET!',
      value: '#0bc2cf',
    },
    {
      name: 'Blue',
      value: '#4d4dff',
    },
    {
      name: 'Pink',
      value: '#ff4da6',
    },
    {
      name: 'Purple',
      value: '#bf40bf',
    },
    {
      name: 'Custom',
      value: 'custom',
      action: () => {
        const color = prompt('Enter a hex color code:')
        if (color) {
          changeColor({ target: { value: color } })
          console.log('Changed color to custom: ' + color)
        }
      },
    },
    {
      name: 'Reset',
      value: 'reset',
      action: () => {
        changeColor({ target: { value: '' } })
        console.log('Reset to default theme')
      },
    },
  ]

  const themeDiv = document.createElement('div')
  themeDiv.style.position = 'fixed'
  themeDiv.style.border = '4px solid #000000'
  themeDiv.style.top = '10px'
  themeDiv.style.right = '10px'
  themeDiv.style.zIndex = '9999'

  const themeLabel = document.createElement('label')
  themeLabel.textContent = 'Choose Theme: '
  themeLabel.style.padding = '0 5px'
  themeLabel.style.fontFamily = 'Titan One'
  themeLabel.style.fontSize = '16px'
  themeLabel.style.color = '#fff'
  themeDiv.appendChild(themeLabel)

  const themeSelect = document.createElement('select')
  themeSelect.addEventListener('change', changeColor)
  themes.forEach((theme) => {
    const themeOption = document.createElement('option')
    themeOption.value = theme.value
    themeOption.textContent = theme.name
    themeSelect.appendChild(themeOption)
  })
  themeSelect.style.fontFamily = 'Titan One'
  themeSelect.style.fontSize = '16px'
  themeSelect.style.backgroundColor = '#333'
  themeSelect.style.color = '#fff'
  themeSelect.style.border = 'none'
  themeSelect.style.padding = '10px'
  themeDiv.appendChild(themeSelect)

  document.body.appendChild(themeDiv)

  const savedTheme = window.localStorage.getItem('theme')
  if (savedTheme) {
    changeColor({ target: { value: savedTheme } })
  }

  function changeColor(event) {
    const color = event.target.value
    if (color) {
      if (color === 'custom') {
        const customTheme = themes.find(
          (theme) => theme.value === 'custom'
        )
        if (customTheme && typeof customTheme.action === 'function') {
          customTheme.action()
          return
        }
      } else {
        if (color === 'reset') {
          document.body.style.backgroundColor = ''
          const elements = document.querySelectorAll('body *')
          elements.forEach((element) => {
            element.style.backgroundColor = ''
            element.style.color = ''
          })
          window.localStorage.removeItem('theme')
          console.log('Reset to default theme')
        } else {
          document.body.style.backgroundColor = color
          const elements = document.querySelectorAll('body *')
          elements.forEach((element) => {
            element.style.backgroundColor = color
            if (['#ff4d4d', '#ff4da6', '#ffa64d', '#ffff4d'].includes(color)) {
              element.style.color = '#000'
            } else {
              element.style.color = '#fff'
            }
          })
          window.localStorage.setItem('theme', color)
          console.log('Changed color to: ' + color)
        }
      }
    }
  }
})();
