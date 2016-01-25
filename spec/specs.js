describe('Contact', function() {
  it("will create a contact with the given properties", function(){
    var testContact = new Contact ("Andrew", "Cho");
    expect(testContact.firstName).to.equal("Andrew");
    expect(testContact.lastName).to.equal("Cho");
    expect(testContact.addresses).to.eql([]);
  });
});
