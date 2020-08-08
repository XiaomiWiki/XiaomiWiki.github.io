[Index page](../)

## Fix sensor issues

On Xiaomi devices, sensor data is stored in a partition called *persist*. This partition is flashable and an image of it is included with all fastboot ROMs but devices made after 2016 don't allow you to modify it in fastboot mode, regardless of the status of the bootloader. Unfortunately, software issues may cause the sensors in the device to misbehave or stop working completely, but usually reflashing this partition solves these problems. If the partition is write protected in fastboot mode, you'll have to use Qualcomm's EDL mode or a custom recovery to flash it. The EDL flashing script originally skips the persist partition but you can modify it to flash that as well when you are flashing with MiFlash.

**Warning:** reflashing the persist file might cause your device to lose the Widevine L1 DRM certification (used for HD streaming of DRM protected content like that from Netflix, Amazon Prime Video, etc...), proceed with caution! 

## Instructions

### Reflashing persist.img using a custom recovery 

**Requirements:** An [unlocked bootloader](Unlock_the_bootloader.md), TWRP or some other TWRP-based custom recovery (OrangeFox, PBRP, etc..) 

**Note:** For simplicity's sake, this guide will be focusing just on using TWRP, but the process should be more or less the same with any TWRP-based recovery.

1. Download the Fastboot ROM you want to flash from [here](https://xiaomifirmwareupdater.com/miui/) and unzip it.

    **Note:** You might get a single .tar file after unzipping which has to be unzipped again in order to get the necessary files.
		
2. Extract the `persist.img` image file from the `images` folder inside the unzipped Fastboot ROM archive.

3. [Download the latest TWRP image and get it up and running on the device](Flash_TWRP_and_custom_ROMs.md) (either by booting it temporarily or flashing)

4. Enter TWRP.

    **If the device asks for decryption password**, ignore it, go to the Wipe menu, format data then reboot to TWRP again.

    **Note:** TWRP is MTP enabled so if you connect the device to a PC, the internal and external storages become accessible.

5. Connect the device to your PC and transfer the `persist.img` file to the device's internal or external storage.
		
6. Navigate to the Install menu, browse for the `persist.img` file you transferred to the device and flash it to the `Persist` partition. 
    
7. Once the flashing process has completed, reboot to the system.

### Reflashing persist.img using EDL mode 

**Requirements:** Qualcomm Snapdragon chipset

1. Download the latest MiFlash from [here](Tools_for_Xiaomi_devices.md) and install it.

2. Download the Fastboot ROM you want to flash from [here](https://xiaomifirmwareupdater.com/miui/) and unzip it.

    **Note:** You might get a single .tar file after unzipping which has to be unzipped again in order to get the necessary files.

3. In the unzipped folder, enter the `images` folder and open the file `rawprogram0.xml` in a text editor (Notepad++ or VS Code recommended).

4. In the **line** that contains the string `label="persist"`, change `filename=""` to `filename="persist.img"`.

    If there's a line right below it, that contains the string `label="persistbak"`, change its `filename=""` to `filename="persist.img"` as well.

5. Save `rawprogram0.xml` and close the text editor.

6. Connect the device to your PC and [enter EDL mode](Access_EDL_mode.md).

7. Launch MiFlash and with the Select button browse for the unzipped folder, then click Refresh. The device should appear as a COM port.

8. Click Flash and wait until the flashing sequence finishes.

9. Disconnect the device and hold the Power button until the device turns on.

    The first boot may take up to 15 minutes.
