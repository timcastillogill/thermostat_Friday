'use strict';

class Thermostat {
    constructor() {
      this.MAX_LIMIT_PSM_ON = 25;
      this.MAX_LIMIT_PSM_OFF = 32;
      this.MIN_TEMP = 10;
      this.temperature = 20;
      this.powerSavingMode = true;
    }

    currentTemp() {
      return this.temperature;
    }

    isMinTemp() {
      return this.temperature === this.MIN_TEMP;
    }

    isMaxTemp() {
      if (this.isPowerSavingModeOn() === false) {
        return this.temperature === this.MAX_LIMIT_PSM_OFF;
      }
      return this.temperature === this.MAX_LIMIT_PSM_ON;
    }

    isPowerSavingModeOn() {
      return this.powerSavingMode === true;
    }

    turnOffPowerSavingMode() {
      return this.powerSavingMode = false;
    }

    turnOnPowerSavingMode() {
      return this.powerSavingMode = true;
    }

    up() {
      if (this.isMaxTemp()) {
        return;
      }
      this.temperature += 1;
    }

    down() {
      if (this.isMinTemp()) {
        return;
      }
      this.temperature -= 1;
    }

    reset() {
      this.temperature = 20;
    };
};