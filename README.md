# OpenAepFolder

Quick After Effects script to open the current project's folder in File Explorer/Finder.

## What it does

- Checks if your project is saved
- If saved: Opens the project's parent folder in your system's file explorer
- If not saved: Shows an alert asking you to save first

Perfect for quickly accessing project assets, renders, or related files without manually navigating through folders.

## Installation

1. Copy `OpenProjectFolder.jsx` to your After Effects Scripts folder:
   ```
   Windows: C:\Program Files\Adobe\Adobe After Effects [version]\Support Files\Scripts\
   macOS: /Applications/Adobe After Effects [version]/Scripts/
   ```

2. Restart After Effects

## Usage

**File → Scripts → OpenProjectFolder.jsx**

The script will instantly open your project's folder, making it easy to:
- Access project assets quickly
- Navigate to renders folder
- Organize related files
- Browse project structure

## Requirements

- Adobe After Effects (any version with scripting support)
- Project must be saved to disk

## Code

```javascript
if(app.project.file == null) { 
    alert("You have to save the project first"); 
} else { 
    app.project.file.parent.execute(); 
}
```

## License

MIT License - feel free to modify and distribute.
