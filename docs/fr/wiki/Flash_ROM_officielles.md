[Page d'index](../)

## Flasher des ROM officielles

### Flasher des ROM Recovery dans MIUI

1. Téléchargez la ROM Recovery que vous voulez flasher [ici](https://xiaomifirmwareupdater.com/miui/) (en).

2. Utilisez l'appareil pour télécharger la ROM ou la connecter à votre PC, activer le mode MTP et y transférer le ZIP téléchargé.

3. Ouvrez l'application de mise à jour ou allez dans Paramètres > À propos du téléphone > Mise à jour du système et recherchez le ZIP en appuyant sur les options > Choisissez le package de mise à jour.

4. Confirmez votre sélection et installez la ROM.

### Flasher des ROM Recovery en mode Recovery en utilisant XiaomiADB

1. Téléchargez et dézippez XiaomiADB depuis [ici](Outils_pour_les_appareils_Xiaomi.md).

2. Téléchargez la ROM Recovery que vous voulez flasher [ici](https://xiaomifirmwareupdater.com/miui/) (en).

3. Entrez dans le MiRecovery en maintenant le bouton "power" et "vol+" en même temps pendant 5-10 secondes, ensuite selectionnez la troisième option ("Connect with MiAssistant" / "连接小米助手").

4. Connectez l'appareil à votre PC et ouvrez une invite de commande dans le dossier dézippé en tappant `cmd` dans la barre d'adresse et en appuyant sur Entrée.

5. Tapez `xiaomiadb sideload_miui` dans l'invite de commande, puis glissez-déposez le ZIP téléchargé sur la fenêtre de l'invite de commande et appuyez sur Entrée.

6. Attendez que l'installation soit terminée.

7. Débranchez l'appareil et attendez qu'il démarre.

    Le premier démarrage peut prendre jusqu'à 15 minutes.

### Flasher des ROM Fastboot en mode Fastboot en utilisant Xiaomi ADB/Fastboot Tools

**Prérequis:** [bootloader déverrouillé](Deverrouiller_bootloader.md)

1. Téléchargez Xiaomi ADB/Fastboot Tools depuis [ici](Outils_pour_les_appareils_Xiaomi.md).

2. Connectez le téléphone en mode Fastboot. Voir les instructions [ici](https://szaki.github.io/XiaomiADBFastbootTools/) (en).

3. Sur l'onglet "Fastboot", dans le module "ROM Downloader", saisissez le nom de code de l'appareil, sélectionnez la branche que vous souhaitez télécharger et cliquez sur "Download ROM".

4. Une fois la ROM téléchargée, décompressez-la.

    **Note :** Vous pouvez obtenir un seul fichier .tar après avoir décompressé, qui doit être décompressé à nouveau afin d'obtenir les fichiers nécessaires.

5. Dans l'onglet Fastboot, dans le module "Flasher", sélectionnez le dossier de la ROM dézippé, choisissez une méthode d'installation et cliquez sur "Flash ROM".

6. Attendez que la séquence de flash se termine, puis déconnectez le périphérique et attendez qu'il démarre.

    Le premier démarrage peut prendre jusqu'à 15 minutes.

### Flasher des ROM Fastboot en mode Fastboot en utilisant MiFlash

**Prérequis:** [bootloader déverrouillé](Deverrouiller_bootloader.md)

1. Téléchargez et installez la dernière version de MiFlash depuis [ici](Outils_pour_les_appareils_Xiaomi.md).

2. Téléchargez la ROM Fastboot que vous voulez flasher depuis [ici](https://xiaomifirmwareupdater.com/miui/) (en) et dézipper là.

    **Note :** Vous pouvez obtenir un seul fichier .tar après avoir décompressé, qui doit être décompressé à nouveau afin d'obtenir les fichiers nécessaires.

3. Connectez le téléphone à votre PC et entrez en mode Fastboot en maintenant "Power" et "Vol-" simultanément jusqu'à ce que l'écran d'accueil de Fastboot apparaisse.

4. Lancez MiFlash et recherchez le dossier dézippé en cliquant sur le bouton Select. Assurez-vous que le chemin d'accès au fichier ne contient pas d'espace !

5. Cliquez sur "Refresh" et sélectionnez une option de flash au bas de la fenêtre.

    `clean all` pour effectuer une *clean install* sans verrouiller le bootloader.

    `save user data` pour mettre à jour votre ROM actuelle. (Pas de migration entre différentes branches de MIUI !)

    `clean all and lock` pour effectuer une *clean install* et verrouiller le bootloader.

6. Cliquez sur "Flash" et attendez que la séquence de flash se termine.

7. Déconnectez l'appareil et attendez qu'il démarre.

    Le premier démarrage peut prendre jusqu'à 15 minutes.

### Flasher des ROM Fastboot en mode EDL avec MiFlash

1. Téléchargez et installez la dernière version de MiFlash depuis [ici](Outils_pour_les_appareils_Xiaomi.md).

2. Lancez MiFlash, installez les pilotes nécessaires en allant dans Driver > Install/Reinstall dans le menu supérieur, puis redémarrez votre PC.

3. Téléchargez la ROM Fastboot que vous voulez flasher depuis [ici](https://xiaomifirmwareupdater.com/miui/) (en) et dézippez la.

    **Note :** Vous pouvez obtenir un seul fichier .tar après avoir décompressé, qui doit être décompressé à nouveau afin d'obtenir les fichiers nécessaires.

4. Connectez l'appareil à votre PC et entrez en mode EDL en suivant les instructions [ici](Acceder_au_mode_EDL.md).

5. Lancez MiFlash et selectionnez le dossier dézippé en cliquant le bouton "Select". Assurez-vous que le chemin d'accès au fichier ne contient pas d'espace !

6. Cliquez sur "Refresh". L'appareil doit apparaître comme un port COM.

7. Cliquez sur "Flash" et attendez jusqu'à ce que la séquence de flash soit terminée.

8. Déconnectez l'appareil et maintenez le bouton "Power" et attendez qu'il démarre.

    Le premier démarrage peut prendre jusqu'à 15 minutes.