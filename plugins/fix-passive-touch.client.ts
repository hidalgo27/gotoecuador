// plugins/silence-touchstart-warning.client.ts
export default defineNuxtPlugin(() => {
	if (process.dev && process.client) {
		const originalWarn = console.warn
		console.warn = (...args) => {
			if (
				args[0] &&
				typeof args[0] === 'string' &&
				args[0].includes('Added non-passive event listener to a scroll-blocking')
			) {
				return
			}
			originalWarn(...args)
		}
	}
})
