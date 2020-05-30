import React, { Component } from 'react'
import Header from '../../components/common/Header/index';
import JoinForm from '../../components/homePage/JoinForm';
import Footer from '../../components/common/Footer';
import HomeContent from '../../components/homePage/HomeContent';

export class index extends Component {
    render() {
        return (
            <div>
                <Header />

                <HomeContent />

                <JoinForm />

                <Footer />
            </div>
        )
    }
}

export default index
