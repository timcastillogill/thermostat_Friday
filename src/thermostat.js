'use strict';

class Thermostat {
    constructor() {
      this.MIN_TEMP = 10;
      this.temperature = 20;
    }

    currentTemp() {
      return this.temperature;
    }

    isMinTemp() {
      debugger;
      return this.temperature === this.MIN_TEMP;
    }

    up(num) {
      this.temperature += num;
    }

    down(num) {
      if (this.isMinTemp()) {
        return;
      }
      this.temperature -= num;
    }
};