import React, { Component } from 'react'
import Layout from "../components/Layout"
import styles from "../components/products.module.css"

export default class products extends Component {
    render() {
        return (
            <Layout>
                <div className={styles.page}>
                    <h1>This is our products</h1>
                    <p className={styles.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris in feugiat tellus. Aliquam auctor, leo vel laoreet ornare, dolor justo dictum lacus, id feugiat nisl.
                    </p>
                </div>
            </Layout>
        )
    }
}
