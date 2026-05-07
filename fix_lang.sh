#!/bin/bash
for f in index.html areas.html director.html contacto.html; do
  sed -i "s/document.body.classList.remove('lang-es','lang-en');/document.documentElement.classList.remove('lang-es','lang-en');/g" $f
  sed -i "s/document.body.classList.add('lang-' + lang);/document.documentElement.classList.add('lang-' + lang);/g" $f
  sed -i "s/const body = document.getElementById('body-root');/const root = document.documentElement;/g" $f
  sed -i "s/body.classList.remove/root.classList.remove/g" $f
  sed -i "s/body.classList.add/root.classList.add/g" $f
  sed -i "s/if(browser.startsWith('en')) setLang('en');/if(browser.startsWith('en')) { setLang('en'); } else { setLang('es'); }/g" $f
done
sed -i "s/body.lang-es/html.lang-es/g" css/style.css
sed -i "s/body.lang-en/html.lang-en/g" css/style.css
