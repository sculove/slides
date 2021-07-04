describe("Global injection", function() {
   it ("should return OS type", function() {
        // Given
        var fakeWindow = {
          navigator: {
           userAgent: "Mozilla/5.0 (iPhone; CPU iPhone OS 9_0 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Mobile/13A452 Safari Line/5.4.0"
          }
        };

        // When
        var osTypo = agent(fakeWindow);

        // Then
        expect(osTypo).toEqual('ios');
    });
});