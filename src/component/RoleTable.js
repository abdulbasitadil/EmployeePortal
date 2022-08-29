import React, { useEffect, useState  } from 'react';
import { css } from '@emotion/react';
import { faPlus, faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';
import { RingLoader } from 'react-spinners';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './RoleTable.css';

import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';

const override = {
  display: "block",
  margin: "0 auto",
  marginTop:"45px",
  borderColor: "red",
};

const RoleTable = () => {
  const rolesList = [
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
      _id: '5d09c189fcd3dc272c3fe5f9',
      RoleName: 'sale',
      RoleID: 24,
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
      _id: '5d222bbbb7ecae3820fb6e5c',
      RoleName: 'senior Team Manager',
      RoleID: 29,
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
      _id: '5ed23d1090a5ae001734d2bf',
      RoleName: 'Developer',
      RoleID: 33,
      __v: 0,
    },
    {
      company: [
        {
          city: ['610d90c29312f80017e7b5a0'],
          _id: '610d91439312f80017e7b5a6',
          CompanyName: 'ETF',
          Address: 'adresa',
          PostalCode: 71000,
          Website: 'sveozdravlju.github.io',
          Email: 'edin@gmail.com',
          ContactPerson: 'nedzla',
          ContactNo: '+387123456',
          FaxNo: '12345',
          PanNo: '12344556778443',
          GSTNo: '123',
          CINNo: 'CIN123456',
          __v: 0,
        },
      ],
      _id: '5ef0a32a2f206000177853e7',
      RoleName: 'Manager',
      RoleID: 38,
      __v: 0,
    },
    {
      company: [
        {
          city: ['610d90c29312f80017e7b5a0'],
          _id: '610d91439312f80017e7b5a6',
          CompanyName: 'ETF',
          Address: 'adresa',
          PostalCode: 71000,
          Website: 'sveozdravlju.github.io',
          Email: 'edin@gmail.com',
          ContactPerson: 'nedzla',
          ContactNo: '+387123456',
          FaxNo: '12345',
          PanNo: '12344556778443',
          GSTNo: '123',
          CINNo: 'CIN123456',
          __v: 0,
        },
      ],
      _id: '5f4c0c62dd040400173d8a4c',
      RoleName: 'CEO',
      RoleID: 55,
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
      _id: '6028e77428c8ae00177be77b',
      RoleName: 'foodie',
      RoleID: 83,
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
      _id: '6038a36eecf96600179fa2d1',
      RoleName: 'hr',
      RoleID: 88,
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
      _id: '6038e49630c29a0017f3acfa',
      RoleName: 'admin',
      RoleID: 89,
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
      _id: '603e10b6bee8160017ad8fad',
      RoleName: 'Pro',
      RoleID: 93,
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
      _id: '604d31ec5b19cd0017d0a8f6',
      RoleName: 'marke',
      RoleID: 99,
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
      _id: '605b26a748fbe8001759f68f',
      RoleName: 'vvvvv',
      RoleID: 103,
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
      _id: '60881c35898a7a001745c08a',
      RoleName: 'abhi',
      RoleID: 124,
      __v: 0,
    },
  ];

  const renderEditButton = (params) => {
    return <FontAwesomeIcon icon={faEdit} />;
  };

  const renderDeleteButton = (params) => {
    return <FontAwesomeIcon icon={faTrash} />;
  };

  const rstate = {
    roleData: [],
    loading: true,
    columnDefs: [
      {
        headerName: 'Company Name',
        field: 'CompanyName',
        sortable: true,
      },

      {
        headerName: 'Role',
        field: 'RoleName',
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

  const [roleState, setroleState] = useState(rstate);

  useEffect(() => {
    let roleObj = [];
    let rowDataT = [];
    setroleState({ ...roleState, loading: true });
    roleObj = rolesList;
    rowDataT = [];
    roleObj.map((data) => {
      let temp = {
        data,
        CompanyName: data['company'][0]['CompanyName'],
        RoleName: data['RoleName'],
      };

      rowDataT.push(temp);
    });
    setroleState({
      ...roleState,
      loading: false,
      roleData: rolesList,
      rowData: rowDataT,
    });
    console.log(roleState);
  }, []);

  return (
    <div id="table-outer-div-scroll">
      <h2 id="role-title">Role Details</h2>

      <Button variant="primary" id="add-button">
        <FontAwesomeIcon icon={faPlus} id="plus-icon" />
        Add
      </Button>
      <div id="clear-both" />
      {!roleState.loading && roleState.rowData && roleState.rowData.length ? (
        <div id="table-div" className="ag-theme-balham">
          <AgGridReact
            columnDefs={roleState.columnDefs}
            defaultColDef={roleState.defaultColDef}
            columnTypes={roleState.columnTypes}
            rowData={roleState.rowData}
            pagination={true}
            paginationPageSize={10}
            getRowHeight={roleState.getRowHeight}
          />
        </div>
      ) : (
        <div id="loading-bar">
          <RingLoader
            cssOverride={override}
            size={50}
            color={'#0000ff'}
            loading={roleState.loading}
          />
        </div>
      )}
    </div>
  );
};

export default RoleTable;
