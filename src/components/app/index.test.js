import React from 'react';
import {expect} from 'chai';
import {mount} from 'enzyme';
import sinon from 'sinon';

import App from './index';

describe('/src/components/app/index.js', () => {
    it('should work', () => {
        const spy = sinon.spy();
        const wrapper = mount(
            <App
                onTest={spy}
            />
        );

        expect(spy.called).to.equals(true);
    });
});