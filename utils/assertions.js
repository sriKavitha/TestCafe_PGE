import { Selector, t } from 'testcafe'

const assert = require('assert');

export default class Assert {

    async areEqual(ActualMessage, ExpectedMessage) {
        assert.equal(ActualMessage, ExpectedMessage)
    }

    async areNotEqual(ExpectedMessage, ActualMessage) {
        assert.areNotEqual(ActualMessage, ExpectedMessage)
    }

    // async contains(stepMessage, element, textToBeSearched) {
    //     await t
    //     .expect(Selector(element).textContent).contains(ExpectedMessage)
    // }

    async notContains(stepMessage, element, textToBeSearched) {

    }

    async greaterThan(stepMessage, element, textToBeSearched) {

    }

    async lessThan(stepMessage, element, textToBeSearched) {

    }

    async fail(message) {
        assert.fail(new TypeError(message));
    }

    async isTextContains(element, message) {
        await t
            .expect(Selector(element).textContent).contains(message);
    }
    async isOk(element) {
        await t.expect(element.exists).ok()
    }


}