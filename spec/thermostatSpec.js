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
      thermostat.down(10);
      expect(thermostat.currentTemp()).toEqual(10)
    })

    it('can increase the temperature', function() {
      thermostat.up(2);
      expect(thermostat.currentTemp()).toEqual(22)
    })

    it('can decrease the temperature', function() {
      thermostat.down(2);
      expect(thermostat.currentTemp()).toEqual(18)
    })
})