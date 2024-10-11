import { useEffect, useState } from "react";

function generateUniqueId() {
  const timestamp = Date.now().toString();
  const randomBytes = crypto.getRandomValues(new Uint8Array(16));
  const randomHexString = Array.from(randomBytes)
    .map((byte) => byte.toString(16).padStart(2, "0"))
    .join("");

  return timestamp + randomHexString;
}

export const useDeviceID = () => {
  // const deviceid = useRef<string | null>(localStorage.getItem("deviceID"));
  const [deviceid, setDeviceid] = useState('');

  useEffect(() => {
    if (!deviceid) {
      const newdeviceid = generateUniqueId();
     setDeviceid(newdeviceid);
      localStorage.setItem("deviceID", newdeviceid);
    }
  }, [deviceid]);

  return deviceid as string;
};
