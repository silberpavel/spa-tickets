import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { SpaBodyComponent } from '../spa/spa-body/spa-body.component';
import { SpaHeaderComponent } from '../spa/spa-header/spa-header.component';
import { SpaContentComponent } from '../spa/spa-content/spa-content.component';
import { SpaFooterComponent } from '../spa/spa-footer/spa-footer.component';


@NgModule({
    imports: [CommonModule],
    declarations: [SpaBodyComponent, SpaHeaderComponent,SpaContentComponent, SpaFooterComponent],
    exports: [SpaBodyComponent]
})

export class SpaModule {
    
} 