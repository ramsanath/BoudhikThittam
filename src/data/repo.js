import Helper from './../util/helper';
import Util from './../util/util';
import C, { paths } from './../util/constants';
import Api from './api';
import { string, getCurrentLocale } from './../i18n/i18n';


const locale = getCurrentLocale()

const saveLocally = (data) => {
    const serializedData = JSON.stringify(data);
    Helper.localStorage.put(C.ENTIRE_DATA, serializedData);
};

const getData = () => {
    let jsonData = Helper.localStorage.get(C.ENTIRE_DATA);
    return (jsonData == undefined) ? undefined : JSON.parse(jsonData);
};

export const loadDataAnd = async (callback) => {
    let firstLaunch = await Helper.isFirstLaunch();
    if (firstLaunch || !Util.isValidObject(getData())) {
        let data = await Api.getEntireData();
        saveLocally(data);
        callback(data);
    }
};

const Data = {
    getMonthList: (year) => {
        let data = getData();
        let monthsList = [];
        let months = data[locale]['years'][year][paths.months];
        for (month in months) {
            let monthObj = {
                id: month,
                name: string(`months.${month}`),
                monthActivities: months[month]
            };
            monthsList.push(monthObj);
        }
        return monthsList;
    },
    getActivityList: (year, month) => {
        let data = getData();
        let activities = data[locale][paths.years][year][paths.months][month][paths.activities];
        let activityList = [];
        for (activity in activities) {
            let actObj = {
                id: activity,
                name: string(`activities.${activity}`),
                activityContent: activities[activity]
            };
            activityList.push(actObj);
        }
        return activityList;
    },
}


export default Data;