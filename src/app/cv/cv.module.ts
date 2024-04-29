import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardProfilComponent } from '../components/card-profil/card-profil.component';
import { AddCvComponent } from './add-cv/add-cv.component';
import { CvCardComponent } from './cv-card/cv-card.component';
import { CvComponent } from './cv/cv.component';
import { DetailsCvComponent } from './details-cv/details-cv.component';
import { EmbaucheComponent } from './embauche/embauche.component';
import { ItemComponent } from './item/item.component';
import { ListComponent } from './list/list.component';
import { DefaultImagePipe } from './pipes/default-image.pipe';
import { AutocompleteComponent } from './autocomplete/autocomplete.component';
import { FormsModule } from '@angular/forms';
import { CvRoutingModule } from './cv-routing.module';



@NgModule({
  declarations: [
    AddCvComponent,
    CvComponent,
    ListComponent,
    ItemComponent,
    DetailsCvComponent,
    CvCardComponent,
    CardProfilComponent,
    EmbaucheComponent,
    DefaultImagePipe,
    AutocompleteComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    CvRoutingModule
  ],
})
export class CvModule {}
