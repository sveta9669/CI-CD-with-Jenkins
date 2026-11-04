describe('Login page', () => {
    it('should display the login form', async () => {
        await browser.url('https://the-internet.herokuapp.com/login');

        await expect($('#username')).toBeDisplayed();
        await expect($('#password')).toBeDisplayed();
    });
});