import React, { Component } from 'react'

import '../../../css/header.css'
import TopHeader from './TopHeader'
import BottomHeader from './BottomHeader'

export class index extends Component {
    render() {
        return (
            <div className="heder_section">
                <TopHeader />
                <BottomHeader />
            </div>
        )
    }
}

export default index
