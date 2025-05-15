import {defineStore} from "pinia";

export const useFormStore = defineStore('FormStore', () => {
	const config = useRuntimeConfig()
	const travelDate = ref()
	const destination = ref([])
	const showModalInquireGlobal = ref(false)
	const showModalItinerary = ref(false)
	const titlePackages = ref()

	const $reset = () => {
		travelDate.value = ''
	}

	const getInquire = async (obj:any) => {
		let headers = new Headers();
		headers.append('Content-Type', 'application/json');

		return new Promise(async (resolve, reject) => {
			try {
				const res = await fetch(config.public.apiBase + "/formulario-diseno/", {
					method: 'POST',
					headers: headers,
					body: JSON.stringify(obj)
				})
				const data = await res.json()
				if (data) {
					resolve(data)
				}else {
					reject(data)
				}
			} catch (error) {
				reject(error)
			}
		})
	}

	const saveInquire = async (obj: any) => {
		const res = await fetch(config.public.apiInquire, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(obj)
		})

		if (!res.ok) throw new Error('Error al guardar inquire')
		return await res.json()
	}

	const saveLead = async (obj: any) => {
		const res = await fetch("https://app.g1.agency/api/v1/leads/", {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(obj)
		})

		if (!res.ok) throw new Error('Error al guardar lead')
		return await res.json()
	}

	const getCountry = async (url:any) => {
		let headers = new Headers();
		headers.append('Content-Type', 'application/json');

		return new Promise(async (resolve, reject) => {
			try {
				const res = await fetch(config.public.apiBase + "/destinations/"+url, {
					method: 'GET',
					headers: headers,
				})
				const data = await res.json()
				if (data) {
					resolve(data)
				}else {
					reject(data)
				}
			} catch (error) {
				reject(error)
			}
		})
	}

	return {
		travelDate,
		destination,
		showModalInquireGlobal,
		showModalItinerary,
		titlePackages,
		saveInquire,
		saveLead,
		getInquire,
		getCountry,
		$reset

	}
},{persist: true})