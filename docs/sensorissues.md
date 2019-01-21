## Fix sensor issues

On Xiaomi devices, sensor data is stored in a partition called *persist*. This partition is flashable and an image of it is included with all fastboot ROMs but devices made after 2016 don't allow you to modify it in fastboot mode, regardless of the status of the bootloader. Unfortunately, software issues may cause the sensors in the device to misbehave or stop working completely, but usually reflashing this partition solves these problems. If the partition is write protected in fastboot mode, you'll have to use Qualcomm's EDL mode to flash it. The EDL flashing script originally skips the persist partition but you can modify it to flash that as well when you are flashing with MiFlash.

### Instructions

**Requirements:** Qualcomm Snapdragon chipset

1. Download the latest MiFlash from [here](tools.md) and install it.

2. Download the Fastboot ROM you want to flash from [here](http://en.miui.com/a-234.html) and unzip it.

    **Note:** You might get a single .tar file after unzipping which has to be unzipped again in order to get the necessary files.

3. In the unzipped folder, enter the `images` folder and open the file `rawprogram0.xml` in a text editor (Notepad++ or VS Code recommended).

4. In the **line** that contains the string `label="persist"`, change `filename=""` to `filename="persist.img"`.

    If there's a line right below it, that contains the string `label="persistbak"`, change its `filename=""` to `filename="persist.img"` as well.

5. Save `rawprogram0.xml` and close the text editor.

6. Connect the device to your PC and [enter EDL mode](edl.md).

7. Launch MiFlash and with the Select button browse for the unzipped folder, then click Refresh. The device should appear as a COM port.

8. Click Flash and wait until the flashing sequence finishes.

9. Disconnect the device and hold the Power button until the device turns on.

    The first boot may take up to 15 minutes.