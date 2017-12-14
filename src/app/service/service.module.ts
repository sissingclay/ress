import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { ServiceComponent } from './service/service.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([
            { path: '', component: ServiceComponent },
        ])
    ],
    declarations: [ServiceComponent]
})
export class ServiceModule {}
