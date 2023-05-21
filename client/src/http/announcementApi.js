import { $host, $authHost } from "./index";


export const createAnnouncement = async (device) => {
    console.log(device)
    const { data } = await $host.post('/announcement', {device})
    return data
}

export const getAllAnnouncement = async () => {
    const { data } = await $host.get("/announcement/getAll")
    return data
}

export const getOneAnnouncement = async (id) => {
    const { data } = await $host.get("/announcement/getone/"+id)
    return data
}
