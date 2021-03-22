export default class App {
    constructor() {
        this._components = {};
    }

    start() {
        for(let componentName in this._components) {
            this._components[componentName].init();
        }
    }

    addComponent(componentName, component) {
        this._components[componentName] = component;
    }

    getComponent(componentName) {
        return this._components[componentName];
    }
}