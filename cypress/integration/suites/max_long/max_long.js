import {  Given, Then, When } from "cypress-cucumber-preprocessor/steps";

//shared
import { suiteSetup } from "../../shared/suite_setup.js"

//navegation resources
import { maxLongCharacters , clickbuttonUpdateItem , clickTextsbox , checkbuttonCreateItem , clickbuttonEdit , maxLongExcessCharacters} from "../../resources/navegation_resources.js"


Given('A user enter to the page with {string}',(device) => {
  suiteSetup(device);
})

When('enter a description with the max characters',() => {
  maxLongCharacters();
})

When('enter a description with excess characters',() => {
  clickbuttonEdit();
  clickTextsbox();
  maxLongExcessCharacters();
  clickbuttonUpdateItem();
})

Then('validate click button',() => {
  clickbuttonEdit();
})

Then('Check max long in description',() => {
  checkbuttonCreateItem();
})
