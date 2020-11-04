describe('Feature test', function() {
    var thermostat;

    beforeEach(function() {
        thermostat = new Thermostat();
    })

    it('has a default temp of 20', function() {
        thermostat = new thermostat();
        expect(thermostat.currentTemp()).toBe(20);

    })
})