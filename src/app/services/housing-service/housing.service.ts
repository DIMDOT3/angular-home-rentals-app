import { Injectable } from '@angular/core';
import { HousingLocation } from '../../housing-location/housing-location.interface';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class HousingService {
  // url = 'https://home-rentals-api.onrender.com';
  private apiUrl: string | undefined;
  constructor() {
    this.apiUrl = environment.apiUrl
  }

  async getAllHousingLocations(): Promise<HousingLocation[]> {
    const data = await fetch(`${this.apiUrl}/homes`);
    return (await data.json()) ?? [];
  }

  async getHousingLocationById(
    _id: string,
  ): Promise<HousingLocation | undefined> {
    const data = await fetch(`${this.apiUrl}/homes/${_id}`);
    return (await data.json()) ?? {};
  }

  async addToMyHomesList(home: HousingLocation) {
    const response = await fetch(`${this.apiUrl}/homes/mine`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(home)
    });
  }

  async deleteFromMyHomesList(homeId: string) {
    const response = await fetch(`${this.apiUrl}/homes/mine/${homeId}`, {
      method: 'DELETE',
    });
    return response.status;
  }

  async getMyHomes() {
    const data = await fetch(`${this.apiUrl}/homes/mine`);
    return (await data.json()) ?? {};
  }

  submitApplication(firstName: string, lastName: string, email: string) {
    console.log(
      `Homes application received: firstName: ${firstName}, lastName: ${lastName}, email: ${email}.`,
    );
  }
}
