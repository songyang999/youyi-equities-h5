import dev from './env.dev.js'
import pre from './env.pre.js'
import prod from './env.prod.js'

const NODE_ENV = import.meta.env.MODE

let ENV_VAR = null
if (NODE_ENV === 'dev') {
  ENV_VAR = dev
} else if (NODE_ENV === 'pre') {
  ENV_VAR = pre
} else if (NODE_ENV === 'prod') {
  ENV_VAR = prod
}

export default ENV_VAR