export default defineEventHandler((event) => {
	const path = getRequestURL(event).pathname

	if (path === '/.well-known/appspecific/com.chrome.devtools.json') {
		// Evita el warning devolviendo una respuesta vacía
		return {
			status: 'ok'
		}
	}
})
