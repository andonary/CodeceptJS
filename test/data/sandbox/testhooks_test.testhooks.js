Feature('Test hooks');

BeforeSuite(() => {
  console.log(`I'm simple BeforeSuite hook`);
});

Before(() => {
  console.log(`I'm simple Before hook`);
});

After(() => {
  console.log(`I'm simple After hook`);
});

AfterSuite(() => {
  console.log(`I'm simple AfterSuite hook`);
});

BeforeSuite(function* (I) {
  let text = yield I.stringWithHook('BeforeSuite');
  console.log(text);
});

Before(function* (I) {
  let text = yield I.stringWithHook('Before');
  console.log(text);
});

After(function* (I) {
  let text = yield I.stringWithHook('After');
  console.log(text);
});

AfterSuite(function* (I) {
  let text = yield I.stringWithHook('AfterSuite');
  console.log(text);
});

Scenario('Simple test 1', () => {
  console.log(`It's first test`);
});
