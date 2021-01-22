import { ItemSettingService } from './services/item-setting.service';

import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { SettingModel } from './models/setting';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'example';

  ngOnInit(): void {
    this.loadTemplateData();
  }

  loadTemplateData() {
    this._itemSettingService.getAllTemplateData().subscribe((data) => {
      this.listItemSetting = data;
    });
  }

  ngAfterViewInit(): void {}
  listItemSetting: SettingModel[] = [];
  @ViewChild('con') pdfViewer: ElementRef;

  addItem(type) {
    let rect = this.pdfViewer.nativeElement.getBoundingClientRect();
    let newItem = new SettingModel(rect.x, rect.y, type)
    this._itemSettingService.addTemplate(newItem).subscribe((newComponent) => {
      this.listItemSetting.push(newComponent);
    });
  }

  constructor(private _itemSettingService: ItemSettingService) {}

  onItemRemove(position) {

    let deletedItem = this.listItemSetting.splice(position, 1);
    console.log(deletedItem);
    this._itemSettingService
      .removeTemplate(deletedItem[0].id)
      .subscribe((data) => console.log(data));
  }

  onItemSettingUpdate(setting) {
    this.listItemSetting.forEach((item) => {
      if (item.id === setting.id) {
        Object.assign(item, setting);
        this._itemSettingService.updateTemplate(setting).subscribe();
      }
    });
  }
}
