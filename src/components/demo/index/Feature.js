import React from 'react';
import FeatureExplanation from './FeatureExplanation';
const Feature = ({ feature }) => {

    return (
        <section className="feature">
            <FeatureExplanation header={feature.header} paragraph={feature.paragraph} icon={feature.icon} />
            <div>PICTURES</div>

        </section>
    )
}

export default Feature
