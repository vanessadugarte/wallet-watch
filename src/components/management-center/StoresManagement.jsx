import React, {useState} from 'react';
import {Button, Grid, TextField} from "@mui/material";
import {createStore} from "../../services/storeService";

const StoresManagement = () => {

    const [storeName, setStoreName] = useState("");
    const [storeAddress, setStoreAddress] = useState("");

    const handleAddStore = () => {
        createStore(
            {
                name: storeName,
                address: storeAddress,

            }
        ).then(r => {})
    };


    return (
        <Grid container>

            <Grid item>
                <TextField label="Tienda" variant="outlined" value={storeName}
                           onChange={(event) => setStoreName(event.target.value)}/>
            </Grid>
            <Grid item>
                <TextField label="Dirección" variant="outlined" value={storeAddress}
                           onChange={(event) => setStoreAddress(event.target.value)}/>
            </Grid>
            <Grid item>
                <Button variant="contained" onClick={handleAddStore}>Añadir</Button>
            </Grid>
        </Grid>
    );
};

export default StoresManagement;
