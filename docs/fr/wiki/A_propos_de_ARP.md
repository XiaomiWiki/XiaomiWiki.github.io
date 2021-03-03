[Page d'index](../)

## À propos de ARP (Protection Anti-Rollback)

La protection anti-rollback (ARP) a été introduite par Google dans Android 8.0 (Oreo) et ils ont rendu sa mise en œuvre obligatoire pour les appareils lancés avec Android 9.0 (Pie). L'ARP est une contre-mesure de sécurité visant à empêcher les appareils de démarrer des versions plus anciennes et moins sûres d'Android. Dans l'implémentation de Google, l'ARP est désactivé si le bootloader est déverrouillé, alors que sur les appareils Xiaomi, il ne peut pas être désactivé une fois qu'il est activé par une ROM qui l'implémente. Xiaomi a probablement pris cette décision pour empêcher les revendeurs d'exploiter les vulnérabilités trouvées dans les anciennes versions de MIUI.


### Vérifier si ARP est activé

1. Téléchargez et lancez Xiaomi ADB/Fastboot Tools depuis [ici](Outils_pour_les_appareils_Xiaomi.md).

2. Connectez l'appareil en mode Fastboot. Voir les instructions [ici](https://szaki.github.io/XiaomiADBFastbootTools/).

Si vous n'obtenez pas de numéro pour l'anti version, l'ARP n'est pas activé. Si vous obtenez un numéro, l'ARP est activé.

### Explications de l'anti version

Avoir une anti version signifie que vous ne pouvez pas flasher la ROM que vous voulez, seulement les ROM qui ont une anti version égale ou supérieure à celle de l'appareil.

* Flasher une ROM dont l'anti version est supérieure à celle de l'appareil lui donne une valeur plus élevée.
* Flasher une ROM avec une anti version égale à celle de l'appareil ne changera rien.
* Flasher une ROM avec une anti version inférieure à celle de l'appareil donnera lieu à un *hard brick*.

Pour l'instant, seules les ROM Fastboot vérifient l'anti version et agissent en conséquence. Elles seront abandonnées sans modification si la version anti de l'appareil est supérieure à la sienne.

Les ROMs customs ne sont pas affectées par l'ARP et le fait de les flasher ne brickera pas l'appareil ou ne changera pas l'anti version.