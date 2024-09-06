describe('Tugas Test Auto Saucedemo', () => {
    it('Rizal - Login Success', async() => {
        await browser.url("https://www.saucedemo.com/")
        
        const usernameField = await browser.$('//*[@id="user-name"]')
        const passwordField = await browser.$('//*[@id="password"]')
        const loginButton = await browser.$('//*[@id="login-button"]')
        

        await usernameField.setValue('standard_user')        
        await passwordField.setValue('secret_sauce')        
        await loginButton.click()

        await browser.pause(500)
        await expect (browser).toHaveUrl('https://www.saucedemo.com/inventory.html');
        await expect (browser).toHaveTitle('Swag Labs');

        const addcart = await browser.$('//*[@id="add-to-cart-sauce-labs-backpack"]')
        const cart = await browser.$('//*[@id="shopping_cart_container"]/a')

              
        await addcart.click()      
        await cart.click()

        await browser.pause(10000)
        await expect (browser).toHaveUrl('https://www.saucedemo.com/cart.html');
        // await expect (browser).toHaveTitle('Swag Labs');
    });
});



// describe('Tugas Test Auto Saucedemo', () => {
//     it('Rizal - Login Success', async() => {
//         await browser.url("https://www.saucedemo.com/")
//         await browser.$("#user-name").addvalue("Rizal Darmawan")
//         await browser.$("#password").addvalue("password")
//         // await browser.$("#login-button").click()
//         await browser.pause(5000)
//     });
// });


// describe('Tugas Test Auto Saucedemo', () => {
//     it('Rizal - Login Success', async() => {
//         await browser.url("https://www.saucedemo.com/")
//         const usernametxt = await browser.$("#user-name").addvalue("Rizal Darmawan")
//         const passwordtxt = await browser.$("#password").addvalue("password")
//         const loginbtn = await browser.$("#login-button")
//         await browser.pause(5000)
//     });
// });