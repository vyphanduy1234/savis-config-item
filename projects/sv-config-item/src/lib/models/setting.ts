import {
  INPUT_TYPE_CHECKBOX,
  DEFAULT_INPUT_TYPE_CHECKBOX_WIDTH,
  DEFAULT_INPUT_TYPE_CHECKBOX_HEIGHT,
  INPUT_TYPE_DATETIME,
  DEFAULT_INPUT_TYPE_DATE_WIDTH,
  DEFAULT_INPUT_TYPE_DATE_HEIGHT,
  DEFAULT_INPUT_TYPE_TEXT_WIDTH,
  DEFAULT_INPUT_TYPE_TEXT_HEIGHT,
  DEFAULT_SETTING_FONT_COLOR,
  DEFAULT_SETTING_FONT_TYPE,
  DEFAULT_SETTING_FONT_STYLE,
  DEFAULT_SETTING_FONT_SIZE,
  DEFAULT_SETTING_HINT_CHECKBOX_DATA,
  DEFAULT_SETTING_HINT_DATE_DATA,
  DEFAULT_SETTING_HINT_TEXT_DATA,
} from './global';

export class SettingModel {
  metaDataId: string;
  tempMetaDataId: string;
  type: string;
  isShow: Boolean;
  width: number;
  height: number;
  fontName: string;
  fontColor: string;
  fontSize: number;
  fontWeight: string;
  value: string | boolean | Date;
  llx: number;
  lly: number;


  constructor(leftToPdf: number, topToPdf: number, type: string) {
    this.metaDataId = '';
    this.tempMetaDataId = '';
    this.type = type;
    this.isShow = false;
    if (type == INPUT_TYPE_CHECKBOX) {
      this.width = DEFAULT_INPUT_TYPE_CHECKBOX_WIDTH;
      this.height = DEFAULT_INPUT_TYPE_CHECKBOX_HEIGHT;
      this.value = DEFAULT_SETTING_HINT_CHECKBOX_DATA;
    } else if (type == INPUT_TYPE_DATETIME) {
      this.width = DEFAULT_INPUT_TYPE_DATE_WIDTH;
      this.height = DEFAULT_INPUT_TYPE_DATE_HEIGHT;
      this.value = DEFAULT_SETTING_HINT_DATE_DATA;
    } else {
      this.width = DEFAULT_INPUT_TYPE_TEXT_WIDTH;
      this.height = DEFAULT_INPUT_TYPE_TEXT_HEIGHT;
      this.value = DEFAULT_SETTING_HINT_TEXT_DATA;
    }
    this.fontName = DEFAULT_SETTING_FONT_TYPE;
    this.fontColor = DEFAULT_SETTING_FONT_COLOR;
    this.fontWeight = DEFAULT_SETTING_FONT_STYLE;
    this.fontSize = DEFAULT_SETTING_FONT_SIZE;
    this.llx = leftToPdf;
    this.lly = topToPdf;
  }
}
