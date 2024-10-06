import { useEffect, useRef } from "react";

function generateUniqueId() {
  const timestamp = Date.now().toString();
  const randomBytes = crypto.getRandomValues(new Uint8Array(16));
  const randomHexString = Array.from(randomBytes)
    .map((byte) => byte.toString(16).padStart(2, "0"))
    .join("");

  return timestamp + randomHexString;
}

export const useDeviceID = () => {
  const deviceid = useRef<string | null>(localStorage.getItem("deviceID"));

  useEffect(() => {
    if (!deviceid.current) {
      const newdeviceid = generateUniqueId();
      deviceid.current = newdeviceid;
      localStorage.setItem("deviceID", newdeviceid);
    }
  }, [deviceid]);

  return deviceid.current as string;
};
