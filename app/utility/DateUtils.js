import _ from 'lodash';

export const getToday = () => {
    let today = new Date();
    return today.toISOString().slice(0,10).replace(/-/g,".");
}

export const padTwoDigits = (num) => {
    return num.toString().padStart(2, "0");
}

export const dateInYyyyMmDdHhMmSs = (date, dateDiveder) => {
    return (
        [
            date.getFullYear(),
            padTwoDigits(date.getMonth() + 1),
            padTwoDigits(date.getDate()),
        ].join(dateDiveder) +
        "_" +
        [
            padTwoDigits(date.getHours()),
            padTwoDigits(date.getMinutes()),
            padTwoDigits(date.getSeconds()),
        ].join(":")
    );
}

export const formatDate = (date) => {
    var day = null;
    var month = null;
    var year = null;
    if (date != null && date == undefined && date == '') {
        var d = new Date(date),
            month = '' + (d.getMonth() + 1),
            day = '' + d.getDate(),
            year = d.getFullYear();
    } else {
        var d = new Date(),
            month = '' + (d.getMonth() + 1),
            day = '' + d.getDate(),
            year = d.getFullYear();
    }

    if (month.length < 2)
        month = '0' + month;
    if (day.length < 2)
        day = '0' + day;

    return [year, month, day].join('-');
}
