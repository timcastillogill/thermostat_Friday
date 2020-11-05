'use strict';

describe('Thermostat', function() {
    var thermostat

    beforeEach(function() {
        thermostat = new Thermostat();
    })

    it('it has a default temp of 20', function() {
      expect(thermostat.currentTemp()).toEqual(20)
    })

    it('has a minimum temperature of 10', function() {
      thermostat.down();
      thermostat.down();
      thermostat.down();
      thermostat.down();
      thermostat.down();
      thermostat.down();
      thermostat.down();
      thermostat.down();
      thermostat.down();
      thermostat.down();
      expect(thermostat.currentTemp()).toEqual(10)
    })

    it('can increase the temperature', function() {
      thermostat.up();
      thermostat.up();
      expect(thermostat.currentTemp()).toEqual(22)
    })

    it('can decrease the temperature', function() {
      thermostat.down();
      thermostat.down();
      expect(thermostat.currentTemp()).toEqual(18)
    })

    it('has a power saving mode on by default', function() {
      expect(thermostat.isPowerSavingModeOn()).toBe(true);
    })

    it('can turn off the power saving mode', function() {
      thermostat.turnOffPowerSavingMode();
      expect(thermostat.isPowerSavingModeOn()).toBe(false);
    })

    it('can turn the power saving mode back on', function() {
      thermostat.turnOffPowerSavingMode();
      expect(thermostat.turnOffPowerSavingMode()).toBe(false);
      thermostat.turnOnPowerSavingMode();
      expect(thermostat.isPowerSavingModeOn()).toBe(true);
    })

    describe('when power saving mode is on', function() {
      it('will have a maximum temperature of 25 degrees when power saving mode is ON', function() {
        thermostat.up();
        thermostat.up();
        thermostat.up();
        thermostat.up();
        thermostat.up();
        thermostat.up();
        expect(thermostat.currentTemp()).toEqual(25);
      });
    })
  })