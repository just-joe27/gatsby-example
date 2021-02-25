import React from 'react'
import Layout from '../components/Layout'
import Header from '../examples/Header.js'
import { graphql } from "gatsby"

const examples = ({ data }) => {
    const {
        site: {
            info: {author},
        },
    } = data

    return (
        <Layout>
            <p>Hello from examples page</p>
            <Header />
            <h5>author: {author}</h5>
        </Layout>
    )
}

export const data = graphql `
    query {
        site {
            info: siteMetadata {
                person {
                    age
                    name
                    }
                author
                data
                description
                title
                }
            }
    }
`
export default examples
