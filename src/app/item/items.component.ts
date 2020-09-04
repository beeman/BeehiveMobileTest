import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

import { Item } from "./item";
import { ItemService } from "./item.service";

@Component({
    selector: "ns-items",
    templateUrl: "./items.component.html",
})
export class ItemsComponent implements OnInit {
    items: Array<Item>;
    uptime: Observable<number>;
    constructor(private itemService: ItemService) {
        this.uptime = this.itemService
            .getUptime()
            .pipe(map((res) => res.data.uptime));
    }

    ngOnInit(): void {
        this.items = this.itemService.getItems();
    }
}
