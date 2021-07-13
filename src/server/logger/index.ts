import logger from "pino";

const log = logger({
  prettyPrint: true,
  base: {
    pid: false
  },
  timestamp: () => `${new Date().toString()}`
});

export default log;
