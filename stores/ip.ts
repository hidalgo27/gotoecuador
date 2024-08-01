import {defineStore} from "pinia";

export const useIpStore = defineStore('IpStore', () => {
	const getIp = async () => {
		let headers = new Headers();
		headers.append('Content-Type', 'application/json');

		return new Promise(async (resolve, reject) => {
			try {
				const res = await fetch("https://ipapi.co/json", {
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
		getIp,
	}
},{persist: true})