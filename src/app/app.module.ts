import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import {
    NativeScriptHttpClientModule,
    NativeScriptModule,
} from "@nativescript/angular";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { GraphQLModule } from "./graphql.module";
import { ItemsComponent } from "./item/items.component";
import { ItemDetailComponent } from "./item/item-detail.component";

@NgModule({
    bootstrap: [AppComponent],
    imports: [
        NativeScriptModule,
        NativeScriptHttpClientModule,
        GraphQLModule,
        AppRoutingModule,
    ],
    declarations: [AppComponent, ItemsComponent, ItemDetailComponent],
    providers: [],
    schemas: [NO_ERRORS_SCHEMA],
})
export class AppModule {}
