[Page d'index](../)

## Déverrouiller le bootloader

A partir du Redmi Note 3 MTK, Xiaomi a décidé de verrouiller les bootloaders de ses appareils. Ainsi, les appareils récents sont livrés avec des bootloader verrouillés dès leur sortie de la boîte. Un bootloader verrouillé empêche l'utilisateur de flasher des choses en mode fastboot, y compris un custom recovery et les ROM customs. Le mode fastboot **est** le bootloader, donc s'il est verrouillé, les modifications sur le périphérique ne peuvent pas être faites dans ce mode.

### Déverrouiller les appareils MIUI

1. Allez dans les paramètres > Compte Mi et connectez vous à votre compte.

2. Allez dans les paramètres > À propos du téléhpone et tapez sur la version MIUI 7 fois pour activer les options développeurs.

3. Allez dans les paramètres > Paramètres supplémentaires > Options développeurs > Status du dévérouillage et ajoutez votre compte Mi.

    **Vous ne pourrez poursuivre que si cela fait plus de 72 ou 360 heures que vous avez ajouté avec succès votre compte et votre appareil. Le temps d'attente dépend du modèle de téléphone, vous pouvez vérifier le temps restant en essayant de le débloquer.**

4. Téléchargez, extrayez et lancez [MiUnlock](Outils_pour_les_appareils_Xiaomi.md).

5. Connectez vous avec votre compte Mi.

6. Passez en mode fastboot sur l'appareil en maintenant la touche Power et Vol- enfoncées jusqu'à ce que l'écran de démarrage apparaisse, puis connectez-le à votre PC.

7. Suivez les instructions qui s'affichent à l'écran et déverrouillez le bootloader.

    **Note :** Le déverrouillage du bootloader entraîne une réinitialisation d'usine.

### Déverrouiller les appareils Android One

1. Allez dans les paramètres > Système > À propos du téléphone et tapez sur le numéro de build 7 fois pour activer les options développeur.

2. Allez dans les paramètres > Système > Options développeur et activez le déverrouillage OEM.

3. Téléchargez et lancez Xiaomi ADB/Fastboot Tools depuis [ici](Outils_pour_les_appareils_Xiaomi.md).

4. Connectez le téléphone en mode fastboot. Voir les instructions [ici](https://szaki.github.io/XiaomiADBFastbootTools/) (en).

5. Dans l'onglet Fastboot, dans le module "OEM Unlocker", cliquez sur "Unlock".

    **Note :** Le déverrouillage du bootloader entraîne une réinitialisation d'usine.

### Verrouillage et déverrouillage du bootloader

Pour verrouiller le bootloader, le périphérique doit être *clean install* en mode Fastboot. Pour les instructions, voir [cette page](Flash_ROM_officielles.md).

Une fois qu'un appareil a été déverrouillé, il peut être verrouillé et déverrouillé à nouveau en utilisant le même compte d'innombrables fois, à tout moment, mais uniquement sur la branche avec laquelle le téléphone est venu (si votre appareil était livré avec la version EEA, il faut vérrouiller sur la branche EEA).

**Note :** Il ne faut jamais verrouiller le bootloader sur une autre branche pour ne pas bricker l'appareil.


### Résolution des problèmes

Si vous continuez à recevoir un message d'erreur lorsque vous essayez d'ajouter votre compte et votre appareil dans les options pour développeurs, passez à une ROM globale stable. Voir les instructions [ici](Flash_ROM_officielles.md).