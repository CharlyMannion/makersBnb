module.exports = {
'Fill in form' : function (client) {
  client
    .url("http://localhost:3000/listings/add")
    .waitForElementVisible('body', 2000)
    .assert.containsText('body', 'Add a Rasher')
    .setValue('#title', 'The Shaddy Shed')
    .setValue('#description', 'theres a nice box inside and is cool in the summer')
    .setValue('#price', '1000000')
    .click('#submit')
    .waitForElementVisible('body', 2000)
    .assert.containsText('body', 'Add a Rasher')
    .end()
  }
}
