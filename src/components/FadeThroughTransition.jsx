import * as React from 'react'
import { Transition } from 'react-transition-group'

// Material Design 3 "fade through" pattern (see
// https://m3.material.io/styles/motion/transitions/transition-patterns):
// content fades in while scaling up slightly from 96% to 100%, and fades
// out with a slight scale-down on exit, rather than sliding directionally.
// Durations/easings follow the M3 emphasized motion tokens.
// `prefers-reduced-motion` is already handled globally — see the
// `transitionDuration: '0.001ms !important'` rule in theme.js, which wins
// the CSS cascade over this component's inline (non-important) transition.
const ENTER_DURATION = 250
const EXIT_DURATION = 200
const EMPHASIZED_DECELERATE = 'cubic-bezier(0.05, 0.7, 0.1, 1)'
const EMPHASIZED_ACCELERATE = 'cubic-bezier(0.3, 0, 0.8, 0.15)'

const styles = {
  entering: { opacity: 1, transform: 'scale(1)' },
  entered: { opacity: 1, transform: 'scale(1)' },
  exiting: { opacity: 0, transform: 'scale(0.96)' },
  exited: { opacity: 0, transform: 'scale(0.96)' },
}

function reflow(node) {
  return node.scrollTop
}

const FadeThroughTransition = React.forwardRef(function FadeThroughTransition(props, ref) {
  const {
    children,
    in: inProp,
    appear = true,
    timeout = { enter: ENTER_DURATION, exit: EXIT_DURATION },
    onEnter,
    onExit,
    onExited,
    // Consumed by Drawer's default Slide transition — not applicable here.
    direction: _direction,
    easing: _easing,
    ...other
  } = props
  const nodeRef = React.useRef(null)

  const handleEnter = (node, isAppearing) => {
    reflow(node)
    node.style.transition = [
      `opacity ${ENTER_DURATION}ms ${EMPHASIZED_DECELERATE}`,
      `transform ${ENTER_DURATION}ms ${EMPHASIZED_DECELERATE}`,
    ].join(', ')
    onEnter?.(node, isAppearing)
  }

  const handleExit = (node) => {
    node.style.transition = [
      `opacity ${EXIT_DURATION}ms ${EMPHASIZED_ACCELERATE}`,
      `transform ${EXIT_DURATION}ms ${EMPHASIZED_ACCELERATE}`,
    ].join(', ')
    onExit?.(node)
  }

  return (
    <Transition
      ref={ref}
      nodeRef={nodeRef}
      appear={appear}
      in={inProp}
      timeout={timeout}
      onEnter={handleEnter}
      onExit={handleExit}
      onExited={onExited}
      {...other}
    >
      {(state) =>
        React.cloneElement(children, {
          ref: nodeRef,
          style: {
            opacity: 0,
            transform: 'scale(0.96)',
            transformOrigin: 'top right',
            ...styles[state],
            ...children.props.style,
          },
        })
      }
    </Transition>
  )
})

export default FadeThroughTransition
