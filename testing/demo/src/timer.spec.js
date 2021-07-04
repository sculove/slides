describe("Manually ticking the Jasmine Clock", function() {
  var timerCallback;
  beforeEach(function() {
    timerCallback = jasmine.createSpy();
    jasmine.clock().install();  // timer mocking start
  });
  afterEach(function() {
    jasmine.clock().uninstall();  // timer mocking end
  });

  it("causes a timeout to be called synchronously", function() {
    // Given
    setTimeout(function() {
      timerCallback();
    }, 100);
    expect(timerCallback).not.toHaveBeenCalled();
    // When
    jasmine.clock().tick(101);
    // Then
    expect(timerCallback).toHaveBeenCalled();
  });

  it("causes an interval to be called synchronously", function() {
    // Given
    setInterval(function() {
      timerCallback();
    }, 100);
    expect(timerCallback).not.toHaveBeenCalled();

    // When
    jasmine.clock().tick(101);  // 101
    // Then
    expect(timerCallback.calls.count()).toEqual(1);

    // When
    jasmine.clock().tick(50);   // 151
    // Then
    expect(timerCallback.calls.count()).toEqual(1);

    // When
    jasmine.clock().tick(50);   // 201

    // Then
    expect(timerCallback.calls.count()).toEqual(2);
  });
});