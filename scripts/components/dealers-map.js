/* eslint-disable no-undef */
import BaseComponent from "./base-component.js";

export default class DealersMap extends BaseComponent {

    constructor(map_id) {
        super();
        this._map_id = map_id;
    }

    init() {
        const map_id = this._map_id;
        ymaps.ready(function () {
            const myMap = new ymaps.Map(map_id, {
                // Координаты центра карты.
                // Порядок по умолчанию: «широта, долгота».
                // Чтобы не определять координаты центра карты вручную,
                // воспользуйтесь инструментом Определение координат.
                center: [55.76, 37.64,],
                zoom: 8,
                controls: [],
            });
    
            // Создание геообъекта с типом точка (метка).
            var myGeoObject = new ymaps.GeoObject({
                geometry: {
                    type: "Point", // тип геометрии - точка
                    coordinates: [55.76, 37.64,], // координаты точки
                },
                options: {},
            });
    
            // Размещение геообъекта на карте.
            myMap.geoObjects.add(myGeoObject); 
        });
    }
}