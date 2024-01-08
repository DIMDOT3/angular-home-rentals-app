import { expect, type Locator, type Page } from '@playwright/test';

export class NavbarComponent {
    readonly page: Page;
    readonly homeButton: Locator;
    readonly myHomesButton: Locator;
    
    constructor(page: Page) {
        this.page = page;
        this.homeButton = page.locator('[data-testid="take-me-home-nav"]');
        this.myHomesButton = page.locator('[data-testid="my-homes-nav"]');
    }

    async clickHomeButton() {
        await this.homeButton.click();
    }

    async clickMyHomesButton() {
        await this.myHomesButton.click();
    }
}