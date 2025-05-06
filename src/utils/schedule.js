function calculateAmortizationSchedule(principal, annualRate, tenureMonths) {
    const r = annualRate / (12 * 100);
    const emi = principal * r * Math.pow(1 + r, tenureMonths) / (Math.pow(1 + r, tenureMonths) - 1);

    let balance = principal;
    const schedule = [];

    for (let i = 1; i <= tenureMonths; i++) {
        const interest = balance * r;
        const principalPaid = emi - interest;
        balance -= principalPaid;

        schedule.push({
            month: i,
            emi: emi.toFixed(2),
            interest: interest.toFixed(2),
            principalPaid: principalPaid.toFixed(2),
            remainingBalance: balance > 0 ? balance.toFixed(2) : "0.00"
        });
    }

    return schedule;
}

export { calculateAmortizationSchedule };