import { test, expect } from '@playwright/test';
import { MyHomesPage } from '../page-objects/pages/my-homes.page';
import { NavbarComponent } from '../page-objects/components/navbar.component';
import { apiBaseUrl } from '../../playwright.config';
import { myHome } from '../fixtures/my-home.fixture';

test.describe('My Homes page', () => {
  let myHomesPage: MyHomesPage;
  let navbarComponent: NavbarComponent
  test.beforeEach(async ({ page, request }) => {
    myHomesPage = new MyHomesPage(page);
    navbarComponent = new NavbarComponent(page);
    const response = await request.post(`${apiBaseUrl}/homes/mine`, {
      headers: {
        'Content-Type': 'application/json'
      },
      data: JSON.stringify(myHome)
    });
    await expect(response.status()).toEqual(200);
    await page.goto('./');
    await navbarComponent.clickMyHomesButton();
  });

  test('test deleting resource', async ({ page }) => {
    const myHomeListingsElements = await page.getByTestId('table-listing-row').all();
    const numberOfListings = myHomeListingsElements.length;
    await myHomesPage.removeListingsFromMyHomes('A113 Transitional Housing');

    expect(numberOfListings).toEqual(numberOfListings - 1);
  });
});