import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { AboutComponent } from './about/about.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([
            { path: '', component: AboutComponent },
        ])
    ],
    declarations: [AboutComponent]
})
export class AboutModule {}
