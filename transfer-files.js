const FtpDeploy = require("ftp-deploy");
const ftpDeploy = new FtpDeploy();

const config = {
  user: process.env.FTP_USERNAME,
  password: process.env.FTP_PASSWORD,
  host: process.env.FTP_HOST,
  port: 21,
  localRoot: ".next",
  remoteRoot: "/accident",
};

ftpDeploy
  .deploy(config)
  .then(() => console.log("Files transferred successfully!"))
  .catch((err) =>
    console.error("Error occurred while transferring files:", err)
  );
