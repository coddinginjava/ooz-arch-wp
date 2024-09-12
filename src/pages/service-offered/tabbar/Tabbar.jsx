import React, { useState } from 'react'
import { motion } from "framer-motion";
import './tabbar.scss'
import { tab } from '@testing-library/user-event/dist/tab';

const Tabbar = ({ tabs }) => {
    let [activeTab, setActiveTab] = useState(tabs[0].id);

    return (
        <div>
            <div className='tabbar-main'>
                {tabs.map(tab => (
                    <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={` ${activeTab == tab.id ? '' : 'text-hover'} tab1`}
                    >
                        {activeTab === tab.id && (
                            <motion.div
                                layoutId='active-pill'
                                className='tab11'
                                style={{ borderRadius: 9999 }}
                                transition={{ type: 'spring', duration: 0.6 }}
                            />)}
                        <span className='tab12'>
                            {tab.label}
                        </span>
                    </button>
                ))}
            </div>
        </div>
    );
}

export default Tabbar