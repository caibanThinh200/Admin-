import { Divider } from "antd"

const Layout = (props) => {
    return (
        <div className="ml-5 mr-5">
            <div className="container tab-title">
                <h1>{props.title || ""}</h1>
            </div>
            <Divider/>
            <div className="ml-5">
                {props.children}
            </div>
        </div>
    )
}
export default Layout;