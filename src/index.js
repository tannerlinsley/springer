const msPerFrame = 16
const sampleDuration = 10000
const sampleMsPerFrame = msPerFrame / (sampleDuration)

let reusedTuple = [0, 0]

export default function Springer (tension = 0.5, wobble = 0.5) {
  const stiffness = Math.min(Math.max(350 * tension, 20), 350)
  const damping = Math.min(Math.max(40 - (40 * wobble), 1), 40)
  const steps = []

  let progress = 0
  let velocity = 0

  while (progress !== sampleDuration || velocity !== 0) {
    [progress, velocity] = stepper(
      progress,
      sampleDuration,
      velocity,
      stiffness,
      damping
    )
    steps.push(progress / sampleDuration)
  }

  return (i) => {
    return steps[Math.ceil(i * (steps.length - 1))]
  }
}

// Inspired by https://github.com/chenglou/react-motion/blob/master/src/stepper.js
function stepper (
  value,
  destination,
  velocity,
  stiffness,
  damping
) {
  const spring = -stiffness * (value - destination)
  const damper = -damping * velocity
  const a = spring + damper
  const newVelocity = velocity + a * sampleMsPerFrame
  const newValue = value + newVelocity * sampleMsPerFrame

  if (Math.abs(newVelocity) < 1 && Math.abs(newValue - destination) < 1) {
    reusedTuple[0] = destination
    reusedTuple[1] = 0
    return reusedTuple
  }

  reusedTuple[0] = newValue
  reusedTuple[1] = newVelocity

  return reusedTuple
}
