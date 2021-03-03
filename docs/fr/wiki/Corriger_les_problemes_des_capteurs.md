[Page d'index ](../)

## Corriger les problèmes de capteurs

Sur les appareils Xiaomi, les données des capteurs sont stockées dans une partition appelée *persist*. Cette partition est flashable et une image de celle-ci est incluse dans toutes les ROMs fastboot mais les périphériques fabriqués après 2016 ne vous permettent pas de la modifier en mode fastboot, quel que soit le statut du bootloader. Malheureusement, des problèmes logiciels peuvent entraîner un mauvais comportement ou un arrêt complet du fonctionnement des capteurs de l'appareil, mais le flashage de cette partition résout généralement ces problèmes. Si la partition est protégée en écriture en mode fastboot, vous devrez utiliser le mode EDL de Qualcomm pour la flasher. Le script de flashage EDL saute à l'origine la partition persistante mais vous pouvez le modifier pour la flasher également lorsque vous flashez avec MiFlash.

### Instructions

**Prérequis:** Un chipset Qualcomm Snapdragon

1. Téléchargez et installez la dernière version de MiFlash [ici](Outils_pour_les_appareils_Xiaomi.md).

2. Téléchargez la ROM Fastboot que vous voulez flasher depuis [ici](https://xiaomifirmwareupdater.com/miui/) (en) et dézippez là.

    **Note:** Vous pouvez obtenir un seul fichier .tar après le décompression qui doit être décompressé à nouveau afin d'obtenir les fichiers nécessaires.

3. Dans le dossier dézippé, entrez le dossier `images` et ouvrez le fichier `rawprogram0.xml` dans un éditeur de texte (Notepad++ ou VS Code recommandé).

4. Sur la **ligne** qui contient la chaîne de caractères `label="persist"`, changez `filename=""` en `filename="persist.img"`.

    S'il y a une ligne juste en dessous, qui contient la chaîne `label="persistbak"`, changez `filename=""` en `filename="persist.img"` également.

5. Sauvegardez `rawprogram0.xml` et fermez l'éditeur de texte.

6. Connectez l'appareil au PC et [entrez en mode EDL](Acceder_au_mode_EDL.md).

7. Lancez MiFlash et avec le bouton "Select", recherchez le dossier dézippé, puis cliquez sur "Refresh". L'appareil doit apparaître comme un port COM.

8. Cliquez sur "Flash" et attendez la fin de la séquence de flashage.

9. Déconnectez l'appareil et maintenez le Bouton "power" jusqu'à que l'appareil s'allume.

    Le premier démarrage peut prendre jusqu'à 15 minutes.