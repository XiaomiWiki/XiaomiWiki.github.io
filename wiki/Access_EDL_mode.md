[Index page](../)

## Access EDL mode

EDL (Emergency Download) mode is used in Qualcomm-based devices for unbricking/flashing purposes. EDL mode bypasses the bootloader and MiFlash can interact with it. There are several ways to access EDL mode but they usually require the bootloader to be unlocked.

**Note: EDL mode is not accessible on locked devices that were released in 2017 or later.**

### ADB/Fastboot method

1. Download and launch the Xiaomi ADB/Fastboot Tools from [here](Tools_for_Xiaomi_devices.md).

2. Connect the device in ADB or Fastboot mode. See the instructions [here](https://szaki.github.io/XiaomiADBFastbootTools/).

3. Reboot the device to EDL mode by clicking Reboot device to EDL in the top menu.

4. Upon entering EDL mode, the phone's screen should turn blank and the notification LED might also be blinking.

    To exit EDL mode, hold the Power button for 5-10 seconds.

### Fastboot method for the Redmi Note 3 SD / Special Edition

1. Download and extract [this package](https://www.androidfilehost.com/?fid=24591000424940129) on your PC.

2. Enter fastboot mode by holding Power and Vol- at the same time. Wait until the Mi Bunny appears, then connect the device to the PC.

3. Run reboot.bat in the extracted package. A command prompt will appear. Press a key to reboot the device to EDL mode.

4. Upon entering EDL mode, the phone's screen should turn blank and the notification LED might also be blinking.

    To exit EDL mode, hold the Power button for about 10 seconds.

### Recovery menu method for the Redmi 3/4 series

1. Enter the recovery menu by holding Power and Vol+ at the same time until recovery menu comes up.

2. In the recovery menu, select Download Mode.

3. Upon entering EDL mode, the phone's screen should turn blank and the notification LED might also be blinking.

    To exit EDL mode, hold the Power button for about 10 seconds.