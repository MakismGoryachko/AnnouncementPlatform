import { makeAutoObservable } from "mobx"

export default class UsersStore {
    constructor() {
        this._types = [

            { id: 1, name: "Телефоны" },
            { id: 2, name: "Одежда" },
            { id: 3, name: "Аренда" },
            { id: 4, name: "Автомобили" },
        ]

        this._brands = [

            { id: 1, name: "Фрунзенский" },
            { id: 2, name: "Московский" },
            { id: 3, name: "Заводской" },
            { id: 4, name: "Партизанский" },
        ]

        this._devices = []
        this._selectedType = {}
        this._selectedBrand = {}
        this._ownerAnnouncement = []
        makeAutoObservable(this)
    }

    setBrands(brands) {
        this._brands = brands
    }
    setTypes(types) {
        this._types = types
    }
    setDevices(devices) {
        this._devices = devices
    }
    setSelectedType(type) {
        this._selectedType = type
    }
    setSelectedBrand(brand) {
        this._selectedBrand = brand
    }
    setOwnerAnnouncement(ownerAnnouncement)
    {
        this._ownerAnnouncement = ownerAnnouncement
    }
    get ownerAnnouncement() {
        return this._ownerAnnouncement
    }
    get types() {
        return this._types
    }
    get brands() {
        return this._brands
    }
    get devices() {
        return this._devices
    }
    get selectedType() {
        return this._selectedType
    }
    get selectedBrand() {
        return this._selectedBrand
    }
}