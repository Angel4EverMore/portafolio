;

const CACHE_NAME = 'v1_portafolio_Jose_Angel_Lemus',
      urlsToCahce = [
        './',
        './img/4evermore-logo.png',
        './img/4evermore-ico.ico',
        './css/styles.css',
        './js/index.js'
      ]


// Evento de instalación de SW. Se almacena encaché los activos estáticos
self.addEventListener('install', e => {
  e.waitUntil (
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCahce)
          .then(() => self.skipWaiting())
      })
      .catch(err => 'Hubo error al cargar el caché', err)
  )

})


// Evento de que está activo el  SW.
// Si ya está instalado, y hay conexión (activo) busca los recursos para funcionar sin conexión
self.addEventListener('activate', e => {
  const cacheWhitelist = [CACHE_NAME]

  e.waitUntil(
    caches.keys()
      .then(cacheNames => {
        cacheNames.map(cacheName => {
          // Comparar los archivos de caché del servidor.
          // Si ya no están en caché del dispositivo, los elimina
          if (cacheWhitelist.indexOf(cacheName === -1)){
            return caches.delete(cacheName)
          }
        })
      })

      // Se termina de activar el caché actual
      .then(() => self.clients.claim())
      .catch(err => 'Error al actualizar el caché', err)
  )

})


// Evento fetch
// Una vez que haya conexión, compara los archivos que hay en el servidor contra
// los almacenados en caché y de ser necesario, los actualiza
self.addEventListener('fetch', e => {
  e.respondWith(

    // Comparar archivos de servidor url vs. caché
    caches.match(e.request)
    .then(res => {
      // Son iguales, utiliza los del caché
      if (res) {
        return res
      }

      // Son diferentes, utiliza los del servidor y actualiza la caché
      return fetch(e.request)
    })

  )
    
})