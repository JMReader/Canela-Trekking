import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Observable, catchError, map, throwError } from 'rxjs';
import { Circuit } from '../models/circuit';
@Injectable({
  providedIn: 'root'
})

//Service HTTP para manejar los circuitos de la aplicacion
export class CircuitosService {

  constructor(private http: HttpClient) { }
  private apiUrl = "https://canela-trekking-server-node.onrender.com/circuit/";

  /**
   * Fetches all circuits from the API and returns an Observable of Circuit objects.
   */

  getAllCircuits(): Observable<Circuit[]> {
    console.log("getAllCircuits");
    return this.http.get<Circuit[]>(this.apiUrl)
      .pipe(
        catchError(this.handleError), // Handle errors
        map(data => this.transformCircuits(data)) // Convert response data to Circuit objects
      );
  }

  getCircuit(circuitId: string | undefined): Observable<Circuit> {
    return this.http.get<Circuit>(this.apiUrl + circuitId)
      .pipe(
        catchError(this.handleError), // Handle errors
        map((circuit: any) => this.transformCircuits([circuit])[0]) //como tiene un solo circuito le pasamos el primero
      );
  }

  getCircuitsFiltered(filters: any): Observable<Circuit[]> {
    let params = new HttpParams();

    for (const key in filters) {
      if (filters[key]) {
        params = params.set(key, filters[key]);
        // console.log(filters[key]);
      }
    };      

    console.log(params);

    return this.http.get<Circuit[]>(this.apiUrl, { params }).pipe(
      catchError(this.handleError),
      map(data => this.transformCircuits(data)) 
    );
  }

  /**
  * Handles HTTP errors by returning an Observable error with a meaningful message.
  * @param error The HTTP error response object.
  */
  private handleError(error: HttpErrorResponse): Observable<never> {
    if (error.error instanceof ErrorEvent) {
      // Client-side error
      console.error('Client-side error:', error.error.message);
    } else {
      // Server-side error
      console.error('Server-side error:', error.status, error.message);
    }
    return throwError('An error occurred while fetching circuits.');
  }


  private transformCircuits(data: any): Circuit[] { // New function for data transformation
    return data.map((circuit: any) => {
      const photos = circuit.photos?.map((photo: { url: any; }) => photo.url) || []; // Extract photo URLs
      return {
        ...circuit, // Spread operator for other properties (prevents overwriting)
        photos
      };
    });
  }
}
