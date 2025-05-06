import React, { useState } from 'react'
import './home.css'
import { Box, Button, FormControl, InputLabel, MenuItem, Select, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField } from '@mui/material'
import { calculateAmortizationSchedule } from '../utils/schedule.js';

const Home = () => {


    const [currency, setCurrency] = useState("INR");
    const [rows, setRows] = useState([]);
    const [emi, setEmi] = useState();

    const handleChange = (e) => {

        setCurrency(e.target.value);
    }


    const currencies = ["USD", "EUR", "INR", "GBP", "JPY", "AUD", "CAD"];

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const loanAmount = formData.get('loanAmount');
        const interestRate = formData.get('interest');
        const years = formData.get('years');

        // Perform calculations here
        // For example, calculate monthly EMI using the formula:
        // EMI = [P * r * (1 + r)^n] / [(1 + r)^n - 1]
        // where P = loan amount, r = monthly interest rate, n = number of months

        console.log(`Loan Amount: ${loanAmount}, Interest Rate: ${interestRate}, Years: ${years}`);

        const principal = parseFloat(loanAmount);
        const calculatedInterest = parseFloat(interestRate) / 100 / 12;
        const calculatedPayments = parseFloat(years) * 12;
        console.log({ principal, calculatedInterest, calculatedPayments });

        const x = Math.pow(1 + calculatedInterest, calculatedPayments);
        const monthly = (principal * x * calculatedInterest) / (x - 1);
        const monthlyEMI = monthly.toFixed(2);
        setEmi(monthlyEMI);
        console.log(`Monthly EMI: $${monthlyEMI}`);

        let arr = calculateAmortizationSchedule(principal, interestRate, calculatedPayments);
        console.log(arr);
        setRows(arr);
    }

    return (
        <>
            <div id='container'>
                <h1>Loan Calculator Dashboard</h1>

                <Box onSubmit={handleSubmit}
                    component="form"
                    sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' } }}
                    noValidate
                    autoComplete="off">
                    <TextField label="Loan Amount" required name='loanAmount' />
                    <TextField label="Interest Rate (%)" required name='interest' />
                    <TextField label="Term (Years)" required name='years' />
                    <br />
                    <Button type='submit' variant='contained'>CALCULATE</Button>
                </Box>

                {
                    emi &&
                    <>
                        <div id='result'>
                            <h3>Monthly EMI: {emi} {currency}</h3>
                            <FormControl style={{ width: '200px', marginTop: "10px" }}>
                                <InputLabel id="demo-simple-select-label">Currency</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    label="Currency"
                                    onChange={handleChange}
                                >
                                    {
                                        currencies?.map((c) => {
                                            return <MenuItem value={c}>{c}</MenuItem>
                                        })
                                    }
                                </Select>

                                <Button variant='outlined' style={{ marginTop: "10px" }} onClick={() => { setRows([]); setEmi(0) }}>Reset</Button>
                            </FormControl>
                        </div>

                        <TableContainer component={""}>
                            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Month</TableCell>
                                        <TableCell align="right">Principal</TableCell>
                                        <TableCell align="right">Interest</TableCell>
                                        <TableCell align="right">Remaining Balance</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {rows.map((row) => (
                                        <TableRow
                                            key={row.name}
                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                        >
                                            <TableCell component="th" scope="row">
                                                {row.month}
                                            </TableCell>
                                            <TableCell align="right">{row.principalPaid} {currency}</TableCell>
                                            <TableCell align="right">{row.interest} {currency}</TableCell>
                                            <TableCell align="right">{row.remainingBalance} {currency}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </>
                }

            </div>
        </>
    )
}

export default Home