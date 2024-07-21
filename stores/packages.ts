import { defineStore } from 'pinia'

export const usePackageStore = defineStore('PackageStore', () => {
	const showModalMenu = ref(false)
	return{
		showModalMenu
	}

}, {persist: true,})