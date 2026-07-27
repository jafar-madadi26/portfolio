import assert from "node:assert/strict";
import test from "node:test";
import {
  buildContactFormEndpoint,
  isSafeSiteUrl,
  normalizePhoneNumber,
} from "../lib/site-values.ts";

test("site URLs must use HTTPS, except for local development", () => {
  assert.equal(isSafeSiteUrl("https://example.com/portfolio"), true);
  assert.equal(isSafeSiteUrl("http://localhost:3000"), true);
  assert.equal(isSafeSiteUrl("http://example.com"), false);
  assert.equal(isSafeSiteUrl("not-a-url"), false);
});

test("Formspree endpoints are built only from valid form IDs", () => {
  assert.equal(buildContactFormEndpoint("abc_123-test"), "https://formspree.io/f/abc_123-test");
  assert.equal(buildContactFormEndpoint(""), null);
  assert.equal(buildContactFormEndpoint("../../unsafe"), null);
});

test("phone numbers are normalized for telephone links", () => {
  assert.equal(normalizePhoneNumber("+93 744 646 063"), "+93744646063");
});
