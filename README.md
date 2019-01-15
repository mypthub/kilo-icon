# Kilo Icons

Generate Font Icons

Icon font is generated using icon font generator. It converts svg files to icon font set and css file.

You can update custom icon set by copying the [filename].svg icon to the proper folder.

Icon will be available to use as a <i class="icon-[filename]"></i> or <v-icon>icon-[filename]</v-icon>

# Install Icon Font Generator
`npm install`

# Add new .svg icons
Font will auto generate items from the `/src/assets/logo-icons` folder

# Generate Font
`npm run build`

# Use Font 
`<v-icon>kilo-[filename]</v-icon>`

or

use `icons.json` file to control the mappings manually.
