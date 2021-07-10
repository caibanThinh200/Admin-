import React, { useState, useEffect } from "react"
import { Layout, Menu, Breadcrumb, Switch } from 'antd';
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
  SettingOutlined
} from '@ant-design/icons';
import "../../style/SideBar.scss"
import clsx from "clsx"
import { ADMIN_FULL } from "../../Util/Dummy"
import { useTranslation, withTranslation } from "react-i18next"
import { useHistory, withRouter } from "react-router-dom";

const DashboardTitle = ({theme}) => {
    const { t, i18n } = useTranslation('common');
    return <h3 className={clsx('mt-3', theme === "light" ? 'dash-board__white-theme' : 'dash-board__black-theme')}>{t("sidebar.dashboard")}</h3>
}

const { SubMenu } = Menu;

class SiderDemo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            collapsed: false,
            theme: "dark"
        };
        this.onChangeTheme = this.onChangeTheme.bind(this);
        this.onMenuRender = this.onMenuRender.bind(this);
    }
   

    onCollapse = collapsed => {
        this.setState({ collapsed });
    };

    onChangeTheme(check) {
        if(check) {
            this.setState({
                theme: "light"
            })
        } else {
            this.setState({
                theme: "dark"
            })
        }
    }

    onMenuRender() {
        if(ADMIN_FULL.permission.length > 0) {
            ADMIN_FULL.permission.map((permission, index) => {
                if(permission.type === "item") {
                    return (
                        <Menu.Item key={index}>
                            <p>{permission.tab}</p>
                        </Menu.Item>
                    )
                }  
            })
        }
    }

    onNavigate(code = "", query = "", params = "") {
        const { history, location } = this.props;
        history.replace(code)
    }

    
    render() {
        const { collapsed, theme } = this.state;
        console.log(this.props)
        const { Header, Content, Footer, Sider } = Layout;
        const darkTheme = theme === "dark" && theme;
        const lightTheme = theme === "light" && theme;
    
        return (
                <Layout style={{ minHeight: '100vh' }}>
                    <Sider theme={theme} collapsible collapsed={collapsed} onCollapse={this.onCollapse}>
                        <Menu theme={theme} mode="inline">
                            <Menu.Item>
                                <div>
                                    <DashboardTitle theme={theme}/>
                                </div>
                            </Menu.Item>
                            
                            <Menu.Item icon={<SettingOutlined />}>
                                <Switch 
                                    onChange={this.onChangeTheme}
                                    checked={theme === "light"}
                                    checkedChildren={lightTheme}
                                    unCheckedChildren={darkTheme} />
                            </Menu.Item>
                            {
                                ADMIN_FULL.permission.length > 0 && ADMIN_FULL.permission.map((permission, index) => {
                                    if(permission.type === "item") {
                                        return (
                                            <Menu.Item key={index} onClick={() => this.onNavigate(permission.path)}>
                                                {permission.tab}
                                            </Menu.Item>
                                        )
                                    }  
                                })  
                            }                      
                        </Menu>
                    </Sider>
                   <Content>
                       {this.props.component}
                   </Content>
                </Layout>
            );
        }
    }

export default SiderDemo;