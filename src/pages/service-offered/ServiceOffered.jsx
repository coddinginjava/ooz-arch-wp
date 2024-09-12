import React from 'react'
import './serviceOffered.scss'
import Tabbar from './tabbar/Tabbar'


const tabs = [
    { id: 'arch', label: 'Architecture' },
    { id: 'int', label: 'Interior' },
    { id: 'pm', label: 'Project  Management' },
    { id: 'c&i', label: 'Construction  &  Interior' }
]

const ServiceOffered = () => {
    return (
        <div className='so-desk-main '>
            <Tabbar tabs={tabs}/>
        </div>
    )
}

export default ServiceOffered