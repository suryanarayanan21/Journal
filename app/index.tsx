import { CameraView, useCameraPermissions } from "expo-camera";
import { useEffect } from "react";
import { Text } from "react-native";

export default function HomeScreen() {
  const [permission, requestPermission] = useCameraPermissions();

  useEffect(() => {
    if (!permission) return;
    if (!permission.granted)
      (async () => {
        await requestPermission();
      })();
  }, [permission]);

  if (!permission) {
    return <Text>Loading...</Text>;
  }

  if (!permission.granted) {
    return <Text>Please allow camera access...</Text>;
  }

  return <CameraView style={{ flex: 1 }} facing={"back"} />;
}
