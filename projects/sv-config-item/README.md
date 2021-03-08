# Savis template configuration item

## table of content

 **1. Getting started
 2. Latest update
 3. Installation
 4. Implementation
 5. API
 6. Event
 7. Sample**

### 1. Getting started
sv-config-item là thư viện hỗ trợ config tọa độ các trường thông tin có trong file pdf để hỗ trợ cho việc fill thông tin vào file pdf. 

### 2. Latest update

> version @0.0.4

### 3. Installation
#### bước 1 : Cài đặt thư viện `angular2-draggable`
    npm i angular2-draggable
#### bước 2 : Thêm đường dẫn bên dưới vào file `angular.json`
    "styles": [
	    "node_modules/angular2-draggable/css/resizable.min.css"
    ]
#### bước 3 : Cài đặt thư viện `ant-design angular` ( nếu chưa có theme )

    ng add ng-zorro-antd
#### bước 4: Cài đặt tư viện `sv-config-item`

    npm i sv-config-item

### 4. Implementation

#### Bước 1: Thêm module `sv-config-item`

    import {SvConfigItemModule} from 'sv-config-item'
    
    imports: [
       SvConfigItemModule
      ],
#### Bước 2: Sử dụng component `sv-config-item`
		

ví dụ:

    <sv-config-item
        [bound]="con"
        *ngFor="let itemSetting of listItemSetting; let position = index"
        [setting]="itemSetting"
        [position]="position"
        (onRemove)="onItemRemove($event)"
        (onItemSettingUpdate)="onItemSettingUpdate($event)"
        (onItemClick)="onItemClick($event)"
      ></sv-config-item>

### API
#### Directive

| Input  | Type  |  Default |  Description |
|---|---|---|---|
| bound  | HtmlElement  | null  | Pdf file container div  |
|  setting | SettingModel  | null  | SettingModel để config cho item trên template  |
| position  | number  | null  | vị trí của item trong listItem của file template  |
| BackgroundColor| string  | #ffb700  | Màu sắc của item config  |

SettingModel  ->  `import {SettingModel} from 'sv-config-item'`
global  -> `import {global} from 'sv-config-item'`

### Event


| Output  | $event  |Description   |
|---|---|---|
| onItemDragBegin  | SettingModel  |emit khi item bắt đầu drag   |
| onItemDragStop  | SettingModel  | emit khi item dừng drag  |
|  onItemResizeStop | SettingModel  | emit khi item dừng resize|
| onItemSettingUpdate  | SettingModel  |emit khi item dừng drag, resize, setting trong popup xong   |
| onItemMoving  |  SettingModel | emit khi item đang drag  |
| onRemove| position  |  emit khi item bị xóa bằng nút delete |
| onItemClick  |  SettingModel | emit khi click vào item  |
### 3. Sample
source code github https://github.com/vyphanduy1234/savis-config-item

