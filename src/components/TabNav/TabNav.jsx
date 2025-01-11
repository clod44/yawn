import { useLocation, useNavigate } from 'react-router-dom';
import { Tabs, Text } from '@mantine/core';
import { FaHome } from "react-icons/fa";

const TabNav = ({
    tabs = [
        { path: "/", icon: FaHome, title: "Home" }
    ],
    ...props
}) => {
    const location = useLocation();
    const navigate = useNavigate();

    const currentTab = "/" + location.pathname.split('/')[1];


    return (
        <Tabs
            keepMounted={false}
            value={currentTab}
            onChange={(value) => navigate(value)}
            {...props}
        >
            <Tabs.List grow>
                {tabs.map((tab, index) => (
                    <Tabs.Tab key={index} value={tab.path}>
                        <Text size="sm" c={currentTab === tab.path ? "blue" : "dimmed"}>
                            {tab.icon && <tab.icon size={20} />}
                            {tab.title}
                        </Text>
                    </Tabs.Tab>
                ))}
            </Tabs.List>
        </Tabs>
    );
};

export default TabNav;
