import { expect, type Locator, type Page } from '@playwright/test';

export class MyHomesPage {
    readonly page: Page;
    readonly homeButton: Locator;
    readonly myHomesButton: Locator;
    readonly tableListingRow: Locator;
    readonly tableListingDataName: Locator;
    readonly confirmDeleteButton: Locator;
    
    constructor(page: Page) {
        this.page = page;
        this.tableListingRow = page.getByTestId('table-listing-row');
        this.tableListingDataName = page.getByTestId('table-listing-data-name');
        this.confirmDeleteButton = page.getByTestId('confirm-delete-button');
    }

    async removeListingsFromMyHomes(...listingNames: string[]) {
        for(const listingName of listingNames) {
            await this.page.locator(`[data-testid="delete-button-${listingName}"]`)
                .click();
        }
    }

    async clickConfirmDeleteButton() {

    }
}