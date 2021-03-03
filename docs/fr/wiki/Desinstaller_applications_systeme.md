[Page d'index](../)

## Désinstaller les applications système

Par défaut, MIUI est livré avec de nombreuses applications système qui remplacent les applications Android d'origine et fournissent également des fonctionnalités populaires que vous obtiendriez habituellement avec des applications tierces de Google Play. Malgré ce qu'elles offrent, beaucoup d'utilisateurs considèrent ces applications comme des bloatware et veulent s'en débarrasser pour libérer de l'espace et avoir moins d'icônes sur l'écran d'accueil. MIUI ne donne pas à l'utilisateur la possibilité de supprimer ces applications et services, mais l'Android Debug Bridge est capable de le faire.

### Instructions

1. Télécharger et lancer Xiaomi ADB/Fastboot Tools depuis [ici](Outils_pour_les_appareils_Xiaomi.md).

2. Connectez l'appareil en mode ADB. Voir les instructions [ici](https://szaki.github.io/XiaomiADBFastbootTools/) (en).

3. Dans l'onglet ADB, dans le module de désinstallation, sélectionnez toutes les applications et tous les services que vous souhaitez supprimer et cliquez sur Désinstaller !

    **Note :** Le désinstallateur ne répertorie que les applications qui ne sont pas nécessaires aux fonctionnalités de base, donc les supprimer ne brisera pas l'appareil.

4. Ensuite, redémarrez l'appareil pour finaliser les modifications en cliquant sur Reboot device to System dans le menu du haut.

### Réinstaller les applications précédemment désinstallées

1. Lancez Xiaomi ADB/Fastboot Tools et connectez l'appareil en mode ADB.

2. Dans l'onglet ADB, dans le module "Resinstaller", sélectionnez toutes les applications et tous les services que vous souhaitez réinstaller et cliquez sur Réinstaller !

3. Ensuite, redémarrez l'appareil pour finaliser les modifications en cliquant sur Reboot device to System dans le menu du haut.