import React, { useEffect, useState } from 'react';
import './DepartmentTable.css';
import { RingLoader } from 'react-spinners';
import { Button } from 'react-bootstrap';
import { css } from '@emotion/react';
import { faPlus, faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';

const override = {
  display: "block",
  margin: "0 auto",
  marginTop:"45px",
  borderColor: "red",
};

const DepartmentTable = () => {
 

  const renderEditButton = (params) => {
    return <FontAwesomeIcon icon={faEdit} />;
  };

  const renderDeleteButton = (params) => {
    return <FontAwesomeIcon icon={faTrash} />;
  };

  const dstate = {
    departmentData: [],
    loading: true,
    columnDefs: [
      {
        headerName: 'Company',
        field: 'CompanyName',
        sortable: true,
      },
      {
        headerName: 'Department',
        field: 'DepartmentName',
        sortable: true,
      },
      {
        headerName: '',
        field: 'edit',
        filter: false,
        width: 30,
        cellRendererFramework: renderEditButton,
      },
      {
        headerName: '',
        field: 'delete',
        filter: false,
        width: 30,
        cellRendererFramework: renderDeleteButton,
      },
    ],
    rowData: [],
    defaultColDef: {
      resizable: true,
      width: 590,
      filter: 'agTextColumnFilter',
    },
    getRowHeight: function (params) {
      return 35;
    },
  };

  const departmentList = [
    {
      company: [
        {
          city: ['60d9e12bdf7ac20017b4d532'],
          _id: '5d0b79eed5e8661e00324d25',
          CompanyName: 'Home Automation',
          Address: '14A, Jhandewalan',
          PostalCode: 110004,
          Website: 'www.HomeAutomation.com',
          Email: 'info@HomeAutomation.com',
          ContactPerson: 'Mithun',
          ContactNo: '67464837435',
          FaxNo: '444738',
          PanNo: '144472',
          GSTNo: 'GST6337',
          CINNo: 'CIN505021',
          __v: 0,
        },
      ],
      _id: '5cfe478455995b1930f25a75',
      DepartmentName: 'Development sfsdf',
      DepartmentID: 4,
      __v: 0,
    },
    {
      company: [
        {
          city: ['60d9e12bdf7ac20017b4d532'],
          _id: '5d0b79eed5e8661e00324d25',
          CompanyName: 'Home Automation',
          Address: '14A, Jhandewalan',
          PostalCode: 110004,
          Website: 'www.HomeAutomation.com',
          Email: 'info@HomeAutomation.com',
          ContactPerson: 'Mithun',
          ContactNo: '67464837435',
          FaxNo: '444738',
          PanNo: '144472',
          GSTNo: 'GST6337',
          CINNo: 'CIN505021',
          __v: 0,
        },
      ],
      _id: '5cff8d5c74ed3d16b0ec43f5',
      DepartmentName: 'Programmer ',
      DepartmentID: 6,
      __v: 0,
    },
    {
      company: [
        {
          city: ['60d9e31fdf7ac20017b4d535'],
          _id: '5fd98252d57201001783e409',
          CompanyName: '3D Printing',
          Address: 'Plot No 104, Gurmandi, Rohtak Road',
          PostalCode: 131001,
          Website: '3dPrinting.com',
          Email: 'info@3dPrinting.com',
          ContactPerson: 'Ricky',
          ContactNo: '123456777',
          FaxNo: '23456',
          PanNo: '123455',
          GSTNo: 'GST312050',
          CINNo: 'CIN540302',
          __v: 0,
        },
      ],
      _id: '60279c753bb1ef00175ea998',
      DepartmentName: 'Department-132',
      DepartmentID: 25,
      __v: 0,
    },
    {
      company: [
        {
          city: ['60d9e12bdf7ac20017b4d532'],
          _id: '5d0b79eed5e8661e00324d25',
          CompanyName: 'Home Automation',
          Address: '14A, Jhandewalan',
          PostalCode: 110004,
          Website: 'www.HomeAutomation.com',
          Email: 'info@HomeAutomation.com',
          ContactPerson: 'Mithun',
          ContactNo: '67464837435',
          FaxNo: '444738',
          PanNo: '144472',
          GSTNo: 'GST6337',
          CINNo: 'CIN505021',
          __v: 0,
        },
      ],
      _id: '602ddedcdbd45f0017bcc224',
      DepartmentName: 'Department 10',
      DepartmentID: 28,
      __v: 0,
    },
    {
      company: [
        {
          city: ['60d9e31fdf7ac20017b4d535'],
          _id: '5cfe2cca1c638641840eb98b',
          CompanyName: 'BLIV',
          Address: '32B, karol Bagh',
          PostalCode: 110006,
          Website: 'www.SolarProject.com',
          Email: 'info@SolarProject.com',
          ContactPerson: 'Himanshu',
          ContactNo: '7975305659',
          FaxNo: '35534',
          PanNo: '43545',
          GSTNo: 'GST376378',
          CINNo: 'CIN525638',
          __v: 0,
        },
      ],
      _id: '602df75092f1f40017e32109',
      DepartmentName: 'Designer',
      DepartmentID: 31,
      __v: 0,
    },
    {
      company: [
        {
          city: ['60d9e12bdf7ac20017b4d532'],
          _id: '5d0b79eed5e8661e00324d25',
          CompanyName: 'Home Automation',
          Address: '14A, Jhandewalan',
          PostalCode: 110004,
          Website: 'www.HomeAutomation.com',
          Email: 'info@HomeAutomation.com',
          ContactPerson: 'Mithun',
          ContactNo: '67464837435',
          FaxNo: '444738',
          PanNo: '144472',
          GSTNo: 'GST6337',
          CINNo: 'CIN505021',
          __v: 0,
        },
      ],
      _id: '60597488f999bc0017bb9252',
      DepartmentName: 'Visual Dept',
      DepartmentID: 33,
      __v: 0,
    },
    {
      company: [
        {
          city: ['60d9e31fdf7ac20017b4d535'],
          _id: '5cfe2cca1c638641840eb98b',
          CompanyName: 'BLIV',
          Address: '32B, karol Bagh',
          PostalCode: 110006,
          Website: 'www.SolarProject.com',
          Email: 'info@SolarProject.com',
          ContactPerson: 'Himanshu',
          ContactNo: '7975305659',
          FaxNo: '35534',
          PanNo: '43545',
          GSTNo: 'GST376378',
          CINNo: 'CIN525638',
          __v: 0,
        },
      ],
      _id: '60a3eb114e36570017c0c843',
      DepartmentName: 'Graphic',
      DepartmentID: 42,
      __v: 0,
    },
    {
      company: [
        {
          city: ['60d9e12bdf7ac20017b4d532'],
          _id: '5f299e920b01ee00174fb4ae',
          CompanyName: 'Food Blogging',
          Address: '45C, Yamuna Nagar',
          PostalCode: 110053,
          Website: 'www.FoodBlogging.com',
          Email: 'info@FoodBlogging.com',
          ContactPerson: 'Bhavana',
          ContactNo: '74568372428',
          FaxNo: '435556',
          PanNo: '345435',
          GSTNo: 'GST345014',
          CINNo: 'CIN456100',
          __v: 0,
        },
      ],
      _id: '60b4dd6d6d05f50017bf1942',
      DepartmentName: 'Department 5',
      DepartmentID: 46,
      __v: 0,
    },
    {
      company: [
        {
          city: ['60d9e12bdf7ac20017b4d532'],
          _id: '5f299e920b01ee00174fb4ae',
          CompanyName: 'Food Blogging',
          Address: '45C, Yamuna Nagar',
          PostalCode: 110053,
          Website: 'www.FoodBlogging.com',
          Email: 'info@FoodBlogging.com',
          ContactPerson: 'Bhavana',
          ContactNo: '74568372428',
          FaxNo: '435556',
          PanNo: '345435',
          GSTNo: 'GST345014',
          CINNo: 'CIN456100',
          __v: 0,
        },
      ],
      _id: '60c1b7bb318b0f0017a6b23a',
      DepartmentName: 'Rama lakshmi',
      DepartmentID: 47,
      __v: 0,
    },
    {
      company: [
        {
          city: ['60d9e31fdf7ac20017b4d535'],
          _id: '5fd98252d57201001783e409',
          CompanyName: '3D Printing',
          Address: 'Plot No 104, Gurmandi, Rohtak Road',
          PostalCode: 131001,
          Website: '3dPrinting.com',
          Email: 'info@3dPrinting.com',
          ContactPerson: 'Ricky',
          ContactNo: '123456777',
          FaxNo: '23456',
          PanNo: '123455',
          GSTNo: 'GST312050',
          CINNo: 'CIN540302',
          __v: 0,
        },
      ],
      _id: '60d3428749f5dd001759326b',
      DepartmentName: 'ramalaksh',
      DepartmentID: 51,
      __v: 0,
    },
    {
      company: [
        {
          city: ['60d9b626df7ac20017b4d525'],
          _id: '60d9b68bdf7ac20017b4d527',
          CompanyName: 'Network Marketing',
          Address: '46 Gandhi Chowk',
          PostalCode: 251001,
          Website: 'NetworkMarketing.com',
          Email: 'info@NetworkMarketing.com',
          ContactPerson: 'Vivek',
          ContactNo: '999069484',
          FaxNo: '901830561',
          PanNo: 'ACWP555014',
          GSTNo: 'GST102934',
          CINNo: 'CIN546030',
          __v: 0,
        },
      ],
      _id: '60d9b7cbdf7ac20017b4d52a',
      DepartmentName: 'Sales',
      DepartmentID: 52,
      __v: 0,
    },
    {
      company: [
        {
          city: ['60d9e31fdf7ac20017b4d535'],
          _id: '5fd98252d57201001783e409',
          CompanyName: '3D Printing',
          Address: 'Plot No 104, Gurmandi, Rohtak Road',
          PostalCode: 131001,
          Website: '3dPrinting.com',
          Email: 'info@3dPrinting.com',
          ContactPerson: 'Ricky',
          ContactNo: '123456777',
          FaxNo: '23456',
          PanNo: '123455',
          GSTNo: 'GST312050',
          CINNo: 'CIN540302',
          __v: 0,
        },
      ],
      _id: '60d9e7b0df7ac20017b4d538',
      DepartmentName: 'FIlament',
      DepartmentID: 53,
      __v: 0,
    },
  ];

  const [departments, setdepartments] = useState(dstate);

  useEffect(() => {
    let departmentObj = [];
    let rowDataT = [];

    departmentObj = departmentList;
    setdepartments({ ...dstate, loading: true, positionData: departmentList });
    rowDataT = [];
    departmentObj.map((data) => {
      let temp = {
        data,
        CompanyName: data['company'][0]['CompanyName'],
        DepartmentName: data['DepartmentName'],
      };

      rowDataT.push(temp);
    });
    setdepartments({ ...dstate, loading: false, rowData: rowDataT });
  }, []);

  return (
    <div id="table-outer-div-scroll">
      <h2 id="role-title">Department Details</h2>
      <Button variant="primary" id="add-button">
        <FontAwesomeIcon icon={faPlus} id="plus-icon" />
        Add
      </Button>

      <div id="clear-both" />
      {!departments.loading &&
      departments.rowData &&
      departments.rowData.length ? (
        <div id="table-div" className="ag-theme-balham">
          <AgGridReact
            columnDefs={departments.columnDefs}
            defaultColDef={departments.defaultColDef}
            columnTypes={departments.columnTypes}
            rowData={departments.rowData}
            pagination={true}
            paginationPageSize={10}
            getRowHeight={departments.getRowHeight}
          />
        </div>
      ) : (
        <div id="loading-bar">
          <RingLoader
             cssOverride={override}
            sizeUnit={'px'}
            size={50}
            color={'#0000ff'}
            loading={departments.loading}
          />
        </div>
      )}
    </div>
  );
};

export default DepartmentTable;
