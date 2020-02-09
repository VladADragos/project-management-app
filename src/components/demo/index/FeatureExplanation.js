import React from 'react'

const FeatureExplanation = ({ header, paragraph, icon }) => {
    return (
        <section className="feature-explanation">
            <div className="feature-explanation__icon-container">
                <i className={`fas ${icon} fa-fw`} title="chat"></i>
            </div>
            <div className="feature-explanation__text-container">
                <h2 className="feature-explanation__header">
                    {header}
                </h2>
                <p className="feature-explanation__paragraph">
                    {paragraph}
                </p>
            </div>
        </section>
    )
}

export default FeatureExplanation
