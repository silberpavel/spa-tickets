import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';


@NgModule({
    imports: [CommonModule],
    declarations: [SpaBodyComponent, SpaContentComponent,SpaHeaderComponent, SpaFooterComponent],
    exports: [SpaBodyComponent]
})

export class SpaModule {
    
}