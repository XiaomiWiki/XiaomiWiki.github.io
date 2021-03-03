[Page d'index](../)

## Accéder au mode EDL

Le mode EDL (Emergency Download) est utilisé dans les appareils basés sur un processeur Qualcomm pour le déblocage/flashage. Le mode EDL contourne le bootloader et MiFlash peut interagir avec lui. Il existe plusieurs façons d'accéder au mode EDL, mais elles nécessitent généralement de déverrouiller le bootloader.

**Note : Le mode EDL n'est pas accessible sur les appareils verrouillés qui ont été mis sur le marché en 2017 ou plus tard.**

### Méthode ADB/Fastboot

1. Téléchargez et lancez Xiaomi ADB/Fastboot Tools depuis [ici](Outils_pour_les_appareils_Xiaomi.md).

2. Connectez l'appareil en mode ADB ou Fastboot. Voir les instructions [ici](https://szaki.github.io/XiaomiADBFastbootTools/) (en).

3. Redémarrez l'appareil en mode EDL en cliquant sur "Reboot device to EDL" dans le menu du haut.

4. En entrant en mode EDL, l'écran du téléphone doit s'éteindre et le voyant de notification peut également clignoter.

    Pour quitter le mode EDL, maintenez le bouton Power enfoncé pendant 5 à 10 secondes.

### Méthode fastboot pour le Redmi Note 3 SD / édition spéciale

1. Téléchargez et extrayez [ce paquet](https://www.androidfilehost.com/?fid=24591000424940129) (en) sur votre PC.

2. Passez en mode "fastboot" en maintenant simultanément les touches "Power" et "Vol-". Attendez que le lapin Mi apparaisse, puis connectez l'appareil au PC.

3. Exécutez reboot.bat dans le paquet extrait. Une invite de commande apparaîtra. Appuyez sur une touche pour redémarrer l'appareil en mode EDL.

4. En entrant en mode EDL, l'écran du téléphone doit s'éteindre et le voyant de notification peut également clignoter.

    Pour quitter le mode EDL, maintenez le bouton Power enfoncé pendant 10 secondes.

### Méthode du menu recovery pour la série Redmi 3/4

1. Entrez dans le menu recovery en maintenant les touches Power et Vol+ enfoncées en même temps jusqu'à ce que le menu recovery apparaisse.

2. Dans le menu recovery, sélectionnez "Download Mode".

3. En entrant en mode EDL, l'écran du téléphone doit s'éteindre et le voyant de notification peut également clignoter.

    Pour quitter le mode EDL, maintenez le bouton Power enfoncé pendant 10 secondes.