## WhiteLabel Module

Load any whitelabel styling on the fly, you can for example change the primary color whenever you want.

## Features

- Overwrite any sass variables whenever you want
- Functionality to easily setup a custom brand style, allowing you to load a brand based on your own logic.
- Easy to adjust to support any variables you want
- Loads Atlas colors by default

## Installation

1. Download the module from the appstore
2. In the project settings in the theme tab make sure the module is loaded last
3. Open the project folder and then copy the content from the overwrite folder (should be in themesource/whitelabel/web/overwrite) and paste it inside the root folder of your project, this will overwrite some atlas core files and the custom-variables.scss file. Do note that any changes you have done to these files will be lost.

![copy-overwrite-folder](copy-overwrite-folder.png)

## Email headers

In order to correctly send a ICS file via an Email you need to set the correct attachment header. If you are using the Email Connector module you should use their Attachment mechanism to add the ICS file to an email. You can then use the `attachmentContentType` attribute from the `Attachment` entity in the Email Connector module to set the correct header. The value should be something like this `text/calendar; charset=utf-8; method=REQUEST; name=event.ics`. Notice here that you have to set the correct method to the same value that the ical status has.


## Issues, Suggestions, and Feature Requests

Please feel free to raise any issues, share suggestions, or request new features on the GitHub repository:
[WhiteLabel Module GitHub Issues](https://github.com/hunter-koppen/WhiteLabelModule/issues)