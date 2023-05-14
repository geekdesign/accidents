module.exports = {
  host: process.env.FTP_HOST,
  username: process.env.FTP_USERNAME,
  password: process.env.FTP_PASSWORD,
  localRoot: __dirname + "/.next",
  remoteRoot: "/accident",
};
