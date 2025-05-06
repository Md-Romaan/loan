import { Paper, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { DataGrid } from '@mui/x-data-grid';
import axios from 'axios';

const ExchangeRates = () => {

    let api_key = "7043f52817ba2072d214f127";
    let url = `https://v6.exchangerate-api.com/v6/${api_key}/latest/USD`;


    // [{currency: "USD", rate: 1}, {currency: "EUR", rate: 0.85}, ...]
    const [rows, setRows] = useState([]);

    let columns = [{
        field: 'currency',
        headerName: 'Currency',
        width: 150,
        editable: false,
    },
    {
        field: 'rate',
        headerName: 'Exchange Rate',
        width: 150,
        editable: false,
    }];

    let paginationModel = { page: 0, pageSize: 10 };

    const fetchExchangeRates = async () => {
        try {
            const response = await axios.get(url);
            console.log(response);

            if (response.status === 200) {
                let mapOfRates = response.data.conversion_rates;
                let arrOfKeys = Object.keys(mapOfRates);
                let result = arrOfKeys?.map((key) => {
                    return { id: key, currency: key, rate: mapOfRates[key] }
                })
                setRows(result);
            }
        } catch (error) {
            // alert("Error fetching exchange rates. Please try again later.");
        }
    }

    useEffect(() => {
        fetchExchangeRates();
    }, [])

    return (
        <>
            <div>
                <Typography style={{margin: "10px"}}>Live Exchange Rates (Base: USD)</Typography>
                <Paper sx={{ height: 400, width: '100%' }}>
                    <DataGrid
                        rows={rows}
                        columns={columns}
                        initialState={{ pagination: { paginationModel } }}
                        pageSizeOptions={[5, 10]}
                        checkboxSelection
                        sx={{ border: 0 }}
                    />
                </Paper>
            </div>
        </>
    )
}

export default ExchangeRates