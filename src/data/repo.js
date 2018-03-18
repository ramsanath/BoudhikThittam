import Helper from './../util/helper';
import Util from './../util/util';
import constants from './../constants/constants';
import { getEntireData } from './api';
import { string } from './../i18n/i18n';


let data
const year = Util.currentYear()

const saveLocally = (data) => {
    const serializedData = JSON.stringify(data);
    Helper.storage.put(constants.ENTIRE_DATA, serializedData);
};

export const getData = async () => {
    let firstLaunch = await Helper.isFirstLaunch();
    if (firstLaunch) {
        data = await getEntireData();
        saveLocally(data);
    } else {
        data = await Helper.storage.get(constants.ENTIRE_DATA);
    }
    return data;
};

const Data = {
    getMonthList: (year) => {
        let monthsList = [];
        let months = data[year][constants.months];
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
    getActivityList: (activities) => {
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
    getActivitiesForMonth: (month) => data[year][month],
};


export default Data;