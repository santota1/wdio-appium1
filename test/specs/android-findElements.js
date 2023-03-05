describe('Android Elements Tests', () => {
    it('FindElementByAccessibilityID', async() => {
        const appOption = await $('~App');
        await appOption.click();
        const actionBar = await $('~Action Bar')
        await expect(actionBar).toBeExisting();
    })

    it('FindElementByClassName', async() => {
        const className = await $('android.widget.TextView');
        console.log(className.getText());
        await expect(className).toHaveText('API Demos')
    })

    it('FindElementByXPath', async() => {
        await $('//android.widget.TextView[@content-desc="Alert Dialogs"]').click();
        await $('//android.widget.Button[@resource-id="io.appium.android.apis:id/select_button"]').click();
        await $('//android.widget.TextView[@text="Command two"]').click();
        const command2Text = await $('//android.widget.TextView[@text="You selected: 1 , Command two"]');
        await expect(command2Text).toHaveText("You selected: 1 , Command two");

    })
    it.only('Find Multiple Elements', async() => {
        const textList = await $$('android.widget.TextView');

        const expectedList = ['API Demos', "Access'ibility", 'Accessibility', 'Animation', 'App', 'Content', 'Graphics', 'Media', 'NFC', 'OS', 'Preference', 'Text', 'Views'];
        const actualList = [];

        for(const element of textList){
            actualList.push(await element.getText());
        }

        await expect(actualList).toEqual(expectedList)
    })
});