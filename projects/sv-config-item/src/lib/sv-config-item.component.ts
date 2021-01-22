import { INPUT_TYPE_CHECKBOX } from './models/global';
import { SettingComponent } from './setting/setting.component';
import { SettingModel } from './models/setting';
import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'sv-config-item',
  templateUrl: './sv-config-item.component.html',
  styleUrls: ['./sv-config-item.component.css'],
})
export class SvConfigItemComponent implements OnInit, AfterViewInit {
  title = 'example';

  ngOnInit(): void {}
  ngAfterViewInit(): void {}

  isMoving: Boolean = false;

  @Input() bound: HTMLElement;
  @Input() setting: SettingModel;
  @Input() position: number;

  @Output() onItemDragBegin = new EventEmitter<SettingModel>();
  @Output() onItemDragStop = new EventEmitter<SettingModel>();
  @Output() onItemResizeStop = new EventEmitter<SettingModel>();
  @Output() onItemSettingUpdate = new EventEmitter<SettingModel>();
  @Output() onItemMoving = new EventEmitter<SettingModel>();
  @Output() onRemove = new EventEmitter<number>();

  @ViewChild(SettingComponent, { static: false }) itemModal;
  @ViewChild('mydrag') el: ElementRef;

  onMoving(event) {
    this.onItemMoving.emit(event);
  }

  onMoveEnd(event) {
    this.setting.leftToPdf = event.x;
    this.setting.topToPdf = event.y;
    this.onItemSettingUpdate.emit(this.setting);
  }

  onDragStart(event) {
    this.isMoving = true;
    this.onItemDragBegin.emit();
  }

  onDragStop(event) {
    this.isMoving = false;
    this.onItemDragStop.emit();
  }

  onResizeStop(event) {
    this.setting.width = event.size.width;
    this.setting.height = event.size.height;
    this.onItemResizeStop.emit(event);
    this.onItemSettingUpdate.emit(this.setting);
  }

  onResizing(event){
    this.setting.fontSize = event.size.height;
  }

  openSetting() {
    this.itemModal.prepareCurrentSetting(this.setting);
  }

  remove() {
    this.onRemove.emit(this.position);
  }

  onTextBlur() {
    this.onItemSettingUpdate.emit(this.setting);
  }

  applySetting(setting) {
    this.setting = setting;
    this.onItemSettingUpdate.emit(this.setting);
  }
}




