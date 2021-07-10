import { useTranslation } from "react-i18next";
import { Divider, Table, Button } from "antd"
import Revenue from "./Revenue";
import Layout from "../Common/Layout";
import { ListBillDummy } from "../../Util/Dummy";

const Bill = () => {
    const { t } = useTranslation("common");
    const { Column } = Table;
    return (
        <div className="">
            <Layout title={t("bill.title")}>
                <div className="">
                    <Revenue/>
                </div>
                <Divider/>
                <div className="">
                    <h4 className="title mb-4">{t("bill.purchaseTable")}</h4>
                    <Table dataSource={ListBillDummy} pagination={{pageSize: 5}}>
                        <Column title={t("bill.idBill")} dataIndex="idBill"/>
                        <Column title={t("bill.customerName")} dataIndex="customerName"/>
                        <Column title={t("bill.phoneNum")} dataIndex="phoneNum"/>
                        <Column title={t("bill.address")} dataIndex="address"/>
                        <Column title={t("bill.total")} dataIndex="total"/>
                        <Column dataIndex="idBill" render={id => 
                            <Button type="primary">{t("bill.detail")}</Button>}
                        />
                    </Table>
                </div>
            </Layout>
            
        </div>
    )
};

export default Bill;