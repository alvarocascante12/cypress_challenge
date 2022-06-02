import {  Given, Then, When } from "cypress-cucumber-preprocessor/steps";

//shared
import { suiteSetup } from "../../shared/suite_setup.js"

//navegation resources
import { checkList} from "../../resources/navegation_resources.js"


Given('A user enter to the page with {string}',(device) => {
  suiteSetup(device);
})

Then('A user finds the value in the list {string}',(value) => {
    checkList(value);
  })
