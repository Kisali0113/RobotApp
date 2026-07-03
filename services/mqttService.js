import mqtt from "mqtt";

const client = mqtt.connect("ws://YOUR_PI_IP:9001");

client.on("connect", () => {
  console.log("Connected to MQTT");
});

client.on("error", (err) => {
  console.log(err);
});

export default client;