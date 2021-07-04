describe("Mocking ajax", function() {
  beforeEach(function() {
    jasmine.Ajax.install();
  });
  afterEach(function() {
    jasmine.Ajax.uninstall();
  });

  it("specifying response when you need it", function() {
    // Given
    var doneFn = jasmine.createSpy();
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function(args) {
      if (this.readyState == this.DONE) {
        doneFn(this.responseText);
      }
    };

    // When
    xhr.open("GET", "/some/cool/url");
    xhr.send();

    // Then
    expect(jasmine.Ajax.requests.mostRecent().url).toBe('/some/cool/url');
    expect(doneFn).not.toHaveBeenCalled();

    // When
    jasmine.Ajax.requests.mostRecent().respondWith({
      "status": 200,
      "contentType": 'text/plain',
      "responseText": 'awesome response'
    });

    // Then
    expect(doneFn).toHaveBeenCalledWith('awesome response');
  });

  it("allows responses to be setup ahead of time", function () {
    // Given
    var doneFn = jasmine.createSpy();
    jasmine.Ajax.stubRequest('/another/url').andReturn({
      "responseText": 'immediate response'
    });
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function(args) {
      if (this.readyState == this.DONE) {
        doneFn(this.responseText);
      }
    };

    // When
    xhr.open("GET", "/another/url");
    xhr.send();

    // Then
    expect(doneFn).toHaveBeenCalledWith('immediate response');
  });
});