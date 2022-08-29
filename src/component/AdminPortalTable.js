import React, { useEffect, useState } from 'react';
import './AdminPortalTable.css';
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

const AdminPortalTable = () => {
  
  const renderEditButton = (params) => {
    return <FontAwesomeIcon icon={faEdit} />;
  };

  const renderDeleteButton = (params) => {
    return <FontAwesomeIcon icon={faTrash} />;
  };

  const portalstate = {
    portalData: [],
    loading: true,
    columnDefs: [
      {
        headerName: 'Portal',
        field: 'PortalName',
        sortable: true,
      },

      {
        headerName: 'Status',
        field: 'Status',
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

  const portalList = [
    {
      _id: '62b72be23c964f001812614a',
      PortalName: 'New Portal',
      Status: 1,
      CreatedDate: '2022-06-25T15:38:10.376Z',
      ID: 144,
      __v: 0,
    },
    {
      _id: '62bf1c7950f79a001812557b',
      PortalName: 'test',
      Status: 1,
      CreatedDate: '2022-07-01T16:10:33.417Z',
      ID: 147,
      __v: 0,
    },
    {
      _id: '62c7ed07c66ba70018752a74',
      PortalName: 'POrtal',
      Status: 1,
      CreatedDate: '2022-07-08T08:38:31.992Z',
      ID: 148,
      __v: 0,
    },
    {
      _id: '62c7ed21c66ba70018752a75',
      PortalName: 'Sarvesh',
      Status: 1,
      CreatedDate: '2022-07-08T08:38:57.768Z',
      ID: 149,
      __v: 0,
    },
    {
      _id: '62d927b41807900018901dee',
      PortalName: 'sn',
      Status: 1,
      CreatedDate: '2022-07-21T10:17:24.579Z',
      ID: 150,
      __v: 0,
    },
    {
      _id: '62e7fbd76b6fdb0018e06ecb',
      PortalName: '123',
      Status: 0,
      CreatedDate: '2022-08-01T16:14:15.112Z',
      ID: 152,
      __v: 0,
    },
    {
      _id: '62eaab1272f8ee001886174c',
      PortalName: 'sss',
      Status: 1,
      CreatedDate: '2022-08-03T17:06:26.548Z',
      ID: 153,
      __v: 0,
    },
    {
      _id: '62ec05f4614ee90018169b7e',
      PortalName: 'test',
      Status: 0,
      CreatedDate: '2022-08-04T17:46:28.608Z',
      ID: 154,
      __v: 0,
    },
    {
      _id: '6304a55e6b2f8100185591df',
      PortalName: "[;pl'l;",
      Status: 1,
      CreatedDate: '2022-08-23T10:01:02.432Z',
      ID: 156,
      __v: 0,
    },
    {
      _id: '6307c6b1aca9f100181dbcd0',
      PortalName: 'Berkay',
      Status: 1,
      CreatedDate: '2022-08-25T19:00:01.172Z',
      ID: 157,
      __v: 0,
    },
    {
      _id: '630c56d0ade8d000184014cf',
      PortalName: 'nnn',
      Status: 1,
      CreatedDate: '2022-08-29T06:04:00.526Z',
      ID: 158,
      __v: 0,
    },
  ];

  const [portalDetails, setportalDetails] = useState(portalstate);

  useEffect(() => {
    let portalObj = [];
    let rowDataT = [];
    portalObj = portalList;
    setportalDetails({ ...portalstate, loading: true, portalData: portalList });
    rowDataT = [];
    portalObj.map((data) => {
      let temp = {
        data,
        PortalName: data['PortalName'],
        Status: data['Status'] == 1 ? 'enable' : 'disable',
      };
      rowDataT.push(temp);
    });
    setportalDetails({ ...portalstate, loading: false, rowData: rowDataT });
  }, []);

  return (
    <div id="table-outer-div-scroll">
      <h2 id="role-title">Portal Details</h2>
      <Button variant="primary" id="add-button">
        <FontAwesomeIcon icon={faPlus} id="plus-icon" />
        Add
      </Button>
      <div id="clear-both" />

      {!portalDetails.loading &&
      portalDetails.rowData &&
      portalDetails.rowData.length ? (
        <div id="table-div" className="ag-theme-balham">
          <AgGridReact
            columnDefs={portalDetails.columnDefs}
            defaultColDef={portalDetails.defaultColDef}
            columnTypes={portalDetails.columnTypes}
            rowData={portalDetails.rowData}
            pagination={true}
            paginationPageSize={10}
            getRowHeight={portalDetails.getRowHeight}
          />
        </div>
      ) : (
        <div id="loading-bar">
          <RingLoader
            cssOverride={override}
            sizeUnit={'px'}
            size={50}
            color={'#0000ff'}
            loading={portalDetails.loading}
          />
        </div>
      )}
    </div>
  );
};

export default AdminPortalTable;
