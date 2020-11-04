'use strict';

describe('Feature test', function() {
    var thermostat;

    beforeEach(function() {
        thermostat = new Thermostat();
    })

    it('has a default temp of 20', function() {
      expect(thermostat.temperature()).toEqual(20);
    })

    it('can increase the temperature', function() {
      thermostat.up(2);
      expect(thermostat.temperature()).toEqual(22);
    })

})