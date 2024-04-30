import { TestBed } from '@angular/core/testing';

import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { CvService } from './cv.service';
import { API } from 'src/config/api.config';

fdescribe('CvService', () => {
  let service: CvService;
  let http: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(CvService);
    http = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get Cvs from API', () => {
    /*
      Appelez la méthode testée qui envoie des requêtes HTTP.
      Récupérer les requêtes en attente
      Répondre à ces requêtes avec de fausses données.
      Vérifier le résultat de l'appel de la méthode
      Vérifier que toutes les requêtes ont été gérées
    */
    // 1- Appelez la méthode testée qui envoie des requêtes HTTP.
    service.getCvs().subscribe(
      // 4- Vérifier le résultat de l'appel de la méthode
      (cvs) => {
        expect(cvs).toBeTruthy();
        expect(cvs.length).toBe(2);
        expect(cvs[0].firstname).toBe('aymen');
      }
    );

    // 2- Récupérer les requêtes en attente
    const req = http.expectOne(API.cv);
    // 3- Répondre à ces requêtes avec de fausses données
    req.flush(service.getFakeCvs());
  })

  afterEach(() => {
    // 5-Vérifier que toutes les requêtes ont été gérées
    http.verify();
  })
});
