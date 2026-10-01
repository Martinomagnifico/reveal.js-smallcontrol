import fs from 'fs-extra'

// Simplemenu is an optional companion. Smallcontrol does not need it, but one demo
// puts the controls in a Simplemenu bar, so the built demo needs its own copy of
// the files. Skipped silently when Simplemenu is not installed.
const src = 'node_modules/reveal.js-simplemenu/plugin/simplemenu'
const dest = 'demo/plugin/simplemenu'

const copySimplemenu = async () => {
  try {
    if (!(await fs.pathExists(src))) {
      console.log('- Simplemenu is not installed, skipping its demo files')
      return
    }

    await fs.copy(src, dest, { overwrite: true })

    console.log('✓ Successfully copied Simplemenu demo files')
  } catch (err) {
    console.error('Error copying Simplemenu files:', err)
    process.exit(1)
  }
}

copySimplemenu()
