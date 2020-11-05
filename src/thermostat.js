'use strict';

class Thermostat {
    constructor() {
      this.MIN_TEMP = 10;
      this.temperature = 20;
      this.powerSavingMode = true;
    }

    currentTemp() {
      return this.temperature;
    }

    isMinTemp() {
      debugger;
      return this.temperature === this.MIN_TEMP;
    }

    isPowerSavingMode() {
      return this.powerSavingMode === true;
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