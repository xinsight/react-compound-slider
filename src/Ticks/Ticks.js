import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Ticks extends Component {
  render() {
    const { children, values, scale, count, emitMouse, emitTouch } = this.props
    const ticks = (values ? values : scale.ticks(count)).map(value => {
      return {
        id: `$$-${value}`,
        value,
        percent: scale(value),
      }
    })

    const renderedChildren = children({ ticks, emitMouse, emitTouch })
    return renderedChildren && React.Children.only(renderedChildren)
  }
}

Ticks.propTypes = {
  /** @ignore */
  scale: PropTypes.func,
  /**
   * Approximate number of ticks you want to render.
   * If you supply your own ticks using the values prop this prop has no effect.
   */
  count: PropTypes.number,
  /**
   * The values prop should be an array of unique numbers.
   * Use this prop if you want to specify your own tick values instead of ticks generated by the slider.
   * The numbers should be valid numbers in the domain and correspond to the step value.
   * Invalid values will be coerced to the closet matching value in the domain.
   */
  values: PropTypes.array,
  /** @ignore */
  emitMouse: PropTypes.func,
  /** @ignore */
  emitTouch: PropTypes.func,
  /**
   * A function to render the ticks.
   * The function receives an object with an array of ticks.
   * `({ ticks  }): element`
   */
  children: PropTypes.func.isRequired,
}

Ticks.defaultProps = {
  count: 10,
}

export default Ticks
