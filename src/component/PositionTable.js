import React, { useEffect, useState } from 'react';
import './PositionTable.css';
import { Button } from 'react-bootstrap';
import { css } from '@emotion/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';
import { RingLoader } from 'react-spinners';

import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';

const override = {
  display: "block",
  margin: "0 auto",
  marginTop:"45px",
  borderColor: "red",
};

const PositionTable = () => {
  
  const renderEditButton = (params) => {
    return <FontAwesomeIcon icon={faEdit} />;
  };

  const renderDeleteButton = (params) => {
    return <FontAwesomeIcon icon={faTrash} />;
  };

  const pstate = {
    positionData: [],
    loading: true,
    columnDefs: [
      {
        headerName: 'Company',
        field: 'CompanyName',
        sortable: true,
      },
      {
        headerName: 'Position',
        field: 'PositionName',
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

  const positionList = [
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
      _id: '5cfe409655995b1930f25a6d',
      PositionName: 'Test',
      PositionID: 5,
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
      _id: '5cff8d5174ed3d16b0ec43f4',
      PositionName: 'Manager',
      PositionID: 9,
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
      _id: '5f2bd1c2ca01d70017e9d02b',
      PositionName: 'Marketing',
      PositionID: 14,
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
      _id: '5ff2bd7cb0c0f30017cbddf4',
      PositionName: 'Regional Manager',
      PositionID: 19,
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
      _id: '5ff5b0a998e8530017ed3356',
      PositionName: 'HR',
      PositionID: 20,
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
      _id: '60011ab2f4f3c50017be2e04',
      PositionName: 'Lkkk',
      PositionID: 23,
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
      _id: '6041dd51fa5b9c0017a98c69',
      PositionName: 'developer',
      PositionID: 28,
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
      _id: '604322b65217e300175efb22',
      PositionName: 'HR',
      PositionID: 30,
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
      _id: '6073242c6a74e3001709d323',
      PositionName: 'civil engineer ',
      PositionID: 32,
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
      _id: '60802a2387d0510017e81760',
      PositionName: 'CT',
      PositionID: 33,
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
      _id: '609e3cf7b1854e00172e6103',
      PositionName: 'se',
      PositionID: 36,
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
      _id: '60a73c7a0506ea001786fa90',
      PositionName: 'dev',
      PositionID: 38,
      __v: 0,
    },
  ];

  const [positions, setpositions] = useState(pstate);

  useEffect(() => {
    let positionObj = [];
    let rowDataT = [];
    positionObj = positionList;
    setpositions({ ...pstate, loading: true, positionData: positionList });
    rowDataT = [];
    positionObj.map((data) => {
      let temp = {
        data,
        CompanyName: data['company'][0]['CompanyName'],
        PositionName: data['PositionName'],
      };

      rowDataT.push(temp);
    });
    setpositions({ ...pstate, loading: false, rowData: rowDataT });
  }, []);

  return (
    <div id="table-outer-div-scroll">
      <h2 id="role-title">Position Details</h2>

      <Button variant="primary" id="add-button">
        <FontAwesomeIcon icon={faPlus} id="plus-icon" />
        Add
      </Button>
      <div id="clear-both" />
      {!positions.loading && positions.rowData && positions.rowData.length ? (
        <div id="table-div" className="ag-theme-balham">
          <AgGridReact
            columnDefs={positions.columnDefs}
            defaultColDef={positions.defaultColDef}
            columnTypes={positions.columnTypes}
            rowData={positions.rowData}
            pagination={true}
            paginationPageSize={10}
            getRowHeight={positions.getRowHeight}
          />
        </div>
      ) : (
        <div id="loading-bar">
          <RingLoader
             cssOverride={override}
            sizeUnit={'px'}
            size={50}
            color={'#0000ff'}
            loading={positions.loading}
          />
        </div>
      )}
    </div>
  );
};

export default PositionTable;
