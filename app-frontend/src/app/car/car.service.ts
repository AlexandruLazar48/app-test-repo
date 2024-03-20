import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable, of } from 'rxjs';
import { Car } from './car';
import { environment } from 'src/environment/environment';

@Injectable({
    providedIn: 'root'
})
export class CarService {
    // private apiServerUrl = environment.apiBaseUrl;
    public cars: Car[] = [];
    public index: number = 0;
    
    constructor(private http: HttpClient) {}

    public getCars(): Observable<Car[]> {
        // return this.http.get<Car[]>(`${this.apiServerUrl}/car`);
        return of(this.cars)
    }

    public addCar(car: any) {
        // return this.http.post<any>(`${this.apiServerUrl}/car`, car);
        car.id = this.index;
        this.index = this.index + 1;
        this.cars.push(car);
    }

    public updateCar(car: any): Observable<any> {
        // return this.http.put<any>(`${this.apiServerUrl}/car`, car);
        let indexToUpdate = this.cars.findIndex(obj => obj.id === car.id);
        this.cars[indexToUpdate] = car;
        return of(this.cars[indexToUpdate]);
    }

    public deleteCar(carId: number): Observable<void> {
        // return this.http.delete<void>(`${this.apiServerUrl}/car/${carId}`);
        let indexToDelete = this.cars.findIndex(obj => obj.id === carId);
        console.log(indexToDelete);
        
        if(indexToDelete != -1) {
            this.cars.splice(indexToDelete, 1);
        }
        return of()
    
    }
}