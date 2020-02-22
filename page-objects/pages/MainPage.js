import { t } from 'testcafe'
import {mainPge} from '../../webpage-Locators.json'

class MainPage {
    async search(searchTxt) {
        await t
            .maximizeWindow()
            .wait(1000)
             .click((mainPge.acceptCookie))
             .wait(1000)
             .typeText((mainPge.searchTextBox), searchTxt, { paste: true })
             .wait(3000)
             .pressKey('enter')
    }
}
export default MainPage
