const {test, expect, chromium} = require('@playwright/test');

//only
test.only('test1', async ({ page }) => {
    console.log('this is test 1');
})

//skip
test.skip('test2', async ({ page }) => {
    console.log('this is test 2');
})

test.skip('test3', async ({ page, browserName }) => {
    console.log('this is test 3');

    if(browserName === 'chromium') {
        test.skip();
    }
})

//Fixme

test('test4', async ({ page }) => {
    test.fixme();
    console.log('this is test 4');
})

//Fail
test('test5', async ({ page }) => {
    test.fail(); //exp
    console.log('this is test 5');
    expect(1).toBe(2); //If both exp and act is failed than test pass
})

test('test6', async ({ page, browserName }) => {
    if(browserName === 'chromium') {

        test.fail(); //exp
    }
})

//Slow

test('test7', async ({ page }) => {
    //test.slow();
    test.waitForTimeout(5000);
    console.log('this is test 7');
    await page.goto('https://demoblaze.com/index.html');
})
