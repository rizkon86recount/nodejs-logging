import winston from "winston";

test("logging with combine format", () => {
  const logger = winston.createLogger({
    level: "info",
    format: winston.format.combine(
      winston.format.timestamp(),
      winston.format.ms(),
      winston.format.json()
    ),
    transports: [new winston.transports.Console({})],
  });

  logger.info("hello format");
  logger.warn("hello format");
  logger.error("hello format");
});
