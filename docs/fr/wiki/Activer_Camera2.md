[Page d'index](../)

## Activer Camera2

Certaines applications pour appareils photo sur Android, comme Google Camera modifié, utilisent l'API [Camera2 API](https://developer.android.com/reference/android/hardware/camera2/package-summary) (en) d'Android, mais elle est désactivée par défaut sur les appareils Xiaomi (à l'exception du Mi 5). Si Camera2 est désactivé, ces applications (comme GCam) ne fonctionnent pas et se bloquent au lancement. Heureusement, TWRP vous permet de modifier build.prop en mode ADB et donc d'activer Camera2.

**Note : l'API camera2 est activée par défaut sur tous les appareils Xiaomi sortis avec Android 9.**

### Instructions

**Prérequis:** [TWRP](Flasher_TWRP_et_ROM_customs.md)

1. Démarrer sur TWRP.

    **Si l'appareil demande un mot de passe de déchiffrage**, entrez le code PIN/mot de passe que vous utilisez sur votre écran de verrouillage.

2. Gardez le système en lecture seule, quand on vous le demande.

3. Téléchargez et lancez Xiaomi ADB/Fastboot Tools depuis [ici](Outils_pour_les_appareils_Xiaomi.md).

4. Connectez l'appareil à votre PC. L'application devrait le détecter automatiquement.

5. Sur l'onglet ADB, dans le module Camera2, activez camera2, ainsi que EIS si vous le souhaitez.

6. En cas de succès, redémarrez l'appareil en cliquant sur "Reboot device to System" dans le menu du haut.

    Après avoir activé avec succès Camera2, vous pouvez installer un port Google Camera depuis [ici](https://www.celsoazevedo.com/files/android/google-camera/) (en). Sachez toutefois que différentes versions fonctionnent sur différents modèles et différentes ROM ; il n'y a donc pas d'option universelle, mais vous pouvez trouver des recommandations pour divers appareils [ici](https://www.xda-developers.com/google-camera-port-hub/) (en).