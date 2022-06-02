import { And, Given, Then, When } from "cypress-cucumber-preprocessor/steps";

//shared
import { suiteSetup } from "../../shared/suite_setup.js"

//navegation resources
import { clickbuttonDelete , confirmDelete , saveListofItems ,validateDeleteItem} from "../../resources/navegation_resources.js"



Given('A user enter to the page with {string}',(device) => {
    suiteSetup(device);
})

When('A user click delete',() => {
    saveListofItems();
    clickbuttonDelete();
})

And('A user confirm delete',() => {
    confirmDelete();
})

Then('A user delete a item',() => {
    validateDeleteItem();
})
