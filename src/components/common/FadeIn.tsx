import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface FadeInProps {
  children: ReactNode
  direction?: 'up' | 'down' | 'left' | 'right'
  duration?: number
  delay?: number
}

const FadeIn = ({
  children,
  direction = 'up',
  duration = 0.5,
  delay = 0,
}: FadeInProps) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const getVariants = () => {
    const directions = {
      up: { y: 40, x: 0 },
      down: { y: -40, x: 0 },
      left: { x: 40, y: 0 },
      right: { x: -40, y: 0 },
    }

    return {
      hidden: {
        opacity: 0,
        ...directions[direction],
      },
      visible: {
        opacity: 1,
        x: 0,
        y: 0,
        transition: {
          duration,
          delay,
          ease: 'easeOut',
        },
      },
    }
  }

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={getVariants()}
    >
      {children}
    </motion.div>
  )
}

export default FadeIn