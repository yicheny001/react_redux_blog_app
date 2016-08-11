import React, {Component} from 'react';
import { bindActionCreators } from 'redux'
import { connect} from 'react-redux'

const PostLis = ({title}) => (
    <li>
    {title}
    </li>
)

export default PostLis
