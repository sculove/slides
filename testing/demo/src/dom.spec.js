describe("Using sandbox", function() {
    it ("should remove a class", function() {
        // Given
        setFixtures(sandbox({class: 'TestClass'}));
        expect($('#sandbox')).toHaveClass('TestClass');

        // When
        $('#sandbox').removeClass("TestClass");

        // Then
        expect($('#sandbox')).not.toHaveClass('TestClass');
    });

    it ("should invoke the btnShowMessage click event.", function() {
        // Given
        setFixtures(sandbox());
        var spyEvent = spyOnEvent('#sandbox', 'click');

        // When
        $('#sandbox').trigger( "click" );

        // Then
        expect('click').toHaveBeenTriggeredOn('#sandbox');
        expect(spyEvent).toHaveBeenTriggered();
    });
});

describe("Using fixture", function() {
    beforeEach(function() {
        jasmine.getFixtures().fixturesPath = "fixture";
        loadFixtures("domtest.html");
    });

    it ("should invoke the btnShowMessage click event.", function() {
        // Given
        var spyEvent = spyOnEvent('#btnShowMessage', 'click');

        // When
        $('#btnShowMessage').trigger( "click" );

        // Then
        expect('click').toHaveBeenTriggeredOn('#btnShowMessage');
        expect(spyEvent).toHaveBeenTriggered();
    });
});