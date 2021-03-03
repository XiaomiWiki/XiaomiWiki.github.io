[Page d'index](../)

## Flasher TWRP et des ROM customs

TWRP est une récupération personnalisée qui remplace MiRecovery / l'écran d'accueil de la suite Mi PC. Un custom Recovery donne à l'utilisateur plus d'options pour gérer le système de l'appareil, plus d'options pour flasher les ROM, effacer ou sauvegarder. Un custom Recovery, tel que TWRP, est nécessaire pour flasher des ROMs, des noyaux, etc. ou rooter son appareil.

### Utiliser TWRP sans le flasher

**Prérequis:** [bootloader déverrouillé](Deverrouiller_bootloader.md)

1. Téléchargez et si nécessaire, décompressez le fichier image du Recovery que vous voulez flasher. Si une ROM custom nécessite de flasher une version spécifique de TWRP, cela est noté par le développeur sur XDA.

    Les appareils sont désignés par leur nom de code, si vous ne connaissez pas le nom de code de l'appareil, voir [ceci](https://i.imgur.com/iZoFg2t.png).

    [Builds TWRP officielles](https://twrp.me/Devices/) (en)

    [Builds TWRP non officielles](https://www.androidfilehost.com/?w=files&flid=50678) (en)

2. Téléchargez et lancez Xiaomi ADB/Fastboot Tools depuis [ici](Outils_pour_les_appareils_Xiaomi.md).

3. Connectez l'appareil en mode Fastboot. Voir les instructions [ici](https://szaki.github.io/XiaomiADBFastbootTools/) (en).

4. Dans l'onglet "Fastboot", dans le module "Flasher", sélectionez votre image recovery, selectionnez la partition recovery et cliquer sur "Boot into image".

    **Si TWRP apparaît en chinois**, changez la langue en appuyant sur le bouton de droite.

    **Si l'appareil demande un mot de passe de déchiffrage**, saisissez le code PIN/mot de passe que vous utilisez sur l'écran de vérouillage. Si cela ne fonctionne pas, formatez les données dans le menu Wipe, puis redémarrez en sur TWRP.

5. Lorsqu'on vous le demande dans le TWRP, glissez le curseur pour autoriser les modifications et procédez à ce que vous voulez faire dans TWRP.

### Flasher TWRP

**Prérequis:** [bootloader déverrouilé](Deverrouiller_bootloader.md)

**Note :** Ces instructions ne s'appliquent pas aux appareils Android One.

1. Téléchargez et si nécessaire, décompressez le fichier image Recovery que vous voulez flasher. Si une ROM custom nécessite de flasher une version spécifique de TWRP, cela est noté par le développeur sur XDA.

    Les appareils sont désignés par leur nom de code, si vous ne connaissez pas le nom de code de l'appareil, voir [ceci](https://i.imgur.com/iZoFg2t.png).

    [Builds TWRP officielles](https://twrp.me/Devices/) (en)

    [Builds TWRP non officielles](https://www.androidfilehost.com/?w=files&flid=50678) (en)

2. Téléchargez et lancez Xiaomi ADB/Fastboot Tools depuis [ici](Outils_pour_les_appareils_Xiaomi.md).

3. Connectez l'appareil en mode Fastboot. Voir les instructions [ici](https://szaki.github.io/XiaomiADBFastbootTools/) (en).

4. Dans l'onglet Fastboot, dans le module Flasher, cochez l'option autoboot, ensuite, selectionnez l'image Recovery, selectionnez la partition Recovery et cliquez sur "Flash image".

    **Note :** Si la protection anti-rollback est activée sur l'appareil, vous devez désactiver la protection anti-rollback avant de flasher.

    **Si TWRP apparaît en chinois**, changez la langue en appuyant sur le bouton de droite.

    **Si l'appareil demande un mot de passe de déchiffrage**, saisissez le code PIN/mot de passe que vous utilisez sur l'écran de vérouillage. Si cela ne fonctionne pas, formatez les données dans le menu Wipe, puis redémarrez en sur TWRP.

5.  Lorsqu'on vous le demande dans le TWRP, glissez le curseur pour autoriser les modifications et procédez à ce que vous voulez faire dans TWRP.

    **Avertissement :** Pour utiliser le MIUI officiel avec TWRP flashé, vous devez désactiver dm-verity en flashant Magisk ou Lazyflasher. Dm-verity fait en sorte que MIUI efface TWRP au démarrage et peut également faire démarrer le périphérique en boucle (aussi connu sous le nom de *bootloop*).

### Clean install dans TWRP

1. Démarrez sur TWRP.

    **Si l'appareil demande un mot de passe de déchiffrage**, ignorez le, allez dans le menu Wipe, formatez la partition data et redémarrez sur TWRP.

    **Note :** TWRP active MTP donc si vous connectez l'appareil à un PC, les stockages interne et externe deviennent accessibles.

2. Connectez l'appareil à votre PC et transférez tout ce que vous voulez flasher sur la mémoire interne ou externe de l'appareil.

3. Allez dans Wipe > Advanced Wipe et effacez **Cache**, **Dalvik Cache** et **System**.

4. Ensuite, allez dans le menu Install, recherchez les éléments que vous avez transférés sur l'appareil et flashez les. Ordre recommandé :

    1. Flashez la ROM.
    2. Flashez OpenGApps (optionel).
    3. Effacez **Data** dans le menu Wipe.
    4. Flashez tout le reste (optionel).
    5. Effacez **Internal Storage** dans le menu Wipe.

5. Une fois que vous en avez fini avec tout, redémarrez le système.

### Mise à jour dans TWRP

1. Entrez dans TWRP.

    **Si l'appareil demande un mot de passe de déchiffrage**, saisissez le code PIN/mot de passe que vous utilisez sur l'écran de vérouillage. Si cela ne fonctionne pas, formatez les données dans le menu Wipe, puis redémarrez en sur TWRP.

    **Note :** TWRP active MTP donc si vous connectez l'appareil à un PC, les stockages interne et externe deviennent accessibles.

2. Connectez l'appareil à votre PC et transferez tout ce que vous voulez flasher dans le stockage interne ou externe de l'appareil.

3. Allez dans le menu "Install", recherchez les éléments que vous avez transférés sur l'appareil et flashez les.

4. Une fois que vous avez flashé, effacez **Cache** et **Dalvik Cache**, puis redémarrez sur le système.