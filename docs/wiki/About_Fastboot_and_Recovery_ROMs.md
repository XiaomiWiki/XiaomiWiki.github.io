[Index page](../)

## About Fastboot & Recovery ROMs

The ROM packages you can flash on your device come in two formats: **Fastboot ROMs** and **Recovery ROMs**.

**Fastboot ROMs** come in .tgz files, they're around 2GB in size, contain images for nearly all partitions and have flashing scripts for major desktop operating systems. Flashing a Fastboot ROM is very thorough, clean and flashes nearly all partitions on a device.

**Recovery ROMs** come in .zip files, they're lighter and contain images only for the most important partitions. Flashing a Recovery ROM isn't as clean as flashing a Fastboot ROM as it leaves many partitions untouched.

Official MIUI ROMs are available in the forms of [Fastboot ROMs](https://c.mi.com/global/miuidownload/detail?guide=2) and [Recovery ROMs](https://c.mi.com/global/miuidownload/index). Recovery ROMs can be flashed using MIUI itself or XiaomiADB, while Fastboot ROMs can be flashed using MiFlash or the Xiaomi ADB/Fastboot Tools and they also need an unlocked bootloader. More info [here](Flash_official_ROMs.md).

Custom ROMs are available only in the form of Recovery ROMs and can only be flashed in TWRP. More info [here](Flash_TWRP_and_custom_ROMs.md).