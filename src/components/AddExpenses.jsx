import React, {useEffect, useState} from 'react';
import {Button, Container, Grid, TextField} from "@mui/material";
import {DatePicker, LocalizationProvider} from "@mui/x-date-pickers";
import {AdapterDateFns} from "@mui/x-date-pickers/AdapterDateFnsV3";
import {es} from "date-fns/locale/es";
import {DataGrid} from "@mui/x-data-grid";

export const AddExpenses = () => {
    const [shoppingDate, setShoppingDate] = useState({});
    const [description, setDescription] = useState("");
    const [quantity, setQuantity] = useState("");
    const [regularPrice, setRegularPrice] = useState("");
    const [discount, setDiscount] = useState(0);
    const [productTotal, setProductTotal] = useState(0);


    useEffect(() => {
        if (quantity > 0 && regularPrice > 0){
            setProductTotal(quantity * regularPrice - discount)
        }
    }, [quantity, regularPrice, discount]);






    const handleShoppingDate = (date) => {
        setShoppingDate(date)
    }


    const handleLoadProduct = () =>{
        console.log(description);
        console.log(quantity);
        console.log(discount);
        console.log(productTotal);
        console.log(shoppingDate);
    };

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
            <Grid container display="flex" justifyContent="flex-start">
                <Grid item xs={2}>
                    <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={es}>
                        <DatePicker
                            format="dd/MM/yyyy"
                            label="Fecha de compra"
                            onChange={handleShoppingDate}
                            sx={{mr:2}}
                            value={shoppingDate}
                        />
                    </LocalizationProvider>
                </Grid>

                <Grid item xs={2}>
                        <TextField label="Descripción" variant="outlined" value={description} onChange={(event) => setDescription(event.target.value) }/>
                </Grid>

                <Grid item xs={1} sx={{mr:1}}>
                    <TextField label="Cantidad" variant="outlined" type="number" value={quantity} onChange={(event) => setQuantity(event.target.value)}/>
                </Grid>

                <Grid item xs={1} sx={{mr:1}}>
                    <TextField label="Precio R. Unitario" variant="outlined" type="number" value={regularPrice} onChange={(event) => setRegularPrice(event.target.value)}/>
                </Grid>

                <Grid item xs={1} sx={{mr:1}}>
                    <TextField label="Dcto." variant="outlined" type="number" value={discount} onChange={(event) => setDiscount(event.target.value)}/>
                </Grid>

                <Grid item xs={2} sx={{mr:1}}>
                    <TextField label="Total producto" disabled variant="outlined" type="number" value={productTotal} onChange={(event) => setProductTotal(event.target.value)}/>
                </Grid>

                <Grid item>
                    <Button variant="contained" onClick={handleLoadProduct}>Cargar producto</Button>
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


