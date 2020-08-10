import React, { Component } from 'react'
import PropTypes from 'prop-types'

// Component wrapper that hides modal if you click outside
export default class ModalWrapper extends Component {
  constructor(props) {
    super(props)

    this.setWrapperRef = this.setWrapperRef.bind(this)
    this.handleClickOutside = this.handleClickOutside.bind(this)
  }

  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside)
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside)
  }


// Set the wrapper ref
  setWrapperRef(node) {
    this.wrapperRef = node
  }

  // Hide modal if clicked in the wrapper
  handleClickOutside(event) {
    if (this.wrapperRef && !this.wrapperRef.contains(event.target) && this.props.show) {
      this.props.hideModal()
    }
  }

  render() {
    return <div ref={this.setWrapperRef}>{this.props.children}</div>
  }
}

ModalWrapper.propTypes = {
  children: PropTypes.element.isRequired,
};