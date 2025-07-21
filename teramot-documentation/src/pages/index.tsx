import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          Welcome to Teramot Documentation
        </Heading>
        <p className="hero__subtitle">
          Technical docs, compliance, AI API integration, product updates, and service status.
        </p>
        <div className={styles.buttons}>
          <Link className="button button--primary button--lg" to="/docs/intro">
            Get Started
          </Link>
          <Link className="button button--secondary button--lg" to="/api">
            API Reference
          </Link>
          <Link className="button button--secondary button--lg" to="/compliance">
            Compliance
          </Link>
        </div>
      </div>
    </header>
  );
}

function FeatureSection({title, description, imageUrl, link, reverse = false}) {
  return (
    <section className={clsx(styles.featureSection, reverse && styles.featureSectionReverse)}>
      <div className="container">
        <div className={styles.featureImage}>
          <img src={imageUrl} alt={title} />
        </div>
        <div className={styles.featureContent}>
          <Heading as="h2" className={styles.featureTitle}>{title}</Heading>
          <p>{description}</p>
          {link && (
            <Link className="button button--primary" to={link}>Learn More</Link>
          )}
        </div>
      </div>
    </section>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Technical docs, compliance, AI API integration, product updates, and service status for Teramot">
      <HomepageHeader />
      <main>
        <FeatureSection
          title="AI-Driven API"
          description="Connect securely and efficiently to our AI-powered corporate data API."
          imageUrl="img/Learning-pana.svg"
          link="/api"
        />
        <FeatureSection
          title="Security & Compliance"
          description="Maintain compliance with comprehensive ISO 27001, SOC 2 documentation, and more."
          imageUrl="img/Privacy-policy-bro.svg"
          link="/compliance"
          reverse
        />
        <FeatureSection
          title="Real-Time Service Status"
          description="Check the health and real-time status of our APIs and services instantly."
          imageUrl="img/Data-extraction-bro.svg"
          link="/status"
        />
        <FeatureSection
          title="Developer Blog & Updates"
          description="Stay informed with regular updates on product evolution and feature enhancements."
          imageUrl="img/Business-Plan-amico.svg"
          link="/blog"
          reverse
        />
      </main>
    </Layout>
  );
}
