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
  id: number;
  type: string;
  isShow: Boolean;
  width: number;
  height: number;
  fontType: string;
  fontColor: string;
  fontSize: number;
  fontStyle: string;
  hintData: string | boolean | Date;
  leftToWeb: number;
  topToWeb: number;
  leftToPdf: number;
  topToPdf: number;

  constructor(leftToPdf: number, topToPdf: number, type: string) {
    this.id = 0;
    this.type = type;
    this.isShow = false;
    if (type == INPUT_TYPE_CHECKBOX) {
      this.width = DEFAULT_INPUT_TYPE_CHECKBOX_WIDTH;
      this.height = DEFAULT_INPUT_TYPE_CHECKBOX_HEIGHT;
      this.hintData = DEFAULT_SETTING_HINT_CHECKBOX_DATA;
    } else if (type == INPUT_TYPE_DATETIME) {
      this.width = DEFAULT_INPUT_TYPE_DATE_WIDTH;
      this.height = DEFAULT_INPUT_TYPE_DATE_HEIGHT;
      this.hintData = DEFAULT_SETTING_HINT_DATE_DATA;
    } else {
      this.width = DEFAULT_INPUT_TYPE_TEXT_WIDTH;
      this.height = DEFAULT_INPUT_TYPE_TEXT_HEIGHT;
      this.hintData = DEFAULT_SETTING_HINT_TEXT_DATA;
    }
    this.fontType = DEFAULT_SETTING_FONT_TYPE;
    this.fontColor = DEFAULT_SETTING_FONT_COLOR;
    this.fontStyle = DEFAULT_SETTING_FONT_STYLE;
    this.fontSize = DEFAULT_SETTING_FONT_SIZE;
    this.leftToWeb = 0;
    this.topToWeb = 0;
    this.leftToPdf = leftToPdf;
    this.topToPdf = topToPdf;
  }
}
