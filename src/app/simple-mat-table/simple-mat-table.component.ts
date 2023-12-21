import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Employee } from '../model/employee';
import { MatPaginator } from '@angular/material/paginator';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';

import { EmpFilter, filterOption } from '../model/empfilter';
import { MatSelectChange } from '@angular/material/select';
import { MatSort, Sort } from '@angular/material/sort';

@Component({
  selector: 'app-simple-mat-table',
  templateUrl: './simple-mat-table.component.html',
  styleUrls: ['./simple-mat-table.component.scss'],
})
export class SimpleMatTableComponent implements OnInit {
  displayedColumns: string[] = [
    'id',
    'firstname',
    'lastname',
    'email',
    'gender',
    'jobtitle',
    'department',
  ];

  EmpData: Employee[] = [
    {
      id: 1,
      firstname: 'Mellie',
      lastname: 'Gabbott',
      email: 'mgabbott0@indiatimes.com',
      gender: 'Female',
      department: 'Support',
      jobtitle: 'Support Analyst',
      project: { name: 'project1', id: 1 },
    },
    {
      id: 2,
      firstname: 'Yehudi',
      lastname: 'Ainsby',
      email: 'yainsby1@w3.org',
      gender: 'Female',
      department: 'Support',
      jobtitle: 'Support Analyst',
      project: { name: 'project2', id: 2 },
    },
    {
      id: 3,
      firstname: 'Noellyn',
      lastname: 'Primett',
      email: 'nprimett2@ning.com',
      gender: 'Female',
      department: 'Human Resources',
      jobtitle: 'Project Manager',
      project: { name: 'project3', id: 3 },
    },
    {
      id: 4,
      firstname: 'Stefanie',
      lastname: 'Yurenin',
      email: 'syurenin3@boston.com',
      gender: 'Female',
      department: 'Marketing',
      jobtitle: 'Senior officer',
      project: { name: 'project4', id: 4 },
    },
    {
      id: 5,
      firstname: 'Stormi',
      lastname: "O'Lunny",
      email: 'solunny4@patch.com',
      gender: 'Female',
      department: 'Engineering',
      jobtitle: 'Software Engineer',
      project: { name: 'project5', id: 5 },
    },
    {
      id: 6,
      firstname: 'Keelia',
      lastname: 'Giraudy',
      email: 'kgiraudy5@nba.com',
      gender: 'Male',
      department: 'Marketing',
      jobtitle: 'Senior officer',
      project: { name: 'project6', id: 6 },
    },
    {
      id: 7,
      firstname: 'Ikey',
      lastname: 'Laight',
      email: 'ilaight6@wiley.com',
      gender: 'Male',
      department: 'Support',
      jobtitle: 'Support Analyst',
      project: { name: 'project7', id: 7 },
    },
    {
      id: 8,
      firstname: 'Adrianna',
      lastname: 'Ruddom',
      email: 'aruddom7@seattletimes.com',
      gender: 'Male',
      department: 'Marketing',
      jobtitle: 'Senior officer',
      project: { name: 'project8', id: 8 },
    },
    {
      id: 9,
      firstname: 'Dionysus',
      lastname: 'McCory',
      email: 'dmccory8@ox.ac.uk',
      gender: 'Male',
      department: 'Engineering',
      jobtitle: 'Software Engineer',
      project: { name: 'project9', id: 9 },
    },
    {
      id: 10,
      firstname: 'Claybourne',
      lastname: 'Shellard',
      email: 'cshellard9@rediff.com',
      gender: 'Male',
      department: 'Engineering',
      jobtitle: 'Software Engineer',
      project: { name: 'project10', id: 10 },
    },
  ];

  dataSource = new MatTableDataSource(this.EmpData);
  dataSourceWithPageSize = new MatTableDataSource(this.EmpData);

  @ViewChild('paginator') paginator: MatPaginator;
  @ViewChild('paginatorPageSize') paginatorPageSize: MatPaginator;

  pageSizes = [3, 5, 7];

  constructor(private _http: HttpClient) {}

  postRequestCreator(): Observable<{}> {
    const header = new HttpHeaders();
    const other_header = header.append(
      'Authorization',
      'Bearer' +
        'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vZGV2c3BpY2V4cHJlc3Mua2FyZ28zNjB0ZWNoLmNvbS9hZG1pbi9hcGkvd2ViTG9naW4iLCJpYXQiOjE3MDMxNzQxODQsImV4cCI6MTcwMzE4MTM4NCwibmJmIjoxNzAzMTc0MTg0LCJqdGkiOiJOUjZ0UDBHZXlJOWxwQkMxIiwic3ViIjoiNjk4NyIsInBydiI6Ijg3ZTBhZjFlZjlmZDE1ODEyZmRlYzk3MTUzYTE0ZTBiMDQ3NTQ2YWEifQ.nmSLK_H8grPcXzo2NR-mYkfksQQ2Is_isg_mGg0RpJw'
    );
    let base_url =
      'https://devspicexpress.kargo360tech.com/admin/api/account/list';
    return this._http.post<{}>(base_url, {
      headers: other_header,
    });
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSourceWithPageSize.paginator = this.paginatorPageSize;
  }

  ngOnInit(): void {}
}
