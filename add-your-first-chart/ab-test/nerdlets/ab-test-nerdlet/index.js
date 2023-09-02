import React from 'react';
import NewsletterSignups from '../../newsletter-signups';

// https://docs.newrelic.com/docs/new-relic-programmable-platform-introduction

export default class AbTestNerdletNerdlet extends React.Component {
    render() {
        return <div>
            <NewsletterSignups />
        </div>
    }
}
