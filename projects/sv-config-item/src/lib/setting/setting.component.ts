import {
  DEFAULT_SETTING_POSITION_X,
  DEFAULT_SETTING_POSITION_Y,
} from './../models/global';
import { SettingModel } from './../models/setting';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { NzMarks } from 'ng-zorro-antd/slider';
import { DEFAULT_SETTING_TYPE } from '../models/global';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
})
export class SettingComponent implements OnInit {
  @Input() isVisible = false;
  @Output() onApplySetting = new EventEmitter<any>();
  ngOnInit(): void {}
  disabledSwitch = false;

  constructor() {}

  handleOk(): void {
    console.log(this.settingController);
    this.isVisible = !this.isVisible;
    this.onApplySetting.emit(this.settingController);
    this.disabledSwitch = false;
  }

  handleCancel(): void {
    console.log('Button cancel clicked!');
    this.isVisible = !this.isVisible;
    this.disabledSwitch = false;
  }

  prepareCurrentSetting(currentSetting) {
    this.isVisible = true;
    this.settingController = currentSetting;
    this.marksT = {
      0: 'Top',
      300: `${this.settingController.topToPdf}`,
    };

    this.marksL = {
      0: 'Left',
      300: `${this.settingController.leftToPdf}`,
    };

    this.marksH = {
      0: 'Height',
      300: `${this.settingController.height}`,
    };

    this.marksW = {
      0: 'Width',
      300: `${this.settingController.width}`,
    };
  }

  onSliderChange(type) {
    switch (type) {
      case 't':
        this.marksT = {
          0: 'Top',
          300: `${this.settingController.topToPdf}`,
        };
      case 'l':
        this.marksL = {
          0: 'Left',
          300: `${this.settingController.leftToPdf}`,
        };
      case 'h':
        this.marksH = {
          0: 'Height',
          300: `${this.settingController.height}`,
        };
      case 'w':
        this.marksW = {
          0: 'Width',
          300: `${this.settingController.width}`,
        };
    }
  }

  marksT: NzMarks = {
    0: 'Top',
  };
  marksL: NzMarks = {
    0: 'Left',
  };
  marksW: NzMarks = {
    0: 'Width',
  };
  marksH: NzMarks = {
    0: 'Height',
  };

  fontController: any = {
    selectedFont: '',
    fontData: ['san-serif', 'tahoma', 'fantasy'],
    fontStyle: ['normal', 'oblique', 'italic'],
    fontChange: () => {},
  };
  top = 10;

  settingController: SettingModel = new SettingModel(
    DEFAULT_SETTING_POSITION_X,
    DEFAULT_SETTING_POSITION_Y,
    DEFAULT_SETTING_TYPE
  );
}
