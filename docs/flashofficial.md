## Flash official ROMs

### Flash Recovery ROMs in MIUI

1. Download the Recovery ROM you want to flash from [here](http://en.miui.com/download.html).

2. Use the device to download the ROM or connect it to your PC, enable MTP mode and transfer the downloaded ZIP to it.

3. Open the Updater app or go to Settings > About phone > System update and browse for the ZIP by tapping options > Choose update package.

4. Confirm your selection and install the ROM.

### Flash Recovery ROMs in Recovery mode using XiaomiADB

1. Download and unzip XiaomiADB from [here](tools.md).

2. Download the Recovery ROM you want to flash from [here](http://en.miui.com/download.html).

3. Enter MiRecovery by holding power and volume up simultaneously for 5-10 seconds, then select the third option (Connect with MiAssistant / 连接小米助手).

4. Connect the device to your PC and open a command prompt in the unzipped folder by typing `cmd` into the address bar and hitting enter.

5. Type `xiaomiadb sideload_miui` into the command prompt, then drag and drop the downloaded ZIP on the command prompt window and hit Enter.

6. Wait until the installation finishes.

7. Disconnect the device and wait for it to boot in.

    The first boot may take up to 15 minutes.

### Flash Fastboot ROMs in Fastboot mode using the Xiaomi ADB/Fastboot Tools

**Requirements:** [unlocked bootloader](bootloader.md)

1. Download the Xiaomi ADB/Fastboot Tools from [here](tools.md).

2. Connect the device in Fastboot mode. See the instructions [here](https://saki-eu.github.io/XiaomiADBFastbootTools/).

3. On the Fastboot tab, in the ROM Downloader module, input the device's codename, select the branch you'd like to download and click Download ROM.

4. After the ROM's been downloaded, unzip it.

    **Note:** You might get a single .tar file after unzipping which has to be unzipped again in order to get the necessary files.

5. On the Fastboot tab, in the Flasher module, select the unzipped ROM folder, choose an installation method and click Flash ROM.

6. Wait until the flashing sequence finishes, then disconnect the device and wait for it to boot in.

    The first boot may take up to 15 minutes.

### Flash Fastboot ROMs in Fastboot mode using MiFlash

**Requirements:** [unlocked bootloader](bootloader.md)

1. Download the latest MiFlash from [here](tools.md) and install it.

2. Download the Fastboot ROM you want to flash from [here](http://en.miui.com/a-234.html) and unzip it.

    **Note:** You might get a single .tar file after unzipping which has to be unzipped again in order to get the necessary files.

3. Connect the device to your PC and enter Fastboot mode by holding Power and Vol- simultaneously until the Fastboot splash screen comes up.

4. Launch MiFlash and browse for the unzipped folder by clicking the Select button. Make sure the file path has no spaces in it! 

5. Click Refresh and select a flashing option at the bottom of the window.

    `clean all` to perform a clean install without locking the bootloader.

    `save user data` to update your current ROM. (No migration between MIUI branches!)

    `clean all and lock` to perform a clean install and lock the bootloader.

6. Click Flash and wait until the flashing sequence finishes.

7. Disconnect the device and wait for it to boot in.

    The first boot may take up to 15 minutes.

### Flash Fastboot ROMs in EDL mode using MiFlash

1. Download the latest MiFlash from [here](tools.md) and install it.

2. Launch MiFlash and install the necessary drivers by clicking Driver > Install/Reinstall in the top menu.

3. Download the Fastboot ROM you want to flash from [here](http://en.miui.com/a-234.html) and unzip it.

    **Note:** You might get a single .tar file after unzipping which has to be unzipped again in order to get the necessary files.

4. Connect the device to your PC and enter EDL mode by following the See the instructions [here](edl.md).

5. Launch MiFlash and browse for the unzipped folder by clicking the Select button. Make sure the file path has no spaces in it! 

6. Click Refresh. The device should appear as a COM port.

7. Click Flash and wait until the flashing sequence finishes.

8. Disconnect the device and hold the Power button until the it turns on.

    The first boot may take up to 15 minutes.