import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, map, throwError } from 'rxjs';
import { Circuit } from '../models/circuit';
@Injectable({
  providedIn: 'root'
})

//Service HTTP para manejar los circuitos de la aplicacion
export class CircuitosService {

  constructor(private http: HttpClient) { }
  private apiUrl = "https://canela-trekking-server-node.onrender.com/circuit"; 

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
