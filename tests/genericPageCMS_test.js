import { URLs } from '../utils/config.json'
import genericPageCMS_page from '../page-objects/pages/genericPageCMS_page';
import Assert from '../utils/assertions.js';

const assert = new Assert();

const genericPage = new genericPageCMS_page()

fixture('PGE CMS Tests')
  .page(`${URLs.devUrl}`)
//.page(`${config.devUrl}`)
  
  //declaring constants for creating the page which are mandatory
  const title = "ExampleTitle"
  const section = "Example Section"
  const lang = "en"
  const name = "Example name"
  const description = "Example description"
  const body = "Example body"
  const linkSection = "Link Section"


  //  testcase - to create a generic page 
test.only
  .meta({ feature: true, genericPage: true })
  ("Create a Generic Page via Content Management System...", async t => {

      await t
      .maximizeWindow()
      var abc = await genericPage.createPage(title, section, lang, name, description, body, linkSection);

      //Verification... if the elemnt exists or not
      //await t.expect(abc.exists).ok()
      await assert.isOk(abc);
  });



// testcase - search and view a generic page from the collections list
test
  .meta({ feature: true, genericPage: true })
  ("Search for a Generic Page in Content Management System...", async t => {
    await t
    .maximizeWindow()
    await genericPage.viewPage(title)
  });


// testcase - search and delete a generic page from the collection list
test
  .meta({ feature: true, genericPage: true })
  ("Delete a Generic Page in Content Management System...", async t => {
    await t
    .maximizeWindow()
    await genericPage.deletePage(title)
  });
