import moment from "moment";

export const generateMonthOptions = (currentMonth: number) => {
    const months = [];

    while (months.length < 12) {
        if (currentMonth > 11) {
            currentMonth = 0;
        }
        months.push(moment().add(currentMonth + 1, 'months'));
        currentMonth++;
    }

    return months.map((month) => ({
        label: moment().month(moment(month).month()).format('MMMM'),
        value: month
    }));
};
