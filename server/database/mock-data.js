const moment = require('moment');
const gymondoSet = require('./mock-data/gymondo-set');
const generatedSet = require('./mock-data/generated-set');

const sanitise = (str) => str.replace(`'`, '').replace('\\', '');

const getRandomInt = (rangeStart = 0, rangeEnd = 5) => Math.floor(Math.random() * rangeEnd) + rangeStart;

const getRandomDate = (start, end, startHour, endHour) =>  { 
    const date = new Date(+start + Math.random() * (end - start));
    const hour = startHour + Math.random() * (endHour - startHour) | 0;
    date.setHours(hour);
    return moment(date).format('YYYY-MM-DD HH:mm');
};

/** 
 * Some of this data is high fidelity since it was collected from the `https://www.gymondo.com/api/v1/public/programs`
 * endpoint, hopefully you folks don't mind for this challenge! The rest is of lower fidelity since is was generated.
 */
const mockData = [
    ...gymondoSet, 
    ...generatedSet
].map(({ title, description }) => ({
    name: sanitise(title) || 'No Title',
    description: sanitise(description) || 'No Description',
    startDate: getRandomDate(moment(), moment().add(12, 'months')),
    category: `C${getRandomInt(1, 7)}`,
    imageUrl: `/workout${getRandomInt(1, 29)}.jpg`
}));


module.exports = mockData;
