import MainPage from '../page-objects/pages/MainPage';
import config from '../config.json';
import { LogIn } from '../webpage-Locators.json'
import { Selector } from 'testcafe'
import {mainPge} from '../webpage-Locators.json'


const mainPg = new MainPage()

fixture('PGE Tests')
    .page(`${config.baseUrl}`)


//Login using Invalid credentials...
test("Accept cookies and Search the website ", async t => {
    mainPg.search("power outage")
    await t
        .wait(5000)
        .expect(Selector(mainPge.searchResults).innerText).contains("Search Results for: power outage")
});

