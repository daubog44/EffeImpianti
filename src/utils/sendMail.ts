interface arguments {}

export default function sendMail() {
  let configOptions = {
    host: "smtp.example.com",
    port: 587,
    tls: {
      rejectUnauthorized: true,
      minVersion: "TLSv1.2",
    },
  };
}
