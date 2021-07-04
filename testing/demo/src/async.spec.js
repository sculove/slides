describe("Asynchronous specs", function() {
  var value;
  it("should support async execution of test preparation and expectations", function(done) {
    // Given
    value = 100;
    expect(value).toEqual(100);

    // When
    setTimeout(function() {
      // Then
      expect(value).toEqual(101);
      done();
    },100);

    value++;
  });
});