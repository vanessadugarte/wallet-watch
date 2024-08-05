import React, {useState} from 'react';
import {Button, Container, Grid, TextField} from "@mui/material";
import {DatePicker, LocalizationProvider} from "@mui/x-date-pickers";
import {AdapterDateFns} from "@mui/x-date-pickers/AdapterDateFnsV3";
import dayjs from "dayjs";
import { es } from "date-fns/locale/es";
import {DataGrid} from "@mui/x-data-grid";
dayjs.locale("es")

export const ExpensesDetail = () => {

    const [initialDate, setInitialDate] = useState({});
    const [finishDate, setFinishDate] = useState({});
    const handleFromDate = (date) => {
        setInitialDate(date)
    }

    const handleFinishDate = (date) => {
        setFinishDate(date)
    }

    const columnVisibilityModel = {
        id:false
    }

    const columns = [
        { field: 'id',
            headerName: 'ID',
            width: 90
        },
        {
            field: 'initialDate',
            headerName: 'Fecha',
            width: 150,
            editable: true,
        },
        {
            field: 'description',
            headerName: 'Descripción',
            width: 150,
            editable: true,
        },
        {
            field: 'quantity',
            headerName: 'Cantidad',
            width: 150,
            editable: true,
        },
        {
            field: 'total',
            headerName: 'Total',
            description: 'This column has a value getter and is not sortable.',
            sortable: false,
            width: 160,
            valueGetter: (value, row) => `${row.firstName || ''} ${row.lastName || ''}`,
        },
        {
            field: 'discount',
            headerName: 'Descuento',
            description: 'This column has a value getter and is not sortable.',
            sortable: false,
            width: 160,
            valueGetter: (value, row) => `${row.firstName || ''} ${row.lastName || ''}`,
        },
        {
            field: 'totalToPay',
            headerName: 'Total a pagar',
            description: 'This column has a value getter and is not sortable.',
            sortable: false,
            width: 160,
            valueGetter: (value, row) => `${row.firstName || ''} ${row.lastName || ''}`,
        },
    ];



    return (
        <Container maxWidth="xl" sx={{mt:5}}>
            <Grid container display="flex" justifyContent="space-between">
                <Grid item>
                    <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={es}>
                        <DatePicker
                            format="dd/MM/yyyy"
                            label="Fecha desde"
                            onChange={handleFromDate}
                            sx={{mr:3}}
                            value={initialDate}
                        />
                    </LocalizationProvider>
                    <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={es}>
                        <DatePicker
                            format="dd/MM/yyyy"
                            label="Fecha hasta"
                            onChange={handleFinishDate}
                            value={finishDate}
                        />
                    </LocalizationProvider>
                </Grid>



                <Grid item>
                    <Button variant="contained">Buscar</Button>
                </Grid>
            </Grid>

            <Grid>
                <DataGrid
                    rows={[]}
                    columns={columns}
                    initialState={{
                        columns: {
                            columnVisibilityModel: columnVisibilityModel
                        },
                        pagination: {
                            paginationModel: {
                                pageSize: 5,
                            },
                        },
                    }}
                    pageSizeOptions={[5]}
                    disableRowSelectionOnClick
                    sx={{mt:4}}
                />
            </Grid>

        </Container>
    );
};

