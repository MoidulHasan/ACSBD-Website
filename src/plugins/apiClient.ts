export default defineNuxtPlugin((nuxtApp) => {
  const { appUrl } = useRuntimeConfig().public

  const apiClient = $fetch.create({
    baseURL: `${appUrl}/api/proxy`,

    // eslint-disable-next-line unused-imports/no-unused-vars
    onRequest({ request, options, error }) {
      const token = useCookie('token')

      if (token.value) {
        const headers = (options.headers ||= {})

        if (Array.isArray(headers)) {
          headers.push(['Authorization', `Bearer ${token.value}`])
        }
        else if (headers instanceof Headers) {
          headers.set('Authorization', `Bearer ${token.value}`)
        }
        else {
          headers.Authorization = `Bearer ${token.value}`
        }
      }
    },

    async onResponseError({ response }) {
      if (response.status === 401) {
        await nuxtApp.runWithContext(() => navigateTo({ name: 'login' }))
      }
    },
  })

  return {
    provide: {
      apiClient,
    },
  }
})
