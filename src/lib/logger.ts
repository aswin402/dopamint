type LogLevel = "info" | "warn" | "error" | "debug"

const isDev = import.meta.env.DEV

const styles: Record<LogLevel, string> = {
  info: "color: #3b82f6; font-weight: 600;",
  warn: "color: #f59e0b; font-weight: 600;",
  error: "color: #ef4444; font-weight: 600;",
  debug: "color: #10b981; font-weight: 600;",
}

const formatMessage = (level: LogLevel, message: string) => {
  const prefix = `[WEB] ${level.toUpperCase()}`
  return [`%c${prefix} %c${message}`, styles[level], "color: inherit; font-weight: normal;"]
}

function log(level: LogLevel, message: string, data?: unknown) {
  if (!isDev && level === "debug") return

  const [prompt, style, reset] = formatMessage(level, message)

  if (data === undefined) {
    if (level === "error") console.error(prompt, style, reset)
    else if (level === "warn") console.warn(prompt, style, reset)
    else console.log(prompt, style, reset)
    return
  }

  // Handle data with grouping for a cleaner console
  console.groupCollapsed(prompt, style, reset)
  
  if (data instanceof Error) {
    console.error(data.message)
    if (data.stack) console.debug(data.stack)
  } else {
    console.dir(data)
  }
  
  console.groupEnd()
}

export const logger = {
  info: (msg: string, data?: unknown) => log("info", msg, data),
  warn: (msg: string, data?: unknown) => log("warn", msg, data),
  error: (msg: string, data?: unknown) => log("error", msg, data),
  debug: (msg: string, data?: unknown) => log("debug", msg, data),
}