import { expect } from "chai";
import { Given, When, Then } from "@cucumber/cucumber";

import Adapter from "@cfaester/enzyme-adapter-react-18";
import Enzyme from "enzyme";

Enzyme.configure({ adapter: new Adapter() });

Given("the API endpoint is {string}", async (endpoint: string) => {});

When("I make a GET request to the endpoint", () => {});

Then("the response status code should be {int}", (statusCode: number) => {});

Then("the response should contain an array of data objects", () => {});

Then(
  "each data object should have the fields {string}, {string}, and {string}",
  (idField: string, titleField: string, descriptionField: string) => {}
);
