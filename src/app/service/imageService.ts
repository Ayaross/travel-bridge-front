import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ImageService {
  //private apiUrl = 'http://localhost:9696/api/image/scan'; // Remplacez par l'URL réelle de l'API
  private apiUrl = 'https://travel-bridge-identity-production.up.railway.app/api/image/scan'

  constructor(private http: HttpClient) {}

  scanImage(payload: { image: string; imageBack: string }): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<any>(this.apiUrl, payload, { headers });
  }
}
