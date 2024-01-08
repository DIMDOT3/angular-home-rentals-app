import { expect, type Locator, type Page } from '@playwright/test';

export class HousingLocationComponent {
    readonly page: Page;
    readonly location: Locator;
    readonly housingLocationComponent: Locator;
    
    constructor(page: Page) {
        this.page = page;
        this.location = page.getByTestId('housing-location-location');
        this.housingLocationComponent = page.locator('app-housing-location');
    }

    async clickLearnMoreLink(listingName: string) {
        await this.page.locator(`[data-testid="housing-location-learn-more-${listingName}"]`)
                .click();
    }

    async addListingsToMyHomes(...listingNames: string[]) {
        for(const listingName of listingNames) {
            await this.page.locator(`[data-testid="add-to-my-homes-button-${listingName}"]`)
                    .click();
        }
    }
}