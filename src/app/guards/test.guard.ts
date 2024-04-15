import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { CvService } from '../cv/services/cv.service';

export const testGuard: CanActivateFn = (route, state) => {
  const cvService = inject(CvService);
  return true;
};
