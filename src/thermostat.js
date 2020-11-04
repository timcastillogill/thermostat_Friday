'use strict';

class Thermostat {
    constructor() {
        this.currentTemp = 20;
    }

    temperature() {
        return this.currentTemp;
    }

    up(num) {
        this.currentTemp += num;
    }

    down(num) {
        this.currentTemp -= num;
    }
};