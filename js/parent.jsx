import React from 'react';

export default React.createClass({
    componentDidMount: function(){
        $('.menu .item').tab();
    },
    render: function(){
        return (
            <div id='container' className='data-container'>
                <div id='sidebar'>
                    <div className='ui huge fluid inverted vertical menu'>
                        <a className='item' data-tab='about'>About</a>
                        <a className='item' data-tab='projects'>Projects</a>
                        <a className='item' data-tab='contact'>Contact</a>
                    </div>
                </div>
                <div id='content'>
                    <div className='ui tab' data-tab='about'>
                        This is the about section
                    </div>
                    <div className='ui tab' data-tab='projects'>
                        This is the projects section
                    </div>
                    <div className='ui tab' data-tab='contact'>
                        This is the contact section
                    </div>
                </div>
            </div>
        );
    }
})
