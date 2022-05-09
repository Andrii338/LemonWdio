
describe('Create an account', () => {
    it('should login with valid credentials', async () => {
        await browser.url(`https://sandbox.learnitmore.club/#/auth/register`);

        await $('input#mat-input-0').setValue('menzhehaa+1@gmail.com');

        await $('input#mat-input-1').setValue('Test222');
        await $('input#mat-input-2').setValue('Test222');

        await $('input#mat-input-3').setValue('Testfirstname');
        await $('input#mat-input-4').setValue('testlastname');
        await $('input#phone').setValue('5055232323');
        await $('input#mat-input-5').setValue('Testnameschool');


        await $('button[aria-label= "CREATE AN ACCOUNT"]').click();
        await browser.pause(15000);
    
    });
});

