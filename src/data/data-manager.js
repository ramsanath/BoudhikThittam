import { paths } from '../util/constants';
import { string } from '../i18n/i18n';
import { isValidString } from '../util/util';

export default class DataManager {

    constructor(data, params) {
        this.data = data;
    }
    
    getMonthList(locale, year) {
        let monthsList = [];
        let months = this.data[locale][paths.years][year][paths.months];
        for (month in months) {
            let monthObj = {
                id: month,
                name: string(`months.${month}`),
                monthActivities: months[month]
            };
            monthsList.push(monthObj);
        }
        return monthsList;
    }

    getActivityList(locale, year, month) {
        let activities = this.data[locale][paths.years][year][paths.months][month][paths.activities];
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
    }

    getContent(locale, year, month, activity) {
        const content = this.data[locale][paths.years][year][paths.months][month][paths.activities][activity];
        if (!isValidString(content.title)) {
            content.title = content.name
        }
        return content;
    }

}