//to make assertions woth selectors we use this library
import { Selector } from "testcafe";

//fixture its like a name of our test suite and .page the page which testcafe will try to access
fixture`Users Guide Page`.page("./").skipJsErrors();

// t is testcafes test controller, we will start all commands from it
test("Go to French Guide", async (t) => {
  await t.maximizeWindow();
  await t.click('[id="sidebar"] p [href="/projects/redmine/wiki/Guide"]');
  await t
    .expect(Selector('[href="/projects/redmine/wiki/FrGuide"]').innerText)
    .eql("French");
  await t.click('[href="/projects/redmine/wiki/FrGuide"]');
  await t
    .expect(
      Selector('[href="/projects/redmine/wiki/FrRedmineAccounts"]').innerText
    )
    .eql("Comptes utilisateur");
});
