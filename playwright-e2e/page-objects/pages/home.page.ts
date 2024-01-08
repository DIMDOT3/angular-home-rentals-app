import { expect, type Locator, type Page } from '@playwright/test';

export class HomePage {
    readonly page: Page;
    readonly searchBar: Locator;
    readonly searchButton: Locator;
    
    constructor(page: Page) {
        this.page = page;
        this.searchBar = page.getByTestId('search-filter-input');
        // this.searchButton = page.locator('[data-testid="search-button"]');
        this.searchButton = page.getByTestId('search-button');

    }

    async filterByLocation(location: string) {
        await this.searchBar.click();
        await this.searchBar.fill(location);
        await this.searchButton.click();
    }
}