[Index page](../)

## Flash TWRP & custom ROMs

TWRP is a custom recovery that replaces MiRecovery / the splash screen for the Mi PC Suite. A custom recovery mode gives the user more options to manage the device's system, more options to flash ROMs, wipe, or back up. A custom recovery, such as TWRP, is needed to flash ROMs, kernels, etc. or root.

### Use TWRP without flashing it

**Requirements:** [unlocked bootloader](Unlock_the_bootloader.md)

1. Download and if needed, unzip the image file of the recovery that you want to flash. If a custom ROM requires a specific build of TWRP to be flashed, that is noted by the developer on XDA.

    Devices are referred to by their codenames, if you don't know the codename of the device, see [this](https://i.imgur.com/Xsx69Qo.png).

    [Official TWRP builds](https://twrp.me/Devices/)

    [Unofficial TWRP builds](https://www.androidfilehost.com/?w=files&flid=50678)

2. Download and launch the Xiaomi ADB/Fastboot Tools from [here](Tools_for_Xiaomi_devices.md).

3. Connect the device in Fastboot mode. See the instructions [here](https://saki-eu.github.io/XiaomiADBFastbootTools/).

4. On the Fastboot tab, in the Flasher module browse for your recovery image, select the recovery partition and click Boot into image.

    **If TWRP comes up in Chinese**, change the language by tapping the button on the right.

    **If the device asks for decryption password**, input the PIN/password you use on your lock screen. If that doesn't work, format data in the Wipe menu, then reboot to TWRP.

5. When asked in TWRP, swipe to allow modifications and proceed with what you want to do in TWRP.

### Flash TWRP

**Requirements:** [unlocked bootloader](Unlock_the_bootloader.md)

**Note:** These instructions don't apply to Android One devices.

1. Download and if needed, unzip the image file of the recovery that you want to flash. If a custom ROM requires a specific build of TWRP to be flashed, that is noted by the developer on XDA.

    Devices are referred to by their codenames, if you don't know the codename of the device, see [this](https://i.imgur.com/Xsx69Qo.png).

    [Official TWRP builds](https://twrp.me/Devices/)

    [Unofficial TWRP builds](https://www.androidfilehost.com/?w=files&flid=50678)

2. Download and launch the Xiaomi ADB/Fastboot Tools from [here](Tools_for_Xiaomi_devices.md).

3. Connect the device in Fastboot mode. See the instructions [here](https://saki-eu.github.io/XiaomiADBFastbootTools/).

4. On the Fastboot tab, in the Flasher module, check the autoboot option, then browse for your recovery image, select the recovery partition and click Flash image.

    **Note:** If anti-rollback protection is enabled on the device, you have to disable the anti-rollback safeguard before flashing.

    **If TWRP comes up in Chinese**, change the language by tapping the button on the right.

    **If the device asks for decryption password**, input the PIN/password you use on your lock screen. If that doesn't work, format data in the Wipe menu, then reboot to TWRP.

5. When asked in TWRP, swipe to allow modifications and proceed with what you want to do in TWRP.

    **Warning:** To use official MIUI with TWRP flashed, you have to disable dm-verity by flashing Magisk or Lazyflasher. Dm-verity causes MIUI to clear TWRP on boot and may also bootloop the device.

### Clean install in TWRP

1. Enter TWRP.

    **If the device asks for decryption password**, ignore it, go to the Wipe menu, format data then reboot to TWRP.

    **Note:** TWRP is MTP enabled so if you connect the device to a PC, the internal and external storages become accessible.

2. Connect the device to your PC and transfer everything you want to flash to the device's internal or external storage.

3. Go to Wipe > Advanced Wipe and wipe **Cache**, **Dalvik Cache** and **System**.

4. Afterwards, go to the Install menu, browse for the things you transferred to the device and flash them. Recommended order:

    1. Flash the ROM.
    2. Flash OpenGApps (optional).
    3. Wipe **Data** in the Wipe menu.
    4. Flash everything else (optional).
    5. Wipe **Internal Storage** in the Wipe menu.

5. Once you're done with everything, reboot to the system.

### Update in TWRP

1. Enter TWRP.

    **If the device asks for decryption password**, input the PIN/password you use on your lock screen. If that doesn't work, format data in the Wipe menu, then reboot to TWRP.

    **Note:** TWRP is MTP enabled so if you connect the device to a PC, the internal and external storages become accessible.

2. Connect the device to your PC and transfer everything you want to flash to the device's internal or external storage.

3. Go to the Install menu, browse for the things you transferred to the device and flash them.

4. Once you're done flashing, wipe **Cache** and **Dalvik Cache**, then reboot to the system.