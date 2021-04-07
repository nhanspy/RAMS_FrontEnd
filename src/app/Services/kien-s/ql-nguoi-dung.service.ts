import {Nguoidung} from '../../kien/model/Nguoidung';
import {getDeclaredPropertyNames} from 'codelyzer/util/classDeclarationUtils';
import {Injectable} from '@angular/core';

export class QlNguoiDungService {
  // tslint:disable-next-line:typedef
  public getNguoidungs(){
    let nguoidungs: Nguoidung[];
    // @ts-ignore
    nguoidungs = [
      new Nguoidung( 'Trần Viết Nhân', 'nhan123', '123456', '0123456789', 'Nam' ),
      new Nguoidung( 'Lê Thị Thảo', 'thao123', '123456', '0123456789', 'Nữ' ),
      new Nguoidung( 'Nguyễn Viết Trọng', 'viettrong', '123456', '0123456789', 'Nam' ),
      new Nguoidung( 'Vũ Trung Kiên', 'trungkien', '123456', '0123456789', 'Nam' )
    ];
    return nguoidungs;
  }
}

