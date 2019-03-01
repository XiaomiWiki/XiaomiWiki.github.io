## Uninstall system apps

By default, MIUI comes with a lot of system apps that replace stock Android's own apps and also provide popular features that you would usually get from third-party apps from Google Play. Despite what they offer, many users see these apps as bloatware and want to get rid of them to clear up space and have less icons on the home screen. MIUI doesn't give the user the option to remove these apps and services but the Android Debug Bridge is capable of doing that.

### Instructions

1. Download and launch the Xiaomi ADB/Fastboot Tools from [here](Tools_for_Xiaomi_devices.md).

2. Connect the device in ADB mode. See the instructions [here](https://saki-eu.github.io/XiaomiADBFastbootTools/).

3. On the ADB tab, in the Uninstaller module, select all the apps and services you wish to remove and click Uninstall!

    **Note:** The Uninstaller only lists apps which aren't necessary for basic functionality, so removing them won't break the device.

    The process may take up to 60 seconds.

4. Afterwards, reboot the device to finalise the changes by clicking Reboot device to System in the top menu.