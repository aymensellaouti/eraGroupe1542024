import { Component, Inject, Input } from "@angular/core";
import { Cv } from "../model/cv";
import { LoggerService } from "../../services/logger.service";
import { ToastrService } from "ngx-toastr";
import { CvService } from "../services/cv.service";
import { EMPTY, Observable, catchError, map, of, share } from "rxjs";
import { TodoService } from "src/app/todo/service/todo.service";
@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css'],
})
export class CvComponent {
  @Input() defaultColor = 'red';
  color = '';
  cvs$: Observable<Cv[]> = this.cvService.getCvs().pipe(
    share(),
    catchError(() => {
      this.toastr.error(`
          Attention!! Les données sont fictives, problème avec le serveur.
          Veuillez contacter l'admin.`);
      return of(this.cvService.getFakeCvs());
    })
  );
  juniors$: Observable<Cv[]> = this.cvs$.pipe(
    map((cvs) => cvs.filter((cv) => cv.age < 40))
  );
  seniors$: Observable<Cv[]> = this.cvs$.pipe(
    map((cvs) => cvs.filter((cv) => cv.age >= 40))
  );
  selectedCv$ = this.cvService.selectCv$;
  /*   selectedCv: Cv | null = null; */
  date = new Date();
  constructor(
    private logger: LoggerService,
    private toastr: ToastrService,
    private cvService: CvService,
    private todoService: TodoService,
    @Inject('LOGGER') private loggers: LoggerService[]
  ) {
    this.logger.logger('je suis le cvComponent');
    this.toastr.info('Bienvenu dans notre CvTech');
    loggers.forEach((logger) => logger.logger('tester'));
  }
  ngOnInit() {
    this.color = this.defaultColor;
  }
}
