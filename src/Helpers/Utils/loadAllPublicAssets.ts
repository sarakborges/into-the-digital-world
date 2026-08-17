export async function loadAllPublicAssets() {
  const assetDirectories = [
    'attributes',
    'avatars',
    'digimons',
    'digivice_backgrounds',
    'families',
    'items',
    'languages',
    'npc_portraits',
    'npcs',
    'cenes',
    'apps',
  ];

  const assetFileTypes = ['.png', '.jpg', '.jpeg', '.gif', '.svg', '.webp', '.mp3', '.wav', '.ogg', '.json', '.xml'];

  const loadedAssets: string[] = [];
  const failedAssets: string[] = [];

  const base = process.env.PUBLIC_URL || '';

  for (const directory of assetDirectories) {
    for (const ext of assetFileTypes) {
      const assetPath = `${base}/public/${directory}/*${ext}`;
      try {
        const response = await fetch(assetPath);
        if (response.ok) {
          loadedAssets.push(assetPath);
        } else {
          failedAssets.push(assetPath);
        }
      } catch (error) {
        failedAssets.push(assetPath);
      }
    }
  }

  if (failedAssets.length > 0) {
    console.warn('Failed to load some public assets:', failedAssets);
  }

  return {
    loaded: loadedAssets,
    failed: failedAssets,
  };
}

