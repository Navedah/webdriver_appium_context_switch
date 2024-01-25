
// First this code will open your Native application (By default in App Automation, first it will open the Native App)

describe("Proverbial APK", () => {
  it("Changes color", async () => {
    var color = await $("id=color");
    await color.waitForDisplayed({ timeout: 30000 });
    await color.click();
    await color.click();
  });

  it("Changes text", async () => {
    var text = await $("id=Text");
    await text.waitForDisplayed({ timeout: 30000 });
    await text.click();

    await driver.closeApp();  // this will close the application


    await driver.startActivity("com.android.chrome" , "com.google.android.apps.chrome.Main");    // This will open the chrome browser and will treat it like an Application
   // await browser.pause(4000)

   await console.log(driver.getContexts()); //print all context


        // 4) Switch content to native App.
        await browser.switchContext('NATIVE_APP');

        await console.log("Context switched");

        const element1 = await $('//*[@resource-id="com.android.chrome:id/search_box_text"]'); // Here you can interact with your web application and perform actions. Replace 'yourElementId' with the actual ID of the element you want to click.
        await element1.setValue('https://www.lambdatest.com/capabilities-generator/');

        await browser.pause(4000);

        await browser.closeApp();   // This will again close the chrome application once you are done with all the actions

        await driver.startActivity("com.lambdatest.proverbial","com.lambdatest.proverbial.MainActivity"); // This will again open the Native application

    });

  it("Toast", async () => {                     // Here you can interact with the Native application and perform the actions
    var toast = await $("id=toast");
    await toast.waitForDisplayed({ timeout: 30000 });
    await toast.click();
  });

  it("Notification", async () => {  
    var nf = await $("id=notification");
    await nf.waitForDisplayed({ timeout: 30000 });
    await nf.click();
  });

  it("Geolocation", async () => {
    var geo = await $("id=geoLocation");
    await geo.waitForDisplayed({ timeout: 30000 });
    await geo.click();
    await driver.back();
  });

  it("SpeedTest", async () => {
    var st = await $("id=speedTest");
    await st.waitForDisplayed({ timeout: 30000 });
    await st.click();
    await browser.pause(10000);
    await driver.back();
  });

});
