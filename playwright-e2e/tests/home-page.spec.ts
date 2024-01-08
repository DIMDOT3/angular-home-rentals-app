import { test, expect, type Page } from '@playwright/test';
import { HomePage } from '../page-objects/pages/home.page';
import { HousingLocationComponent } from '../page-objects/components/housing-location.component';
import { MyHomesPage } from '../page-objects/pages/my-homes.page';
import { NavbarComponent } from '../page-objects/components/navbar.component';
import { HousingLocation } from '../../src/app/housing-location/housing-location.interface';

test.describe('home page', () => {
  let navbarComponent: NavbarComponent;
  let homePage: HomePage;
  let housingLocationComponent: HousingLocationComponent;
  let myHomePage: MyHomesPage;
  test.beforeAll('set state', async ({ request }) => {
    // clean up my homes if any exists
    const response = await request.get('https://home-rentals-api.onrender.com/homes/mine');
    const responseBody: HousingLocation[] = await response.json();
    for await (const el of responseBody) {
      const response = await request.delete(`https://home-rentals-api.onrender.com/homes/mine/${el['_id']}`);
      expect(response.status()).toBe(202);
    }
  });

  test.beforeEach(async ({ page, request }) => {
    homePage = new HomePage(page);
    housingLocationComponent = new HousingLocationComponent(page);
    myHomePage = new MyHomesPage(page);
    navbarComponent = new NavbarComponent(page);

    await page.goto('./');
  });

  test('intially landing on the home page', async ({ page }) => {
    await expect(page).toHaveURL('./');
    await expect(page.locator('app-navbar')).toBeVisible();
  });

  test('filtering by location', async ({ request }) => {
    await expect(homePage.searchBar).toBeVisible();
    await expect(homePage.searchButton).toBeVisible();
    await homePage.filterByLocation('Chicago');
    const locationNames: string[] = await housingLocationComponent.location.allTextContents();
    for await (const locationName of locationNames) {
      expect(locationName).toContain('Chicago');
    }
  });

  test('adding listings to my homes', async({ page }) => {
    const listingName = 'Warm Beds Housing Support';
    await housingLocationComponent.addListingsToMyHomes(listingName);
    await navbarComponent.clickMyHomesButton();
    await expect(myHomePage.tableListingRow).toHaveCount(1);
    await expect(myHomePage.tableListingDataName).toHaveText(listingName);
  });
});