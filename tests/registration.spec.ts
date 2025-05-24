import { test } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { ForumRegisterPage } from '../pages/ForumRegisterPage';

test('Verify error on registration with public email domain', async ({ page }) => {
  const home = new HomePage(page);
  const forum = new ForumRegisterPage(page);

  await home.navigateToForums();
  await forum.moveToRegister();
  await forum.fillRegistrationForm();
  await forum.submitForm();
  await forum.expectEmailDomainError();
});