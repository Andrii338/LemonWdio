 
describe('Recover your password', () => {
    it('should login with valid credentials', async () => {
        await browser.url(`https://sandbox.learnitmore.club/#/auth/login`);
        await $('a[ng-reflect-router-link = "/auth/forgot-password"]').click();

        await $('input#mat-input-2').setValue('asjdk@gmail.com');
        await $('button[aria-label = "SEND RESET LINK"]').click();
        await browser.pause(10000);
    });
});

 