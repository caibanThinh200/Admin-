import { Statistic, Card, Row, Col } from 'antd';
import { ArrowUpOutlined, ArrowDownOutlined } from '@ant-design/icons';

const InfoBox = () => {
    return (
        <div className="site-statistic-demo-card">
            <Row gutter={16}>
            <Col span={6}>
                <Card>
                <Statistic
                    title="Số sản phẩm"
                    value={70}
                    valueStyle={{ color: '#3f8600' }}
                />
                </Card>
            </Col>
            <Col span={6}>
                <Card>
                <Statistic
                    title="Cửa hàng liên kết"
                    value={50}
                    valueStyle={{ color: '#3f8600' }}
                />
                </Card>
            </Col>
            <Col span={6}>
                <Card>
                <Statistic
                    title="Số danh mục sản phẩm"
                    value={30}
                    suffix="VND"
                    valueStyle={{ color: '#3f8600' }}
                />
                </Card>
            </Col>
            <Col span={6}>
                <Card>
                <Statistic
                    title="Tỉnh/ thành phố"
                    value={7}
                    valueStyle={{ color: '#3f8600' }}
                />
                </Card>
            </Col>
            </Row>
        </div>
    )
}

export default InfoBox;

