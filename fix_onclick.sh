#!/bin/bash
# Adding onclick back to mega menu in index, director, contacto
for f in index.html director.html contacto.html; do
  sed -i "s|<a href=\"areas.html#areas\" class=\"featured\"  data-lang=\"es\">|<a href=\"areas.html#areas\" class=\"featured\" onclick=\"if(window.location.pathname.includes('areas.html')){openModal('penal');return false;}\" data-lang=\"es\">|g" $f
  # Actually, easier to use python to add onclick back correctly matching areas.html
done
