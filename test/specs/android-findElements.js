describe('Android Elements Tests', () => {
    it('FindElementByAccessibilityID', async() => {
        const appOption = await $('~App');
        await appOption.click();
        const actionBar = await $('~Action Bar')
        await expect(actionBar).toBeExisting();
    })
});