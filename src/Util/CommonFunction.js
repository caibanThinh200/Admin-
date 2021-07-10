import { createBrowserHistory } from 'history';
import { ChartBackGroundColor, ChartBorderColor } from "./Define"

export let history = createBrowserHistory();

export const onNavigate = (code = "", query = "", params = "") => {
    history.replace(history.location.pathname + code);
}

export const chartData = (labelArr = [], data = [], title = "") => {
    return {
        labels: labelArr,
        datasets: [
            {
                label: title,
                data: data,
                backgroundColor: ChartBackGroundColor,
                borderColor:ChartBorderColor,
                borderWidth: 1,
            },
        ],
    }
}