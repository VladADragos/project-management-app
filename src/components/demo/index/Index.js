import React from 'react'
import { profile } from './features-Data';
import Feature from './Feature';
const Index = () => {
    return (
        <main className="demo-index">
            <h1 className="demo-index__header">Welcome Demo user</h1>

            <Feature feature={profile} />
            <Feature feature={profile} />
            <Feature feature={profile} />

        </main>
    )
}

export default Index
