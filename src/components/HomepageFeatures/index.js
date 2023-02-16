import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "开箱即用",
    Svg: require("@site/static/img/undraw_docusaurus_mountain.svg").default,
    description: <>配置异常简单，适合菜鸟入门使用。</>,
  },
  {
    title: "配置灵活",
    Svg: require("@site/static/img/undraw_docusaurus_tree.svg").default,
    description: (
      <>
        无须二次配置即能使用组件的基本工功能.能通过预留的配置属性自定义组件功能。
      </>
    ),
  },
  {
    title: "功能简洁",
    Svg: require("@site/static/img/undraw_docusaurus_react.svg").default,
    description: <>增强扩展，不影响原生功能.</>,
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
        <div className={styles.tip}>
          <p> 午静携侣觅野菜</p> <p> 黄昏抱猫向斜阳</p> <p> 当时只道是寻常</p>
        </div>
      </div>
    </section>
  );
}
