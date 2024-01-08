import { test, expect } from '@playwright/test';
import { NavbarComponent } from '../page-objects/components/navbar.component';

test.describe('App navigation', () => {
  let navbarComponent: NavbarComponent;
  test.beforeEach(async ({ page }) => {
    navbarComponent = new NavbarComponent(page);
    await page.goto('./');
  });

  test('navigation with navbar', async ({ page }) => {
    await navbarComponent.clickMyHomesButton();
    await expect(page).toHaveURL('./my-homes');
    await navbarComponent.clickHomeButton();
    await expect(page).toHaveURL('./');
  });
});