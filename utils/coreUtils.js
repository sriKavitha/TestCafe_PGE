import { Selector, t } from 'testcafe';

export default class coreUtils {

    async clickElement(element) {
        //stepName = "click " +element;
        try {
            await t
                .click(Selector(element));
            console.log("Clicked on element" + element);
        }
        catch (err) {
            console.log("unable to click on element " + element);
            throw err;
        }
    }

    async setText(element, text_to_be_set) {
        // stepName = "set text in " +element + " and text is : " + text_to_be_set;
        try {
            await t
                .typeText(element, text_to_be_set);
            console.log(text_to_be_set + " Text is entered in: " + element);
        }
        catch (err) {
            console.log("unable to enter text:" + text_to_be_set + " in element " + element);
            throw err;
        }
    }

    async replaceText(element, text_to_be_set) {
        try {
            await t
                .typeText(element, text_to_be_set, { replace: true });
            console.log("Text is replaced in: " + element);
        }
        catch (err) {
            console.log("unable to replace text in element " + element);
            throw err;
        }
    }


    async verifyTextContains(element, text_to_be_searched) {
        try {
            await t
                .expect(Selector(element).textContent).contains(text_to_be_searched)
            console.log("Text is available in element: " + element);
        } catch (err) {
            console.log("Text is not available in element: " + element);
            throw err;
        }

    }

    async isElementExists(element) {
        try {
            await t
                .expect(Selector(element).exists).ok()
        } catch (err) {
            console.log("Text is not available in element: " + element);
            throw err;
        }
    }

    async hoverOnElement(element, text) {
        try {
            await t
                .hover(Selector(element).withText(text));
            console.log("Hovered on: " + element);
        }
        catch (err) {
            console.log("unable to hover on element " + element);
            throw err;
        }
    }

    async clickTextElement(element, text) {
        try {
            await t
                .click(Selector(element).withText(text));
            console.log("Clicked on element" + element + " having text :" + text);
        }
        catch (err) {
            console.log("unable to click on element" + element + " having text :" + text);
            throw err;
        }
    }

    async scrollToElement() {
        try {
            await scrollTo('#Product Type_Jeans')
            console.log("Scrolled to element" + element);
        }
        catch (err) {
            console.log("Unable to scrolled to element" + element);
            throw err;
        }
    }

    async selectText(element, text) {
        try {
            await t
                .click(Selector(element).filter('[value="Latest Arrival"]'))
            console.log("Selected" + text + " in element :" + element);
        }
        catch (err) {
            console.log("Unable to select" + text + " in element :" + element);
            throw err;
        }
    }

    async verifyText(element) {
        try {
            await t
                .expect(Selector(element).exists).ok()
            console.log("element present");
        }
        catch (err) {
            console.log("element is not present");
            throw err;
        }
    }

    async isDisplayed(element) {
        try {
            if (await t.expect(Selector(element).exists).ok()) {
                console.log(element + " is present");
                return true
            }
        } catch (err) {
            console.log(element + " is not present");
            return false
        }
    }

    async pressKey(key) {
        try {
            await t
                .pressKey(key)
            console.log(key + " key was pressed");
        }
        catch (err) {
            console.log(key + " key was not pressed");
            throw err;
        }
    }

    async clickAttributeElement(element, value) {
        try {
            await t
                .click(Selector(element).find('option').withAttribute('value', value))
            console.log('element clicked');
        }
        catch (err) {
            console.log("unable to click element");
            throw err;
        }
    }

    async verifyTextWithIndex(element, index) {
        try {
            await t
                .expect(Selector(element).nth(0).exists).ok()
            console.log('Verify element ' + element + ' with index')
        }
        catch (err) {
            console.log('Verify element ' + element + ' with index')
            throw err;
        }
    }

    async getComboboxSelectedValue(element) {
        try {
            var value = await Selector(element).value
            console.log('the selected dropdowncombo value is:' + value)
            return value.trim()
        } catch (err) {
            console.log('the element' + element + 'not present')
            return null
        }
    }


    async getText(element) {
        try {
            var value = await Selector(element).textContent
            console.log('the text value is:' + value)
            return value.trim()
        } catch (err) {
            console.log('the element' + element + 'not present')
            return null
        }
    }


    async getElement(element) {
        try {
            var value = await Selector(element).value
            console.log('the text value is:' + value)
            return value.trim()
        } catch (err) {
            console.log('the element' + element + 'not present')
            return null
        }
    }
   
    async clickIndexElement(element) {
        try {
            await t
                .click(Selector(element).nth(0))
            console.log('Clicked element ' + element + ' with index')
        }
        catch (err) {
            console.log('Can not click ' + element + ' with index')
            throw err;
        }
    }

    async clickIndexoneElement(element) {
        try {
            await t
                .click(Selector(element).nth(1))
            console.log('Clicked element ' + element + ' with index')
        }
        catch (err) {
            console.log('Can not click ' + element + ' with index')
            throw err;
        }
    }

    async shortWait() {
        try {
            await t
                .wait(8000)
            console.log('waited for element')
        }
        catch (err) {
            console.log('can not wait for element')
            throw err;
        }
    }

async miniShortWait() {
        try {
            await t
                .wait(2000)
            console.log('waited for element')
        }
        catch (err) {
            console.log('can not wait for element')
            throw err;
        }
    }

    async verifyTextEquals() {
        await t
        var text = await elementActions.getText('#collapse_shippingAddress > div > div > div > div.has-address.col-12 > div.selected-address.address-entry.row > div.col-9 > span:nth-child(1) > strong')
        console.log(text)
    }

    async navigateTo(url) {
        await t
            .navigateTo(url)
    }

    async reload() {
        await t.eval(() => location.reload(true));
    }

    async isVisible(element) {
        await t
            .expect(Selector(element).visible).ok();
    }

}