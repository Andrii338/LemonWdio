 

describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await browser.url(`https://sandbox.learnitmore.club/#/auth/login`);

       await $('input#mat-input-0').setValue('menzhehaa@gmail.com');
       await $('input#mat-input-1').setValue('Andrii77');
        await $('button[aria-label= "LOG IN"]').click();

        await browser.pause(15000);
    });
});


