import winston from 'winston';

// 定义日志级别和格式
const logger = winston.createLogger({
  level: 'info', // 日志级别
  format: winston.format.combine(
    winston.format.timestamp(), // 添加时间戳
    winston.format.printf(({ timestamp, level, message }) => {
      return `${timestamp} ${level}: ${message}`;
    })
  ),
  transports: [
    new winston.transports.Console(), // 将日志输出到控制台
    new winston.transports.File({ filename: 'logs/app.log' }) // 将日志输出到文件
  ]
});

export default logger;
