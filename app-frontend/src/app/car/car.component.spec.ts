import { HttpClient, HttpClientModule, HttpHandler } from "@angular/common/http";
import { CarService } from "./car.service"
import { TestBed } from '@angular/core/testing'
import { Car } from "./car";

describe('CarService', () => {
  let carService: CarService;
  const car: Car = {
    id: 1,
    code: 'asd-10',
    make: 'Dacia',
    model: 'Logan',
    value: 10000,
    yearOfFabrication: 2022,
    horsepower: 71
  }

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CarService, HttpHandler, HttpClient]
    });

    carService = TestBed.inject(CarService)
  });

  it('creates a service', () => {
    expect(carService).toBeTruthy();
  });

  describe('addCar', () => {
    it('should add a car', () => {
      carService.addCar(car)
      expect(carService.cars).toEqual([{
        id: 0, 
        code: 'asd-10',
        make: 'Dacia',
        model: 'Logan',
        value: 10000,
        yearOfFabrication: 2022,
        horsepower: 71
      }]);
    });

    describe('updateCar', () => {
      it('should update a car', () => {
        let updatedCar = car;
        updatedCar.horsepower = 90;
        
        carService.addCar(car)
        carService.updateCar(updatedCar)

        expect(carService.cars).toEqual([{
          id: 0, 
          code: 'asd-10',
          make: 'Dacia',
          model: 'Logan',
          value: 10000,
          yearOfFabrication: 2022,
          horsepower: 90
        }])
      });
    });

    describe('deleteCar', () => {
      it('should remove a car', () => {
        carService.addCar(car)
        expect(carService.cars.length).toEqual(1)

        carService.deleteCar(10)
        expect(carService.cars.length).toEqual(1)

        carService.deleteCar(0)
        expect(carService.cars.length).toEqual(0)
      });
    });
  });
});