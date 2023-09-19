import {useAsyncData} from "../../../.nuxt/imports";

export const getServices = async () => {
    const runtimeConfig = useRuntimeConfig();

    const {data, pending,  error, refresh} = await useAsyncData(
        "services",
        ()=> $fetch(runtimeConfig.apiUrl+"/data/services.json"),
    )

    return {data, pending, error, refresh}
}