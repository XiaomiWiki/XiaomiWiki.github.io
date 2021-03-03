[Index page](../)

## Tweak the China ROM for global use

There are a couple of Xiaomi devices that don't have official Global ROMs available. The best solution for these devices is installing the Xiaomi.eu ROM which is a debloated and optimised China ROM with Google Play, suitable for Western use. However, since it's a custom ROM, installing it requires an unlocked bootloader and TWRP. Unlocking the bootloader and flashing TWRP might be lengthy and annoying, so it's understandable if someone wants to keep using their device on the China ROM temporarily, or all the time because they aren't interested in flashing custom ROMs. Thankfully there are several ways to make the China ROM more pleasant to use for global users.

### Debloat the ROM

* Go to Settings > Installed apps and uninstall every app you can on the list.

    Alternatively, tap Uninstall on the top, check all the apps and uninstall them.

* You can uninstall most other systems apps using the [Xiaomi ADB/Fastboot Tools](Uninstall_system_apps.md).

### Install the Google Play Store

1. Go to Settings > Additional settings > Privacy and enable Unknown sources.

2. Launch the Mi App Store and search for "google". The Google Play Installer should come up as the only result.

3. Download, install and launch the installer.

4. Tap the big blue button to begin the installation process.

5. Install each module, always tap Done once a module has been installed successfully.

6. At the end, the big button turns red. Upon tapping it, the Google Play Store launches and you can set up your Google account.

### Set app defaults

1. Go to Settings > Installed apps, tap on the three dots in the top-right corner and select Defaults.

2. Here set the defaults to apps you downloaded, where applicable.

### Make everything English

1. Install a keyboard (like Gboard or SwiftKey) and Google Text-to-speech from the Google Play Store.

2. Go to Settings > Additional settings > Languages & input.

3. Select Current Keyboard > Choose keyboards and enable your keyboard then disable Baidu IME and the Sogou Keyboard.

4. Set up your keyboard(s).

5. Select Spell checker and set it to Google's spell checker.

6. Select Text-to-speech output and set it to Google's own.

### Enable Google location services for apps

Most apps from the Google Play Store use Google's location services which are not present on the China ROM and aren't activated when you install the Google Play Store.

1. Go to Settings > Additional settings > Privacy > Location and tap on **Device only** then on **High accuracy**. A pop-up will prompt you to enable Google's location services, enable it.

2. By tapping on Location access, you can also give access to every app you want to see your location.

### Sync with your Google account

1. Go to Settings > Sync > Google and tap on More then Sync now.

### Give Google services the necessary permissions

1. Go to Settings > Permissions.

2. Select Autostart and disable autostart for Chinese applications.

3. Select Permissions and give **Google Play services**, the **Google Play Store** and the **Google Services Framework** the most permissions you can. Without some permissions, some Google apps won't work properly.