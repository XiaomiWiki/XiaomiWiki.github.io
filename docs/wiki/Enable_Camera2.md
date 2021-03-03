[Index page](../)

## Enable Camera2

Some camera apps on Android, like the modded Google Camera, use Android's [Camera2 API](https://developer.android.com/reference/android/hardware/camera2/package-summary) but it's disabled on Xiaomi devices by default (with the exception of the Mi 5s). If Camera2 is disabled, such apps (like GCam) don't work and crash on launch. Thankfully, TWRP lets you modify build.prop in ADB mode and thus enable Camera2.

### Instructions

**Requirements:** [TWRP](Flash_TWRP_and_custom_ROMs.md)

1. Enter TWRP.

    **If the device asks for decryption password**, input the PIN/password you use on your lock screen.

2. Keep the system read only, when asked.

3. Download and launch the Xiaomi ADB/Fastboot Tools from [here](Tools_for_Xiaomi_devices.md).

4. Connect the device to your computer. The application should detect it automatically.

5. On the ADB tab, in the Camera2 module, enable camera2, as well as EIS if you want to.

6. If successful, reboot the device by clicking Reboot device to System in the top menu.

    After successfully enabling Camera2, you can install a Google Camera port from [here](https://www.celsoazevedo.com/files/android/google-camera/). Be advised, however, that different versions work on different models and different ROMs so there's no universal option, but you can find recommendations for a variety of devices [here](https://www.xda-developers.com/google-camera-port-hub/).