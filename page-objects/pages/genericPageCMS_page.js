import { Selector, t } from 'testcafe'
import { genericPageLoc } from '../../locators/locators.json';
import { collectionsPageLoc } from '../../locators/locators.json';
import { ClientFunction } from 'testcafe';
import coreUtils from '../../utils/coreUtils'

const utilities= new coreUtils()


class genericPageCMS {
    constructor() {
        // const addHomeSection=Selector('#sectionss-field-11>div:nth-child(1)>div:nth-child(2)>span') // goodone
        // const titleDesc=Selector('div[role="menu"]>ul>div:nth-child(3)')                            //goodone
    }
    async createPage(title, section, lang, name, description, body, linkSection) {
        await t.click(collectionsPageLoc.loginButton)
        await t.click(collectionsPageLoc.genericPage)
        await t.click(collectionsPageLoc.newGenericPage)
            //await t.click(addHomeSection) good one for title&desc
            .typeText((genericPageLoc.title), title, { paste: true })
            .typeText(genericPageLoc.section, section, { paste: true })
            .typeText(genericPageLoc.langDropDown, lang)
            .pressKey('tab')
            .pressKey('tab')
            .typeText(genericPageLoc.name, name, { paste: true })
            .typeText(genericPageLoc.description, description, { paste: true })
            .typeText(genericPageLoc.body, body, { paste: true })
            .typeText(genericPageLoc.linkSectionHeader, linkSection, { paste: true })
            .click(genericPageLoc.publish)
            .click(genericPageLoc.publishNow)
        //return the selector after adding the page...
        return Selector(genericPageLoc.verifyGenericPageAdded)
    }


    async viewPage(title) {
        await t.click(collectionsPageLoc.loginButton)
               .typeText(collectionsPageLoc.searchCollection, title, { paste: true })
               .pressKey("enter")
               //.wait(1000)
               utilities.miniShortWait()
            const elements = await Selector(collectionsPageLoc.collectionList); //get multiple results
            const elementCount = await elements.count
            for (let i = 0; i < elementCount; i++) 
            {
                await t.click(elements.nth(i))
                utilities.miniShortWait()
                //.wait(1000)
                const goBack = ClientFunction(() => window.history.back());
                await goBack();
            }
    }


    async deletePage(title) {
    await t.click(collectionsPageLoc.loginButton)
           .typeText(collectionsPageLoc.searchCollection, title, { paste: true })
           //.pressKey("enter")
           utilities.pressKey("enter")
           utilities.miniShortWait()
           //.wait(1000)
        const elements = await Selector(collectionsPageLoc.collectionList); //get multiple results
        const elementCount = await elements.count
        for (let i = 0; i < elementCount; i++) 
        {
            await t.click(elements.nth(i))
            .wait(1000)
            .setNativeDialogHandler(()=>true)
            .click(genericPageLoc.deleteGenericPage)
        }
}
}
export default genericPageCMS
