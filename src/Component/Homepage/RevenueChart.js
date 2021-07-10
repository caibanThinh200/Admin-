import { useEffect, useState } from "react"
import { Bar } from "react-chartjs-2"
import { useTranslation } from "react-i18next"
import { chartData} from "../../Util/CommonFunction"
import { KPI } from "../../Util/Dummy"

const RevenueChart = (props) => {
    const [totalArr, setTotalArr] = useState([]),
    [monthArr, setMonthArr] = useState([]),
    { t } = useTranslation("common");

    useEffect(() => {
        if (KPI.length > 0) {
            const total = [],
            month = [];
            KPI.map(data => {
                total.push(data.total);
                month.push(t("datetime.month", {month: data.month}));
            });
            setTotalArr(total);
            setMonthArr(month);
        }
    }, [])

    return (
        <Bar {...props} data={chartData(monthArr, totalArr, t("home.revenueTitle"))}/>
    )
}

export default RevenueChart;