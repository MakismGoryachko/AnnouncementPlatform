import { $host, $authHost } from "./index";

export const createAnnouncement = async (device) => {
    const { data } = await $authHost.post('/announcement', device)
    return data
}

export const getOneUser = async (id) => {
    const { user } = await $authHost.get('/users/Oneuser/' + id)
    return user
}

export const updateAnnouncement = async (device, id) => {
    const { data } = await $authHost.post('/activeannouncement/update/' + id, device)
    return data
}

export const getAllAnnouncement = async () => {
    const { data } = await $authHost.get("/announcement/getAll")
    return data
}

export const getActiveAllAnnouncement = async () => {
    const { data } = await $authHost.get("/activeannouncement/getAll")
    return data
}

export const getOneAnnouncement = async (id) => {
    const { data } = await $authHost.get("/activeannouncement/getone/" + id)
    return data
}

export const getOneFavouriteAnnouncement = async (id) => {
    const { data } = await $authHost.get("/favouriteannouncement/getone/" + id)
    return data
}

export const getOneModerationAnnouncement = async (id) => {
    const { data } = await $authHost.get("/announcement/getone/" + id)
    return data
}

export const getAllUserAnnouncement = async (id) => {
    const { data } = await $authHost.get("/activeannouncement/allUserAnnouncement/" + id)
    return data
}

export const getAdvertisements = async () => {
    const { data } = await $authHost.get('/activeannouncement/userAnnouncement')
    return data
}

export const getFavourite = async () => {
    const { data } = await $authHost.get('/favouriteannouncement/userAnnouncement')
    return data
}

export const getAdvertisementsModeration = async () => {
    const { data } = await $authHost.get('/announcement/userAnnouncement')
    return data
}

export const deleteAnnouncement = async (id) => {
    const { data } = await $authHost.delete("/activeannouncement/delete/" + id)
    return data
}

export const deleteFavouriteAnnouncement = async (id) => {
    const { data } = await $authHost.delete("/favouriteannouncement/delete/" + id)
    return data
}

export const deleteModerationAnnouncement = async (id) => {
    const { data } = await $authHost.delete("/announcement/delete/" + id)
    return data
}

export const createActiveAnnouncement = async (device) => {
    const { data } = await $authHost.post('/activeannouncement', device)
    return data
}

export const createFavouriteAnnouncement = async (device) => {
    const { data } = await $authHost.post('/favouriteannouncement', device)
    return data
}





