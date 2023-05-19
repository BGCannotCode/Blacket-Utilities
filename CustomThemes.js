// ==UserScript==
// @name         Blacket Custom Themes
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Adds custom themes to a page on blacket.org.
// @author       BG
// @match        https://blacket.org/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=blacket.org
// @grant        GM_getValue
// @grant        GM_setValue
// ==/UserScript==

(function() {
  'use strict'
  const themes = [{
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
        const hex = prompt('Enter a hex color code:')
        change({
          target: {
            value: hex
          }
        });
        console.log('Changed color to custom: ' + hex);
      },
    },
    {
      name: 'Reset',
      value: 'reset',
      action: () => {
        change({
          target: {
            value: ''
          }
        })
        console.log('Reset to default theme');
      },
    },
  ]
  let selector = document.createElement('div')
  selector.style.position = 'fixed'
  selector.style.border = '4px solid #000000'
  selector.style.top = '10px'
  selector.style.right = '10px'
  selector.style.zIndex = '9999'
  const label = document.createElement('label')
  label.textContent = 'Choose Theme: '
  label.style.padding = '0 5px'
  label.style.fontFamily = 'Titan One'
  label.style.fontSize = '16px'
  label.style.color = '#fff'
  selector.appendChild(label)
  const selectorig = document.createElement('select')
  selectorig.addEventListener('change', change)
  themes.forEach((theme) => {
    const opt = document.createElement('option')
    opt.value = theme.value
    opt.textContent = theme.name
    selectorig.appendChild(opt)
  })
  selectorig.style.fontFamily = 'Titan One'
  selectorig.style.fontSize = '16px'
  selectorig.style.backgroundColor = '#333'
  selectorig.style.color = '#fff'
  selectorig.style.border = 'none'
  selectorig.style.padding = '10px'
  selector.appendChild(selectorig)
  document.body.appendChild(selector)
  const theme = window.localStorage.getItem('theme')
  change({
    target: {
      value: theme
    }
  })

  function change(code) {
    const value = code.target.value
    if (value) {
      if (value === 'custom') {
        const _0x57f2d9 = themes.find((_0x1ea7ff) => _0x1ea7ff.value === 'custom')
        if (_0x57f2d9 && typeof _0x57f2d9.action === 'function') {
          _0x57f2d9.action()
          return
        }
      } else {
        if (value === 'reset') {
          document.body.style.backgroundColor = ''
          const bodyItems = document.querySelectorAll('body *')
          bodyItems.forEach((item) => {
            item.style.backgroundColor = ''
            item.style.color = ''
          })
          window.localStorage.removeItem('theme')
          console.log('Reset to default theme')
        } else {
          document.body.style.backgroundColor = value
          const bodyItems2 = document.querySelectorAll('body *')
          bodyItems2.forEach((item) => {
            item.style.backgroundColor = value;
            ['#ff4d4d', '#ff4da6', '#ffa64d', '#ffff4d'].includes(value) ? (item.style.color = '#000') : (item.style.color = '#fff')
          })
          window.localStorage.setItem('theme', value)
          console.log('Changed color to: ' + value)
        }
      }
    }
  }
})()
