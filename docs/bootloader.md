## Unlock & lock the bootloader

Starting with the Redmi Note 3 MTK, Xiaomi decided to lock its devices' bootloaders. As such, recent devices come with locked bootloaders out of the box. A locked bootloader prevents the user from flashing things in fastboot mode, including flashing custom recovery modes and custom ROMs. Fastboot mode **is** the bootloader, so if it is locked, changes to the device cannot be made in this mode.

### Unlock MIUI devices

1. Go to Settings > Mi Account and log in with your Mi Account.

2. Go to Settings > About phone and tap MIUI version 7 times to enable developer options.

3. Go to Settings > Additional settings > Developer options > Mi Unlock status and add your Mi account and device.

    **You will only be able to proceed if it's been more than 72 or 360 hours that you successfully added your account and device. The waiting time depends on the phone model, you can check how much time is remaining by attempting to unlock.**

4. Download, extract and run [MiUnlock](tools.md).

5. Log in with your Mi account.

6. Enter fastboot mode on the device by holding Power and Vol- until the splash screen comes up, then connect it to your PC.

7. Follow the instructions that appear on-screen and unlock the bootloader.

    **Note:** Unlocking the bootloader will result in a factory reset.

### Unlock Android One devices

1. Go to Settings > System > About phone and tap Build number 7 times to enable developer options.

2. Go to Settings > System > Developer options and enable OEM unlocking.

3. Download and launch the Xiaomi ADB/Fastboot Tools from [here](tools.md).

4. Connect the device in Fastboot mode. See the instructions [here](https://saki-eu.github.io/XiaomiADBFastbootTools/).

5. On the Fastboot tab, in the OEM Unlocker module, click Unlock.

    **Note:** Unlocking the bootloader will result in a factory reset.

### Locking and re-unlocking the bootloader

To lock the bootloader, the device has to be clean installed in Fastboot mode. For the instructions, see [this page](flashofficial.md).

Once a device has been unlocked, it can be locked and re-unlocked using the same account countless of times, anytime, on any official or custom ROM.

### Troubleshooting

If you keep getting an error message when trying to add your account and device in developer options, move to a Developer ROM. See the instructions [here](flashofficial.md).