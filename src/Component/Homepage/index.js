import { Divider } from "antd";
import { useTranslation } from "react-i18next"
import Layout from "../Common/Layout";
import InfoBox from "./InfoBox";
import RevenueChart from "./RevenueChart";

const HomePage = () => {
    const { t } = useTranslation("common");
    return (
        <Layout title={t("home.title")}>
            <div className="">
                <InfoBox/>
                <div className="mt-5">
                    <div className="home-chart__revenue">
                        <h4>1 - {t("home.revenueChart")}</h4>
                        <RevenueChart className="mb-5"/>
                    </div>
                </div>
            </div>
        </Layout>
        
    )
}

export default HomePage