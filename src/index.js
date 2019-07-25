// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './components/app';

// ReactDOM.render(<App />, document.getElementById('root'));

function getNumberInRange(min, max) {
    return Math.random() * (max - min) + min;
}

const from = new Date('2019-01-01T00:00:00.000-0600').getTime();
const to = new Date('2019-12-31T23:59:59.999-0600').getTime();
const dates = Array
    .from({length: 1000})
    .map(n => ({
        date: new Date(getNumberInRange(from, to)),
        total: getNumberInRange(10, 1000),
    }));

function groupByDateIntervals(dates, from, to, step) {
    const sortedDates = dates.sort(({date: a}, {date: b}) => a.getTime() - b.getTime());
    const indices = [];
    let current = to;
    let index = dates.length - 1;

    while(from <= current) {
        const items = [];
        indices.push({
            date: new Date(current),
            items: items,
        });
        current -= step;

        while(index > -1) {
            const nextDate = sortedDates[index];

            if (nextDate.date.getTime() >= current) {
                items.push(nextDate);
                index--;
            } else {
                break;
            }
        }
    }

    return indices.reverse();
}

console.log(groupByDateIntervals(dates, from, new Date('2019-12-31T00:00:00.000-0600').getTime(), 1000 * 60 * 60 * 24));
