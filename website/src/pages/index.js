import React from "react"
import clsx from "clsx"
import Layout from "@theme/Layout"
import Link from "@docusaurus/Link"
import useDocusaurusContext from "@docusaurus/useDocusaurusContext"
import useBaseUrl from "@docusaurus/useBaseUrl"
import styles from "./styles.module.css"
import { BuyMeACoffee } from "../components/bmc"

const features = [
    {
        title: "Quickly Get Started",
        imageUrl: "img/undraw_docusaurus_mountain.svg",
        description: <></>,
    },
    {
        title: "Single Point Of Referece",
        imageUrl: "img/undraw_docusaurus_tree.svg",
        description: <></>,
    },
    {
        title: "Productivity Focused Documentation",
        imageUrl: "img/undraw_docusaurus_react.svg",
        description: <></>,
    },
]

const Feature = ({ imageUrl, title, description }) => {
    const imgUrl = useBaseUrl(imageUrl)
    return (
        <div className={clsx("col col--4", styles.feature)}>
            {imgUrl && (
                <div className="text--center">
                    <img className={styles.featureImage} src={imgUrl} alt={title} />
                </div>
            )}
            <h3 className="text--center">{title}</h3>
            <p>{description}</p>
        </div>
    )
}

const Home = () => {
    const context = useDocusaurusContext()
    const { siteConfig = {} } = context
    return (
        <Layout title={`${siteConfig.title}`} description="Nim Tutorials, Reference and Guides">
            <header className={clsx("hero hero--primary", styles.heroBanner)}>
                <div className="container">
                    <h1 className="hero__title">{siteConfig.title}</h1>
                    <p className="hero__subtitle">{siteConfig.tagline}</p>
                    <div className={styles.buttons}>
                        <Link
                            className={clsx(
                                "button button--outline button--secondary button--lg",
                                styles.getStarted
                            )}
                            to={useBaseUrl("docs/")}
                        >
                            Take me there
                        </Link>
                    </div>
                </div>
            </header>
            <main>
                {features && features.length > 0 && (
                    <section className={styles.features}>
                        <div className="container">
                            <div className="row">
                                {features.map((props, idx) => (
                                    <Feature key={idx} {...props} />
                                ))}
                            </div>
                        </div>
                    </section>
                )}
                <div
                    style={{
                        display: "flex",
                        width: "100%",
                        justifyContent: "center",
                        flexDirection: "column",
                        alignItems: "center",
                    }}
                >
                    <p>
                        If you find the information on this site useful please consider sharing it
                    </p>
                </div>
            </main>
        </Layout>
    )
}

export default Home
