import React from 'react';
import {expect} from 'chai';
import {shallow, mount, render} from 'enzyme';
import sinon from 'sinon';

import App, {Content, withValue} from './index';

describe('/src/components/app/index.js', () => {
    it('should call onTest when mounting', () => {
        const spy = sinon.spy();
        shallow(
            <App onTest={spy} />
        );

        expect(spy.called).to.equals(true);
    });

    it('should render value from render prop', () => {
        const wrapper = shallow(
            <App onTest={() => {}} />
        );
        const childWrapper = wrapper
            .find(Content)
            .renderProp('render')({value: '2'});

        console.log(wrapper.debug());

        expect(childWrapper.text()).to.equals('2');
    });

    it('should dive', () => {
        const NewApp = withValue('777')(App);
        const wrapper = shallow(
            <NewApp onTest={() => {}} />
        );

        console.log(wrapper.dive().debug());
        expect(wrapper.dive().find('h1')).to.be.present();

        expect(wrapper.props().value).to.equals('777');
    });
});