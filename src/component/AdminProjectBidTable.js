import React, { useEffect, useState } from 'react';
import './AdminProjectBidTable.css';
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

const AdminProjectBidTable = () => {
 
  const renderEditButton = (params) => {
    return <FontAwesomeIcon icon={faEdit} />;
  };

  const renderDeleteButton = (params) => {
    return <FontAwesomeIcon icon={faTrash} />;
  };
  const bidstate = {
    projectBidData: [],
    loading: true,

    columnDefs: [
      {
        headerName: 'Project Title',
        field: 'ProjectTitle',
        sortable: true,
      },
      {
        headerName: 'Portal',
        field: 'PortalName',
        sortable: true,
      },
      {
        headerName: 'Project URL',
        field: 'ProjectURL',
        sortable: true,
      },
      {
        headerName: 'Estimated Time',
        field: 'EstimatedTime',
        sortable: true,
      },
      {
        headerName: 'Estimated Cost',
        field: 'EstimatedCost',
        sortable: true,
        type: 'numberColumn',
        filter: 'agNumberColumnFilter',
      },
      {
        headerName: 'Remark',
        field: 'Remark',
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
      width: 200,
      filter: 'agTextColumnFilter',
    },
    getRowHeight: function (params) {
      return 35;
    },
  };

  const [biddetails, setbiddetails] = useState(bidstate);

  const bidList = [
    {
      portals: [
        {
          _id: '62c7ed07c66ba70018752a74',
          PortalName: 'POrtal',
          Status: 1,
          CreatedDate: '2022-07-08T08:38:31.992Z',
          ID: 148,
          __v: 0,
        },
      ],
      _id: '62eb60ba11d4670018467399',
      ProjectTitle: 'Human resource',
      ProjectURL: 'hr.com',
      ProjectDesc: 'Good project for community development',
      EstimatedTime: 2,
      EstimatedCost: 3000,
      ResourceID: 2,
      Status: 1,
      Remark: 'Nice.',
      CreatedDate: '2022-08-04T06:01:30.444Z',
      ID: 73,
      __v: 0,
    },
    {
      portals: [
        {
          _id: '62c7ed07c66ba70018752a74',
          PortalName: 'POrtal',
          Status: 1,
          CreatedDate: '2022-07-08T08:38:31.992Z',
          ID: 148,
          __v: 0,
        },
      ],
      _id: '6305f78aa227050018ba44a4',
      ProjectTitle: 'Aut natus nisi quos ',
      ProjectURL: 'Incididunt id et sus',
      ProjectDesc: 'Eligendi eius ex duc',
      EstimatedTime: 42,
      EstimatedCost: 71,
      ResourceID: 2,
      Status: 1,
      Remark: 'Commodo deleniti fac',
      CreatedDate: '2022-08-24T10:03:54.216Z',
      ID: 74,
      __v: 0,
    },
    {
      portals: [
        {
          _id: '6307c6b1aca9f100181dbcd0',
          PortalName: 'Berkay',
          Status: 1,
          CreatedDate: '2022-08-25T19:00:01.172Z',
          ID: 157,
          __v: 0,
        },
      ],
      _id: '6307c702aca9f100181dbcd1',
      ProjectTitle: 'D1',
      ProjectURL:
        'https://employee-management-fk.netlify.app/#/admin/project-bid',
      ProjectDesc: 'd1 çalışan portal',
      EstimatedTime: 3,
      EstimatedCost: 3200,
      ResourceID: 2,
      Status: 1,
      Remark: 'Berkayın projesi',
      CreatedDate: '2022-08-25T19:01:22.836Z',
      ID: 75,
      __v: 0,
    },
  ];

  useEffect(() => {
    let projectBidObj = [];
    let rowDataT = [];
    projectBidObj = bidList;
    setbiddetails({ ...bidstate, loading: true, projectBidData: bidList });
    rowDataT = [];
    projectBidObj.map((data) => {
      let temp = {
        data,
        ProjectTitle: data['ProjectTitle'],
        PortalName: data['portals'][0]['PortalName'],
        ProjectURL: data['ProjectURL'],
        EstimatedTime: data['EstimatedTime'],
        EstimatedCost: data['EstimatedCost'],
        Remark: data['Remark'],
      };

      rowDataT.push(temp);
    });
    setbiddetails({ ...bidstate, loading: false, rowData: rowDataT });
  }, []);

  return (
    <div id="table-outer-div-scroll">
      <h2 id="role-title">Bidding Details</h2>
      <Button variant="primary" id="add-button">
        <FontAwesomeIcon icon={faPlus} id="plus-icon" />
        Add
      </Button>

      <div id="clear-both" />

      {!biddetails.loading &&
      biddetails.rowData &&
      biddetails.rowData.length ? (
        <div id="table-div" className="ag-theme-balham">
          <AgGridReact
            columnDefs={biddetails.columnDefs}
            defaultColDef={biddetails.defaultColDef}
            columnTypes={biddetails.columnTypes}
            rowData={biddetails.rowData}
            pagination={true}
            paginationPageSize={10}
            getRowHeight={biddetails.getRowHeight}
          />
        </div>
      ) : (
        <div id="loading-bar">
          <RingLoader
             cssOverride={override}
            sizeUnit={'px'}
            size={50}
            color={'#0000ff'}
            loading={biddetails.loading}
          />
        </div>
      )}
    </div>
  );
};

export default AdminProjectBidTable;
