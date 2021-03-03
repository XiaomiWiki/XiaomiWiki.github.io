[Page d'index](../)

## À propos des ROMS Fastboot et Recovery

Les paquets de ROM que vous pouvez flasher sur votre appareil existent en deux formats : **ROM Fastboot** et **ROM Recovery**.


**Les ROM fastboot** sont des fichiers .tgz, d'une taille d'environ 2 Go, contenant des images pour presque toutes les partitions et comportant des scripts pour flasher les principaux systèmes d'exploitation. Le flashage d'une ROM Fastboot est très complet, propre et flash presque toutes les partitions d'un appareil.

**Recovery ROMs** se présentent sous forme de fichiers .zip, ils sont plus légers et ne contiennent des images que pour les partitions les plus importantes. Le flashage d'une ROM recovery n'est pas aussi propre que le flashage d'une ROM fastboot, car il laisse de nombreuses partitions intactes.

Les ROM officiels de MIUI sont disponibles sous les formes suivantes [ROM Fastboot](https://c.mi.com/global/miuidownload/detail?guide=2) (en) et [ROM Recovery](https://c.mi.com/global/miuidownload/index) (en). Les ROM recovery peuvent être flashées en utilisant MIUI lui-même ou XiaomiADB, tandis que les ROMs Fastboot peuvent être flashées en utilisant MiFlash ou Xiaomi ADB/Fastboot Tools et elles ont également besoin d'un bootloader déverrouillé. Plus d'infos [ici](Flash_ROM_officielles.md).

Les ROM custom ne sont disponibles que sous la forme de ROM recovery et ne peuvent être flashées que dans TWRP. Plus d'informations [ici](Flasher_TWRP_et_ROM_customs.md).