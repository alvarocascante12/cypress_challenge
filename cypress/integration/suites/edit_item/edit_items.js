import { And, Given, Then, When } from "cypress-cucumber-preprocessor/steps";
import  'cypress-file-upload' ;
//shared
import { suiteSetup } from "../../shared/suite_setup.js"
import { uploadImage } from "../../shared/upload_image.js"
//navegation resources
import { clickbuttonEdit , clickTextsbox , clickbuttonUpdateItem , saveTextDescription , validateTextUpdateDescription ,validateUpdateImage} from "../../resources/navegation_resources.js"


Given('A user enter to the page with {string}',(device) => {
  suiteSetup(device);
})

When('click edit',() => {
  clickbuttonEdit();

})

And('edit a description',() => {
  saveTextDescription();
  clickTextsbox();

})

And('click update',() => {
  clickbuttonUpdateItem();
})

And('edit image {string}',(image) => {
  uploadImage(image);
})

Then('update item',() => {
  validateTextUpdateDescription();
})

Then('validate update of the image {string}',(imagen) => {
  validateUpdateImage(imagen);
})
