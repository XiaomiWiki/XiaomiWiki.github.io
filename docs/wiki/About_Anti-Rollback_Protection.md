[Index page](../)

## About Anti-Rollback Protection

Anti-Rollback Protection (ARP) was introduced by Google in Android 8.0 (Oreo) and they made its implementation mandatory for devices launching with Android 9.0 Pie. ARP is a security countermeasure aiming to prevent devices from booting older, less-secure versions of Android. In Google's implementation, ARP is disabled if the bootloader is unlocked, whereas on Xiaomi devices it cannot be disabled once it's enabled by a ROM that implements it. Xiaomi likely made this decision to stop resellers from exploiting vulnerabilities found in older versions of MIUI.

### Checking if ARP is enabled

1. Download and launch the Xiaomi ADB/Fastboot Tools from [here](Tools_for_Xiaomi_devices.md).

2. Connect the device in Fastboot mode. See the instructions [here](https://szaki.github.io/XiaomiADBFastbootTools/).

If don't get any number for anti version, ARP isn't enabled. If you get a number, ARP is enabled.

### Anti version explained

Having an anti version means that you cannot flash whatever ROM you want, only ROMs that have an anti version equal to or higher than the device's.

* Flashing a ROM with an anti version higher than the device's will set it to the higher value.
* Flashing a ROM with an anti version equal to the device's won't change anything.
* Flashing a ROM with an anti version lower than the device's will result in a hard brick.

For now, only Fastboot ROMs check for anti version and act accordingly. They will abort without making any changes if the device's anti version is higher than its own.

Custom ROMs are unaffected by ARP and flashing them won't brick the device or change the anti version.