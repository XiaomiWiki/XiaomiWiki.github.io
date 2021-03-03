[Page d'index](../)

## Ajuster la ROM chinoise pour une utilisation mondiale

Il y a quelques appareils Xiaomi qui n'ont pas de ROMs globales officielles disponibles. La meilleure solution pour ces appareils est d'installer la ROM Xiaomi.eu qui est une ROM de Chine sans bloat et optimisée avec Google Play, adaptée à une utilisation occidentale. Toutefois, comme il s'agit d'une ROM personnalisée, son installation nécessite un bootloader déverrouillé et de TWRP. Déverrouiller le bootloader et flasher TWRP peut être long et fastidieux, ce qui est compréhensible si quelqu'un veut continuer à utiliser son appareil sur la ROM chinoise temporairement, ou tout le temps parce qu'il n'est pas intéressé de flasher des ROM customs. Heureusement, il existe plusieurs façons de rendre la ROM de Chine plus agréable à utiliser pour les utilisateurs du monde entier.

### Débloater la ROM

* Allez dans paramètres > Applications installées et désinstaller toutes les applications que vous pouvez dans la liste.

    Vous pouvez également appuyer sur "Désinstaller" en haut, cocher toutes les applications et les désinstaller.

* Vous pouvez désinstaller la plupart des autres applications système en utilisant [Xiaomi ADB/Fastboot Tools](Desinstaller_applications_systeme.md) (en).

### Installer le Google Play Store

1. Allez dans les paramètres > Paramètres supplémentaires > Vie privée et activez les sources inconnues.

2. Lancez le Mi App Store et chercher "google". L'installateur Google Play devrait apparaître comme le seul résultat.

3. Téléchargez, installez et lancez l'installateur.

4. Appuyez sur le gros bouton bleu pour commencer le processus d'installation.

5. Installez chaque module, en appuyant toujours sur "Terminé" une fois qu'un module a été installé avec succès.

6. A la fin, le gros bouton devient rouge. En appuyant dessus, la boutique Google Play se lance et vous pouvez configurer votre compte Google.

### Définir les paramètres par défaut des applications

1. Allez dans les paramètres > Applications installées, tapez sur les trois points dans le coin supérieur droit et sélectionnez "Défauts".

2. Définissez ici les valeurs par défaut des applications que vous avez téléchargées, le cas échéant.

### Tout mettre en français

1. Installez un clavier (comme Gboard ou SwiftKey) et Google Text-to-speech depuis le Google Play Store.

2. Allez dans paramètres > Paramètres supplémentaires > Langue et saisie.

3. Sélectionnez le clavier actuel > Choisissez les claviers et activez votre clavier puis désactivez Baidu IME et le clavier Sogou.

4. Configurez votre (vos) clavier(s).

5. Sélectionnez "Vérificateur d'orthographe" et réglez-le sur le vérificateur d'orthographe de Google.

6. Sélectionnez la sortie Text-to-speech et réglez-la sur celle de Google.

### Activer les services de localisation de Google pour les applications

La plupart des applications du Google Play Store utilisent les services de localisation de Google qui ne sont pas présents sur la ROM de Chine et ne sont pas activés lorsque vous installez le Google Play Store.

1. Allez dans paramètres > Paramètres supplémentaires > Confidentialité > Localisation et appuyer sur **Appareil seulement** et ensuite sur **Haute précision**. Une fenêtre contextuelle vous invite à activer les services de localisation de Google.

2. En appuyant sur "Accès à la localisation", vous pouvez également donner accès à toutes les applications que vous souhaitez voir votre localisation.

### Synchronisation avec votre compte Google

1.  Allez dans paramètres > Synchronisation > Google et tapez sur Plus et synchroniser maintenant.

### Donner aux services de Google les autorisations nécessaires

1. Allez dans paramètres > Permissions.

2. Sélectionnez "Autostart" et désactivez l'autostart pour les applications chinoises.

3. Sélectionnez Permissions et donnez le plus d'autorisations possible aux **Google Play services**, au **Google Play Store** et au **Google Services Framework**. Sans ces autorisations, certaines applications Google ne fonctionneront pas correctement.