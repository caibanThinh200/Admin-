import { Statistic, Card, Row, Col } from 'antd';
import { ArrowUpOutlined, ArrowDownOutlined } from '@ant-design/icons';

const BillRevenue = () => {
    return (
        <div className="site-statistic-demo-card">
            <Row gutter={16}>
            <Col span={6}>
                <Card>
                <Statistic
                    title="Tháng hiện tại"
                    value={7}
                    valueStyle={{ color: '#3f8600' }}
                />
                </Card>
            </Col>
            <Col span={6}>
                <Card>
                <Statistic
                    title="Doanh thu hiện tại"
                    value={50000}
                    suffix="VND"
                    valueStyle={{ color: '#3f8600' }}
                />
                </Card>
            </Col>
            <Col span={6}>
                <Card>
                <Statistic
                    title="Target"
                    value={100000}
                    suffix="VND"
                    valueStyle={{ color: '#3f8600' }}
                />
                </Card>
            </Col>
            <Col span={6}>
                <Card>
                <Statistic
                    title="phần trăm đạt được"
                    value={50}
                    suffix="%"
                    valueStyle={{ color: '#3f8600' }}
                />
                </Card>
            </Col>
            </Row>
        </div>
    )
}

export default BillRevenue;

