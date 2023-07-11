import React from 'react'

export default function Videosection() {
  return (
    <>
    <section className='videosection'>
    <div class="botón" onclick="this.classList.toggle('active')">
    <div class="fondo" x="0" y="0" width="200" height="200"></div>
    <div class="icono" width="200" height="200">
      <div class="parte izquierda" x="0" y="0" width="200" height="200" fill="#fff"></div>
      <div class="parte derecha" x="0" y="0" width="200" height="200" fill="#fff"></div>
    </div>
    <div class="puntero"></div>
  </div>
  </section>
    </>
  )
}
