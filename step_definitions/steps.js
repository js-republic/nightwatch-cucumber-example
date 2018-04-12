const { client } = require("nightwatch-cucumber");
const { Given, Then, When } = require("cucumber");

Given(/^I open JS-Republic's website$/, () => {
  return client.url("http://js-republic.com/");
});

Then(/^the title is "(.*?)"$/, text => {
  return client.assert.title(text);
});

Then(/^the JS-Republic logo exist$/, () => {
  return client.assert.visible(".icon.icon-js-republic");
});
