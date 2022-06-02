import { And, Given, Then, When } from "cypress-cucumber-preprocessor/steps";
import  'cypress-file-upload' ;

//shared
import { suiteSetup } from "../../shared/suite_setup.js"
import { uploadImage } from "../../shared/upload_image.js"

//navegation resources
import { clickTextsbox, clickbuttonCreateItem , validateCreateItem , clickSelectFile , validatePopat} from "../../resources/navegation_resources.js"


Given('A user enter to the page with {string}',(device) => {
    suiteSetup(device);
})

When('A user upload a image {string}',(image) => {
    uploadImage(image);
})

And('A user enter a description',() => {
    clickTextsbox();
})

And('A user click create item',() => {
    clickbuttonCreateItem();
})

And('A user delete the imagen',() => {
    clickSelectFile();
})

Then('A user created an item',() => {
    validateCreateItem();
})

Then('the popat appears',() => {
    validatePopat();
})
