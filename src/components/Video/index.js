import React from 'react';
import { connect } from 'react-redux';

// import { Container } from './styles';

const Video = ({ activeModule, activeLesson }) => (
    <div>
        <strong>Módulo { activeModule.title }</strong>
        <span>Aula { activeLesson.title }</span>
    </div>
);

export default connect(state => ({
    activeModule: state.course.activeModules,
    activeLesson: state.course.activeLessons, 
}))(Video);

